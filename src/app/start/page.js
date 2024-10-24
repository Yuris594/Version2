"use client";

import { AccountCircle, ShoppingBag, Assignment, Person, ReceiptLong, Storefront, } from "@mui/icons-material";
import { AppBar, Box, Button, CardActions, CardContent, Divider, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Menu, MenuItem, Modal, Paper, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth }  from "@/context/authContext";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";

const inter = Lora({ subsets: ['latin'] })

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  alignItems: "center",
  alignContent: "center",
  boxShadow: 24,
  textAlign: "center",
  pt: 2,
  px: 4,
  pb: 3,
};

  const Inicio = () => {
    const router = useRouter();
    const { auth, logout } = useAuth();
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
      title: "USUARIOS",
      url: "../start/usuarios",
      icon: <AccountCircle />,
    },
    {
      title: "PEDIDOS",
      url: "../start/pedidos",
      icon: <Assignment />,
    },
    {
      title: "CLIENTES",
      url: "../start/clients",
      icon: <Person />,
    },
    
    {
      title: "PRODUCTOS",
      icon: <ShoppingBag />,
      onClick: handleClick,
    },
    {
      title: "FACTURAS",
      url: "../start/facturas",
      icon: <ReceiptLong />,
    },
    {
      title: "CAJA",
      url: "../start/pedidos/pedidosCaja",
      icon: <Storefront />,
    },
  ];

  return (
      <>
        <Box sx={{ display: { flexGrow: 1 } }}>
          <AppBar position="static" sx={{ bgcolor: "#262626" }}>
            <Toolbar>
              <Image
                src="/logo2.png"
                width={80}
                height={40}
                alt="imagenmg"
                priority={true}
              />

              <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

              <Button component={Link} href="../start" color="inherit">
                <HomeIcon fontSize="large" />
              </Button>

              <Button className={inter.className} variant="h5" color="inherit" sx={{ fontSize: "15px" }}>
                <PersonIcon fontSize="large" /> {auth && auth.PER_Nom}
              </Button>

              <Button color="inherit" onClick={handleOpen}>
                <LogoutIcon fontSize="large" />
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
          <Paper id="wave" sx={{ minWidth: "50%", maxWidth: "70%", height: 550, border: 6, overflow: "auto",}}> 
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", bgcolor: "#262626", borderColor: "#262626", }}>
              <Image
                src="/logo2.png"
                width={200}
                height={110}
                alt="imagenmg"
                priority={true}
              />
              <Typography className={inter.className} variant="h6" sx={{  marginTop: 4, marginBottom: 2 }} color="white">{auth && auth.PER_Nom}</Typography> 
            </CardContent>

            <CardActions sx={{ display: "flex", justifyContent: "center", textDecoration: "none", marginTop: 2, }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="/truperLogo.png"
                  width={150}
                  height={110}
                  alt="imagentru"
                  priority={true} 
                />
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 2 }}/>
              <List>
                {page.map((link) => (
                  <ListItem disablePadding key={link.title}>
                    <ListItemButton LinkComponent={Link} href={link.url} onClick={link.onClick}>
                      <ListItemIcon sx={{ fontSize: 20 }}>
                        {link.icon}
                      </ListItemIcon>
                      <ListItemText primaryTypographyProps={{ fontSize: 15, fontWeight: 'medium', letterSpacing: 0 }}>
                        {link.title}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </CardActions>
          </Paper>
        </Box>

        <Menu id="basic-menu" anchorEl={anchor} open={productos} onClose={handleCloseM} MenuListProps={{ "aria-labelledby": "basic-button", }}>
          <MenuItem onClick={handleCloseM} component={Link} href="/start/productos" variant="body1" sx={{ fontSize: "15px" }}>
            Productos Por Bodega
          </MenuItem>
          <MenuItem onClick={handleCloseM} component={Link} href="/start/productosMG" variant="body1" sx={{ fontSize: "15px" }}>
            Productos-MG
          </MenuItem>
        </Menu>
  </>
  );
};

export default Inicio;


