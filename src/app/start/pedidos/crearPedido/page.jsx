"use client";


import { Box, Button, ButtonGroup, Modal, Paper, TextField, Typography, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import Producto from "../../(producto)/producto/page";
import Banner from "@/app/components/banner/banner";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { GridRowModes } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "90vh",
  maxWidth: "80vw",
  overflowY: "auto",
  overflowX: "hidden",
  padding: "16px",
  bgcolor: "#ffffff",
  border: "2px solid #000",
  boxShadow: 24
};

const conseguirProductos = async () => {
  const response = await fetch("/api/productos/listar_solo_para_mg", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};


const CrearPedido = () => {
  const inputRef = useRef();
  const { cliente } = useAuth();
  const [openB, setOPenB] = useState("");
  const [openM, setOpenM] = useState("");
  const [total, setTotal] = useState("");
  const [articulo, setArticulo] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState("");
  const [clienteP, setClienteP] = useState(cliente[0]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  const handleOpenB = () => setOPenB(true);
  const handleCloseB = () => setOPenB(false);
  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);


  const columns = [
    { field: "DESCRIPCION", headerName: "REFERENCIA", width: 500 },
    { field: "SUBLINEA", headerName: "SUBLINEA", width: 250 },
    { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 80 },
    { field: "PRECIO", headerName: "PRECIO", width: 130, editable: true, type: "number",
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, editable: true
    },
    { field: "cantped", headerName: "CANT", width: 80, editable: true, editable: true, type: "number"
    },
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 40, editable: true, type: "number" },
    { field: "PORC_DCTO", headerName: "D1", width: 40, editable: true, type: "number" },
    { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, align: "right",
    },
    { field: "TOTAL_DISP", headerName: "DISP", width: 70 },
    { field: "EXIST_REAL", headerName: "EXISTREAL", width: 90 },
    { field: "actions", type: "actions", headerName: "", width: 100, cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: "primary.main" }}
              onClick={handleSaveClick(id)}
            />,

            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,

          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="textPrimary"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setProductosP(productos.filter((row) => row.ARTICULO !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = productos.find((row) => row.ARTICULO === id);
    if (editedRow.isNew) {
      setProductosP(productos.filter((row) => row.ARTICULO !== id));
    }
  };


  const agregarArticulo = (nuevosArticulos) => {
    const articulosConTotal = nuevosArticulos.map((art) => {
      const precioUnitario = art.PRECIO * (1 + art.PORC_IMPUESTO / 100);
      const cantidad = parseFloat(art.cantped);
      const descuento = parseFloat(art.PORC_DCTO) / 100;
      const total = precioUnitario * cantidad * (1 - descuento);
      return {
        ...art,
        Total: total.toFixed(0),
      };
    });
    const articulosActualizados = [...articulosSeleccionados, ...articulosConTotal];
    setArticulosSeleccionados(articulosActualizados);
    CalcularTotales(articulosActualizados);
  };


  const CalcularTotales = (articulos) => {
    let nuevoSubTotal = 0;
    let nuevoTotal = 0;

    articulos.forEach((art) => {
      const precioBase = parseFloat(art.PRECIO);
      const cantidad = parseFloat(art.cantped);
      const descuento = parseFloat(art.PORC_DCTO);
      const iva = parseFloat(art.PORC_IMPUESTO);

      const subTotalArticulo = precioBase * cantidad;
      const totalConDescuento = subTotalArticulo * (1 - descuento);
      const totalArticulo = totalConDescuento * (1 - iva);

      nuevoSubTotal += subTotalArticulo;
      nuevoTotal += totalArticulo;
    });

    const subTotalFormateado = Number(nuevoSubTotal.toFixed(0)).toLocaleString();
    const totalFormateado = Number(nuevoTotal.toFixed(0)).toLocaleString();

    setTotal(totalFormateado);
    setSubTotal(subTotalFormateado);
  };


  const guardarPedido = () => {
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];

    let ultimoId = 0;
    if (pedidosGuardados.length > 0) {
      ultimoId = Math.max(...pedidosGuardados.map(pedido => pedido.PEDID));
    }

    const nuevoId = ultimoId + 1;

    const pedido = {
      PEDID: nuevoId,
      Fecha: new Date().toISOString(),
      Nombre: clienteP.NOMBREALIAS,
      Nit: clienteP.CLIENTE,
      total,
      subTotal,
      articulos: articulosSeleccionados.map(art => ({
        ...art,
        IdPedido: nuevoId
      })),
    };

    pedidosGuardados.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados));

    alert("Pedido Guaardado Correctamente");
  };

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const datos = await conseguirProductos();
        if (datos) {
          setProductos(datos);
          setTablaProducto(datos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProductos();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const termino = terminoBusqueda.toLowerCase();
    const resultadosBusqueda = tablaProducto.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(termino));
    });
    setProductos(resultadosBusqueda);
  };

  const handleSelectionChange = useCallback((selectionModel) => {
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
  }, [productos]);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = productos.map((prod) => 
      prod.ARTICULO === newRow.ARTICULO ? { ...prod, ...newRow } : prod
    );
    setProductos(updatedRows);
    setTablaProducto(updatedRows);
    return newRow;
  };

  const handleCantidad = (ARTICULO, value) => {
    setCantidades({
      ...cantidades,
      [ARTICULO] : value,
    });
  };

  const agregarArticulos = () => {
    const articulosSeleccionados = productos.filter((prod) => cantidades[prod.ARTICULO]);
    agregarArticulo(
      articulosSeleccionados.map((art) => ({
        ...art,
        cantped: cantidades[art.ARTICULO]
      }))
    );
    handleCloseM();
  }

  const columnsM = [
    { field: "ARTICULO", headerName: "CODIGO", width: 130 },
    { field: "DESCRIPCION", headerName: "REFERENCIA", width: 500 },
    { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 80 },
    { field: "PRECIO", headerName: "PRECIO", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      },
    },
    { field: "CANTIDAD", headerName: "CANT", width: 80, 
      renderCell: (params) => {
        return (
          <TextField 
            value={cantidades[params.id] || ""}
            onChange={(e) => handleCantidad(params.id, e.target.value)}
            sx={{ width: "70px" }}
            variant="outlined"
            size="small"
          />
        )
      }
    },
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 40 },
    { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, align: "right",
    },
    { field: "PORC_DCTO", headerName: "D1", width: 40 },
    { field: "TOTAL_DISP", headerName: "DISP", width: 70 },
    { field: "EXIST_REAL", headerName: "EXISTREAL", width: 90 },
  ];



  return (
    <>
      <Banner />
      <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", margin: 3 }}>
        <h3>CREACIÓN DE PEDIDOS</h3>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: "flex-end", p: 1 }}>
        <Button onClick={handleOpenM} variant="filled" sx={{ bgcolor: "#aeefff", "&:hover": { bgcolor: "#91d9e9" },}}>
          Productos-MG
        </Button>
        <Button onClick={handleOpenB} variant="filled" sx={{ bgcolor: "#fff694", "&:hover": { bgcolor: "#e5df85" }, }}>
          Productos-Bodega
        </Button>
        <Button variant="filled" sx={{ bgcolor: "#ffa28a", "&:hover": { bgcolor: "#e98c74" }, }}>
          PDF
        </Button>
        <Button onClick={guardarPedido} variant="filled" sx={{ bgcolor: "#f36fad", "&:hover": { bgcolor: "#e6228e" }, }}>
          Guardar Pedido
        </Button>
        <Button variant="filled" sx={{ bgcolor: "#eb85eb", "&:hover": { bgcolor: "#ec1ee2" }, }} LinkComponent={Link} href="../../start/clients">
          Cerrar
        </Button>
      </Box>

      <Box>
        <Paper elevation={3} sx={{ padding: 3, margin: 3, marginTop: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center">
                <strong>NOMBRE:</strong>
                <Typography variant="body1" sx={{ marginLeft: 1 }}>{clienteP?.NOMBREALIAS}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box display="flex" alignItems="center">
                <strong>NIT: </strong>
                <Typography variant="body1" sx={{ marginLeft: 1 }}>{clienteP?.CLIENTE}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.TELEFONO1}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <LocationOnIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.DIRECCION}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <BusinessIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.CIUDAD}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <EmailIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.E_MAIL}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ width: "97%", height: "auto", margin: 2 }}>
        <DataGrid 
          rows={articulosSeleccionados}
          columns={columns}
          getRowId={(row) => row.DESCRIPCION}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 }
            }
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </Box>

     
      <Paper elevation={3} sx={{ padding: 3, margin: 3, marginTop: 3}}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonGroup variant="text" aria-label="text button group" sx={{ height: 60 }}>
            <Button sx={{ flexDirection: "column" }}>
              <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>{" "}${subTotal}{" "}</Typography>
              <strong>{" "}SUB-TOTAL{" "}</strong>
            </Button>
            <Button sx={{ flexDirection: "column" }}>
              <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>{" "}${total}{" "}</Typography>
              <strong>{" "}TOTAL{" "}</strong>
            </Button>
          </ButtonGroup>
        </Box>
      </Paper>
      


      <Modal
        open={openB}
        onClose={handleCloseB}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {" "}<Producto handleCloseB={handleCloseB} onAgregarArticulo={agregarArticulo} />{" "}
        </Box>
      </Modal>

      <Modal
        open={openM}
        onClose={handleCloseM}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
              <h2><strong>PRODUCTOS</strong></h2>
              <Box display="flex" gap={1}>
                <Button variant="contained" color="success" onClick={agregarArticulos}>Agregar</Button>
                <Button variant="contained" color="error" onClick={handleCloseM}>Cerrar</Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: 2, alignItems: "center" }}>
              <TextField
                id="outlined-basic"
                placeholder="Buscar Producto"
                value={busqueda}
                onChange={handleChange}
                inputRef={inputRef}
                sx={{ width: "100%" }}
              />
            </Box> 

            <Box sx={{ width: "100%", height: 480 }}>
              <DataGrid
                density="compact"
                rows={productos}
                columns={columnsM}
                getRowId={(row) => row.ARTICULO}
                pageSize={10}
                rowSelectionModel={selectedRows}
                processRowUpdate={handleProcessRowUpdate}
                onRowSelectionModelChange={handleSelectionChange}
                sx={{
                  "& .MuiDataGrid-columnHeaderTitle": {
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>

    </>
  )
}

export default CrearPedido;