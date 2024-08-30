"use client";

import { AccountCircle, ShoppingBag, Assignment, Person, ReceiptLong, Storefront, } from "@mui/icons-material";
import { AppBar, Box, Button, CardActions, CardContent, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Modal, Paper, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  alignItems: "center",
  display: "flex",
  alignContent: "center",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

  const Inicio = () => {
    const router = useRouter();
    const { auth } = useAuth();
    const handleOpen = () => setOpen(true);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [anchor, setAnchor] = useState(null);
    const [productos, setProductos] = useState(false);


      const handleClick = (event) => {
        setProductos(true);
        setAnchor(event.currentTarget);
      };

      const handleCloseM = () => {
        setProductos(false);
        setAnchor(null);
      };

      const cerrarSesion = () => {
        logout()
        router.push("/")
      };


  const page = [
    {
      title: "USUARIOS ",
      url: "../../usuarios",
      icon: <AccountCircle />,
    },
    {
      title: "PEDIDOS",
      url: "../../pedidos",
      icon: <Assignment />,
    },
    {
      title: "CLIENTES",
      url: "../../clients",
      icon: <Person />,
    },
    {
      title: "PRODUCTOS",
      icon: <ShoppingBag />,
      onClick: handleClick,
    },
    {
      title: "FACTURAS",
      url: "../../facturas",
      icon: <ReceiptLong />,
    },
    {
      title: "CAJA",
      url: "../../pedidos/pedidosCaja",
      icon: <Storefront />,
    },
  ];

  return (
      <>
        <Box sx={{ display: { flexGrow: 1 } }}>
          <AppBar position="static" sx={{ bgcolor: "#262626" }} /* color="primary" */>
            <Toolbar>
              <Image
                src="/img/logo2.png"
                width="80"
                height="40"
                alt="imagenmg"
                priority={true} />

              <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

              <Button component={Link} href="../start" color="inherit">
                <HomeIcon></HomeIcon>
              </Button>

              <Button color="inherit">
                <PersonIcon>{auth.PER_Nom}</PersonIcon>
              </Button>

              <Button color="inherit" onClick={handleOpen}>
                <LogoutIcon></LogoutIcon>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                ¿Estas seguro que quiere salir?
              </Typography>
            <Box>
              <Button sx={{ bgcolor: "red" }} variant="contained" onClick={cerrarSesion}>
                SALIR
              </Button>
            </Box>
          </Box>
        </Modal>

        <Box className="containers" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Paper id="wave" sx={{ minWidth: "50%", maxWidth: "50%", height: 500, border: 6, margin: 5, overflow: "auto",}}>
            
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "#262626", borderColor: "#262626", }}>
              <Image
                src="/img/logo2.png"
                width="120"
                height="100"
                alt="imagenmg"
                priority={true}/>
            </CardContent>

                <Typography sx={{ mb: 1.5 }} color="white"> {auth.PER_Nom} </Typography>

              <CardActions sx={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop: 2, }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src="/img/truperLogo.png"
                    width="100"
                    height="100"
                    alt="imagentru"/>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ marginX: 2 }}/>
                <List>
                  {page.map((link) => (
                    <ListItem disablePadding key={link.title}>
                      <ListItemButton LinkComponent={Link} href={link.url} onClick={link.onClick}>
                        <ListItemIcon>{link.icon}</ListItemIcon>
                        <ListItemText>{link.title}</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </CardActions>
          </Paper>
        </Box>

          <Menu id="basic-menu" anchorEl={anchor} open={productos} onClose={handleCloseM} MenuListProps={{ "aria-labelledby": "basic-button", }}>
              <MenuItem onClick={handleCloseM} component={Link} href="../productos" variant="body1" style={{fontWeight: "bold"}}>
                Productos Por Bodega
              </MenuItem>
              <MenuItem onClick={handleCloseM} component={Link} href="../productosMG" variant="body1" style={{fontWeight: "bold"}}>
                Productos-MG
              </MenuItem>
          </Menu>
    </>
  );
};

export default Inicio;