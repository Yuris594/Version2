"use client";

import { AppBar, Box, Button, CssBaseline, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReceiptIcon from '@mui/icons-material/Receipt';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";
import MenuBar from "./bar";


const pages = [
  {
    title: "VENTAS",
    subPages: [
      { title: "Clientes", url: "/pages/client", icon: <PersonIcon /> },
      { title: "Pedidos Por Enviar", url: "/pages/pedidoSinEnviar", icon: <LocalShippingIcon /> },
      { title: "Pedidos Enviados", url: "/pages/pedidoEnviado", icon: <LocalShippingIcon /> },
    ],
  },
  {
    title: "CARTERA",
    subPages: [
      { title: "Cartera Clientes", url: "/pages/cartera", icon: <AccountBalanceIcon /> },
      { title: "Recibos", url: "/pages/cartera/recibo", icon: <ReceiptIcon /> },
      { title: "Consultar Consignaciones", url: "/pages/cartera/consignacion", icon: <AccountBalanceIcon /> },
      { title: "Elaborar Consignaciones", url: "/pages/cartera/elaborarCo", icon: <ArticleIcon /> },
    ],
  },
  {
    title: "INFORMES",
    subPages: [
      { title: "Ruteros Enviados", url: "/pages/gestionCartera", icon: <DirectionsRunIcon /> },
      { title: "Historico de Ventas", url: "/pages/historicoVenta", icon: <ReceiptIcon /> },
      { title: "Resumen Ventas Actual", url: "/pages/resumenVenta", icon: <ReceiptLongIcon /> },
    ],
  },
  {
    title: "INVENTARIOS",
    subPages: [
      { title: "Consultar Articulos", url: "/pages/inventario", icon: <InventoryIcon /> },
    ],
  },
];


const NavBar = () => {
  const [selectedPage, setSelectedPage] = useState(null); 
  const [anchorEl, setAnchorEl] = useState(null);
  const { auth } = useAuth();
  const router = useRouter();

  const handlePageClick = (page) => {
    setSelectedPage(page);
    setAnchorEl(null); 
  };


  const handleBackClick = () => {
    setSelectedPage(null); 
  };

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null); 
  };

  const handleRefresh = () => {
    router.push("/pages")
    
    setTimeout(() => {
      Swal.fire({
        title: "¿Deseas Actualizar?",
        text: "Se actualizara la base de datos local!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
      }).then((result) => {
        if(result.isConfirmed) {
          Swal.fire({
            text: "Actualizando, este proceso tardara poco tiempo, espere por favor.",
            icon: "warning",
            timer: 10000,
            didOpen: () => {
              Swal.showLoading();
            },
          }).then(() => {
            Swal.fire({
              text: "Actualización Exitosa!!",
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          });
        }
      });
    }, 500);
  };
    
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#262626" }}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleOpen} sx={{ display: { xs: "flex", md: "none" } }}>
              <WidgetsIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}>
              {selectedPage ? (
                <>
                  <IconButton color="inherit" onClick={handleBackClick}>
                    <ExitToAppIcon />
                  </IconButton>
                  {selectedPage.subPages.map((subPage) => (
                    <Button
                      color="inherit"
                      key={subPage.title}
                      LinkComponent={Link}
                      href={subPage.url}
                    >
                      {subPage.title}
                    </Button>
                  ))}
                </>
              ) : (
                pages.map((page) => (
                  <Button
                    color="inherit"
                    key={page.title}
                    onClick={() => handlePageClick(page)}>
                    {page.title}
                  </Button>
                ))
              )}
            <Button onClick={handleRefresh} color="inherit">Actualizar</Button>
            </Box>
            <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
              <Button LinkComponent={Link} href="/pages" color="inherit">
                <ArrowBackIcon />
              </Button>
              <Button color="inherit" sx={{ width: "15%" }}>{auth && auth.UserFullName}</Button>
              <Button LinkComponent={Link} href="/" color="inherit">Salir</Button>
          </Toolbar>
        </AppBar>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuBar pages={pages} onClose={handleClose} />
        </Menu>
      </Box>
    </>
  );
};

export default NavBar;

