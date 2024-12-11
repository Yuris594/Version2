
"use client";

import { Box, IconButton, InputBase, LinearProgress, Paper, Tab, Tabs, Typography, } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

import Banner from "../../../components/banner/banner";
import BotonExcel from "@/app/hooks/useExportoExcel";
import { Conexion } from "@/conexion";

const fDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("es-ES", options);
};

const columns = [
  { field: "ARTICULO", headerName: "COD", width: 130 },
  { field: "DESCRIPCION", headerName: "REFERENCIA", width: 700 },
  { field: "SUBLINEA", headerName: "SUBLINEA", width: 300 },
  { field: "TOTAL_DISP", headerName: "DISP", width: 130 },
  { field: "PRECIO", headerName: "PRECIO", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    },
  },
  { field: "PORC_IMPUESTO", headerName: "IVA", width: 100 },
  { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    }, 
  },
  { field: "PORC_DCTO", headerName: "D1", width: 130 },
  { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 130 },
  { field: "EXIST_REAL", headerName: "EXISTREAL", width: 130 },
];

const columnsP = [
  { field: "FECHA", headerName: "Fecha", width: 250,
    renderCell: (params) => fDate(params.value),
  },
  { field: "CLIENTE", headerName: "CLIENTE", width: 180 },
  { field: "PEDIDO", headerName: "PEDIDO", width: 150, cellClassName: 'pedido-cell' },
  { field: "PED", headerName: "PED", width: 100,  },
  { field: "DESP", headerName: "DESP", width: 120, },
  { field: "PEND", headerName: "PEND", width: 130, },
  { field: "ESTADO", headerName: "ESTADO", width: 160 },
  { field: "AUTORIZADONOM", headerName: "AUTORIZADO", width: 200,
    renderCell: (params) => {
      const AUTORIZADONOM = params.row.AUTORIZADONOM;
      const cellStyle = {
        color:
        AUTORIZADONOM === "APROBADO"
        ? "#00FC00"
        : AUTORIZADONOM === "RETENIDO"
        ? "#FF1507"
        : "#000000",
        backgroundColor: "transparent",
      };
      return <Typography style={cellStyle}>{AUTORIZADONOM}</Typography>;
    },
  },
  { field: "VE", headerName: "VEND", width: 100, cellClassName: "autor-cell" },
];

const columnsF = [
  { field: "FACTURA", headerName: "FACTURA", width: 130, cellClassName: "plazo-cell" },
  { field: "FECHA_DESPACHO", headerName: "FECHA", width: 190,
    renderCell: (params) => fDate(params.value),
  },
  { field: "ANULADA", headerName: "AN", width: 50 },
  { field: "PRECIO_TOTAL", headerName: "V. FACT", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    },
  },
  { field: "PEDIDO", headerName: "PEDIDO", width: 130, cellClassName: 'pedido-cell' },
  { field: "ARTICULO", headerName: "ARTICULO", width: 130 },
  { field: "DESCRIPCION", headerName: "DESCRIPCION", width: 700 },
  { field: "CANTIDAD", headerName: "CANT", width: 130 },
  { field: "PRECIO_UNITARIO", headerName: "PRECION UNI.", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    }, 
  },
  { field: "PORCIVA", headerName: "IVA", width: 100 },
  { field: "PORDESC", headerName: "DESC", width: 100, },
  { field: "VDESC", headerName: "V DESC", width: 130 },
  { field: "TOTAL_MERCADERIA", headerName: "VTotal ", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    }, cellClassName: "autor-cell",
  },
  { field: "IDRUTERO", headerName: "ID RUTERO", width: 130 },
  { field: "IDGUIA", headerName: "ID GUIA", width: 130 },
  { field: "OBSERVACIONES", headerName: "OBSERVACIONES", width: 800 },
  { field: "RUBRO1", headerName: "DOCS 2", width: 500 },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const obtenerProductos = async () => {
  const response = await fetch(Conexion.url + "/productos/listar_solo_para_mg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const obtenerFacturas = async (articulo) => {
  const response = await fetch(Conexion.url + `/productos/facturas/${articulo.ARTICULO}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay facturas para este producto.");
      return [];
    }
  }
  return response.json();
};

const obtenerPedidos = async (articulo) => {
  const response = await fetch(Conexion.url + `/productos/pedidos/${articulo.ARTICULO}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay pedidos para este producto.");
      return [];
    }
  }
  return response.json();
};

const productosMG = () => {
  const [value, setValue] = useState(0);
  const [pedidos, setPedidos] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [articulo, setArticulo] = useState("");
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const [cargando2, setCargando2] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setCargando(true);
  }, [value]);

  useEffect(() => {
    conseguirProductos();
  }, []);

  const conseguirProductos = async () => {
    const datos = await obtenerProductos();
    try {
      if (datos) {
        setProductos(datos);
        setTablaProducto(datos);
        setCargando2(false);
      } else {
        setProductos([]);
        setCargando2(false);
      }
    } catch (error) {
      console.log("Error al obtener usuarios", error);
    }
  };
 
  const memo = useMemo(() => conseguirProductos, []);

  useEffect(() => {
    memo();
  }, [memo]);

  const conseguirFacturas = async () => {
    const datos = await obtenerFacturas(articulo);
    setFacturas([]);
    try {
      if (datos) {
        setFacturas(datos);
        setCargando(false);
      } else {
        setFacturas([]);
        setCargando(false);
      }
    } catch (error) {
      console.log("Error al obtener usuarios", error);
    }
  };

  const conseguirPedidos = async () => {
    const datos = await obtenerPedidos(articulo);
    setPedidos([]);
    try {
      if (datos) {
        setPedidos(datos);
        setCargando(false);
      } else {
        setPedidos([]);
        setCargando(false);
      }
    } catch (error) {
      console.log("Error al obtener usuarios", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaProducto.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda));
    });
    setProductos(resultadosBusqueda);
  };

  const handleSelection = useCallback((selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = tablaProducto.filter((elemento) => {
          const ARTICULO = elemento.ARTICULO;
          if (ARTICULO) {
            const productoString = ARTICULO.toString();
            return productoString.includes(selectionModel[0]);
          }
          return false;
        });
        setArticulo(resultadosFiltrados[0]);
      }
    },
    [productos]
  );

  return (
    <>
      <Box>{" "}<Banner />{" "}</Box>

      <div className="container">
        {cargando2 === true ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <Box>
            <Box>
            <h2><strong>PRODUCTOS MG</strong></h2>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1, }}>
                <BotonExcel datos={productos} />
              </Box>
              <h2 style={{ display: "flex", justifyContent: "column", alignItems: "center", width: "auto", margin: 0, color: "#920b0d", }}>
                {articulo.DESCRIPCION}
              </h2>
              <Paper elevation={3} sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 700, margin: "10px", }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar..."
                  inputProps={{ "aria-label": "search google maps" }}
                  autoFocus
                  value={busqueda}
                  onChange={handleChange}
                />
                <IconButton title="buscar" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChanges} aria-label="basic tabs example">
                <Tab label="Articulos" {...allyProps(0)} />
                <Tab label={`Pedidos:${pedidos.length}`} {...allyProps(1)} onClick={conseguirPedidos} />
                <Tab label={`Facturas:${facturas.length}`} {...allyProps(2)} onClick={conseguirFacturas} />
              </Tabs>
            </Box>

            <CustomTabPanel componente={Box} value={value} index={0}>
              <Box sx={{ width: "100%", height: 860 }}>
                <DataGrid
                  rows={productos}
                  columns={columns}
                  getRowId={(row) => row.ARTICULO}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 14 },
                    },
                  }}
                  rowSelectionModel={selectedRows}
                  onRowSelectionModelChange={handleSelection}
                  pageSizeOptions={[5, 14, 20]}
                  sx={{
                    "& .MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </Box>
            </CustomTabPanel>

            <CustomTabPanel component={Box} value={value} index={1}>
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
                ) : pedidos.length <= 0 ? (
                  <h2>NO HAY PEDIDOS</h2>
                ) : (
                <Box sx={{ width: "100%", height: 860 }}>
                  <DataGrid
                    rows={pedidos}
                    columns={columnsP}
                    getRowId={(row) => row.PEDIDO}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 14 },
                      },
                    }}
                    pageSizeOptions={[5, 14, 20]}
                    sx={{
                      "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: "bold",
                      },
                    }}
                  />
                </Box>
              )}
            </CustomTabPanel>

            <CustomTabPanel component={Box} value={value} index={2}>
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
                ) : facturas.length <= 0 ? (
                  <h2>NO HAY FACTURAS</h2>
                ) : (
                <Box sx={{ width: "100%", height: 860 }}>
                  <DataGrid
                    rows={facturas}
                    columns={columnsF}
                    getRowId={(row) => row.ID}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 14 },
                      },
                    }}
                    pageSizeOptions={[5, 14, 20]}
                    sx={{
                      "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: "bold",
                      },
                    }}
                  />
                </Box>
              )}
            </CustomTabPanel>
          </Box>
          </Box>
        )}
      </div>
    </>
  );
};

export default productosMG;
