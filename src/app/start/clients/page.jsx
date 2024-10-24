"use client";

import { useCallback, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { LinearProgress } from "@mui/material";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Banner from "@/app/components/banner/banner";
import BotonExcel from "@/app/hooks/useExportoExcel";

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
    headers: {
      "Content-Type" : "application/json"
    }
  });
  const data = await response.json()
  return data;
}

const Clientes = () => {
  const router = useRouter();
  const { setCliente } = useAuth();
  const [busqueda, setBusqueda] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaClientes, setTablaClientes] = useState();
  const [cargando, setCargando] = useState(true);
  const [clientesFiltrados, setClientesFiltrados] = useState();

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
        router.push("/start/clients/clientesTemp");
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
        <Box>
          <h2><strong>CLIENTES</strong></h2>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", margin: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Link href="">
                <Button variant="outlined" sx={{ margin: "2px" }}>
                  Nuevo
                </Button>
              </Link>
              <BotonExcel datos={clientesFiltrados} />
            </Box>
            
            <Paper elevation={3} sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 1100, margin: "10px" }}>
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

          <Box sx={{ height: 780, width: "100%" }}>
            <DataGrid
              rows={clientesFiltrados}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 12 },
                },
              }}
              pageSizeOptions={[12]}
              onRowSelectionModelChange={handleSelection}
              rowSelectionModel={selectedRows}
              getRowId={(row) => row.CLIENTE}
              slots={{ toolbar: GridToolbar }}
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Box>
        </Box>
        )}
      </Box>
    </>
  );
};

export default Clientes;
