"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import { Conexion } from "@/conexion";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Banner from "@/app/components/banner/banner";
import BotonExcel from "@/app/hooks/useExportoExcel";
import { useCallback, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress, TextField, useMediaQuery } from "@mui/material";


const columns = [
  { field: "CLIENTE", headerName: "NIT", width: 170 },
  { field: "NOMBREALIAS", headerName: "NOMBRE", width: 800 },
  { field: "DIRECCION", headerName: "DIRECCIÓN", width: 300 },
  { field: "TELEFONO1", headerName: "TELEFONO", width: 190 },
  { field: "NOMVENDEDOR", headerName: "VENDEDOR", width: 450 },
  { field: "SALDO", headerName: "CARTERA", type: "number", width: 120,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
    align: "right",
  },
];

const conseguirClientes = async () => {
  const response = await fetch("/api/clientes/listar", {
    method: "GET",
    headers: { "Content-Type" : "application/json" }
  });
  const data = await response.json()
  return data;
};

const Clientes = () => {
  const router = useRouter();
  const { setCliente } = useAuth();
  const [busqueda, setBusqueda] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaClientes, setTablaClientes] = useState();
  const [clientesFiltrados, setClientesFiltrados] = useState();
  const isSmallScreen = useMediaQuery("(max-width: 600px)")

  useEffect(() => {
    const obtenerClientes = async () => {
      const datos = await conseguirClientes();
      try {
        setClientesFiltrados(datos);
        setTablaClientes(datos);
        setCargando(false);
      } catch (error) {
        console.log(error)
      }
    }
    obtenerClientes();
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaClientes.filter((elemento) => {
      const CLIENTE = elemento.CLIENTE && elemento.CLIENTE.toString().toLowerCase();
      const NOMVENDEDOR = elemento.NOMVENDEDOR && elemento.NOMVENDEDOR.toString().toLowerCase();
      const NOMBREALIAS = elemento.NOMBREALIAS && elemento.NOMBREALIAS.toLowerCase();
      if (
        CLIENTE?.includes(terminoBusqueda.toLowerCase()) ||
        NOMVENDEDOR?.includes(terminoBusqueda.toLowerCase()) ||
        NOMBREALIAS?.includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return null;
    });
    setClientesFiltrados(resultadosBusqueda);
  };

  const handleSelection = useCallback(
    (selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = tablaClientes.filter((elemento) => {
          const CLIENTE = elemento.CLIENTE;
          if (CLIENTE) {
            const clienteString = CLIENTE.toString();
            return clienteString.includes(selectionModel[0]);
          }
          return false;
        });
        localStorage.setItem("clientTemp", JSON.stringify(resultadosFiltrados));
        setCliente(resultadosFiltrados);
        router.push("/start/clients/clientesTemp/");
      }
    },
    [clientesFiltrados]
  );

  return (
    <>
      <Box>{" "}<Banner />{" "}</Box>
      <Box className="container">
        {cargando === true ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <Grid container direction="column" sx={{ minHeight: "90vh", backfroundColor: "#ffffff", padding: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Grid size={{ xs: 12, sm: 8, md: 6}}>
                <h2><strong>CLIENTES</strong></h2>
              </Grid>
               
              <Link href=""><Button variant="outlined" sx={{ margin: "2px" }}>Nuevo</Button></Link>
              <BotonExcel datos={clientesFiltrados} />

              <Grid size={{ xs: 12, sm: 8, md: 6}} sx={{ padding: 2 }}>
                <TextField
                  id="outlined-basic"
                  multiline
                  rows={1}
                  variant="outlined"
                  placeholder="Buscar..."
                  value={busqueda}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Box>

            <Grid size={12} sx={{ flexGrow: 1, marginBottom: 2 }}>
              <Box sx={{ width: "100%", height: isSmallScreen ? 500 : 799 }}>
                <DataGrid
                  rows={clientesFiltrados}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 12 },
                    },
                  }}
                  pageSizeOptions={[12, 20, 30]}
                  onRowSelectionModelChange={handleSelection}
                  rowSelectionModel={selectedRows}
                  getRowId={(row) => row.CLIENTE}
                  slots={{ toolbar: GridToolbar }}
                  sx={{
                    "& .MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Clientes;
