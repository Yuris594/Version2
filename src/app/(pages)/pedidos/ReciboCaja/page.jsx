
import { Box, Button, Card, CardContent, Divider, IconButton, InputBase, Paper, Typography } from "@mui/material"
import DirectionsIcon from '@mui/icons-material/Directions';
import { useGenerarPDF } from "@/app/hooks/useReciboPDF";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";


const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

  const ReciboCaja = () => {
    const { caja, auth } = useAuth();
    const valores = Object.values(caja);
    const valores2 = Object.values(caja.tipoPago);
    const { generarPDF } = useGenerarPDF(valores, valores2, auth, caja, );


    console.log(caja.cliente.E_MAIL);

  const cerrarP = () => {
    localStorage.removeItem('caja');
    localStorage.removeItem('pedidoTempg');
    localStorage.removeItem('clientTemp');
    localStorage.removeItem('pedidoTemp');
  }

    return (
        <Paper className="container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', overflow: "auto"}}>
            <Typography sx={{ fontSize: 50, marginBottom: "15px" }} color="text.secondary" gutterBottom>
                Valor a Cancelar: ${caja.Total}
            </Typography>

                <Divider sx={{ fonSize:30 }} orientation="horizontal"></Divider>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box sx={{ with: "50%", margin: 20,}}>
                            
                            <Typography sx={{ fontSize: 50, margin: 0, marginBottom: 6, padding: 0 }} color="text.secondary" gutterBottom>
                                ¿Como le gustaria recibir su recibo?
                            </Typography>
                            
                                <Button variant="outlined" sx={{ width: 550, marginBottom: 5, backgroundColor: "#979797", color: "#3c3c3c"}} onClick={generarPDF}>Imprimir Recibo</Button>
                        
                                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 550, height: 100, }}>
                                        
                                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                                            <MenuIcon />
                                        </IconButton>

                                        <InputBase sx={{ ml: 1, flex: 1 }} inputProps={{ 'aria-label': 'search google maps' }}/>

                                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>

                                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                            <DirectionsIcon />
                                        </IconButton>
                                    </Paper>
                            </Box>

                <Box sx={{ width: "50%", bord: 20, }}>
                    <Card sx={{ width: "40vw", height: "100%" }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBotton: 0}}>
                            <Typography sx={{ fontSize: 17, flexDirection: 'column' }} color="text.secondary" gutterBottom>
                                ...........Miguel gomes & cia...........
                                <br />
                                ...................Tel:777777..................
                                <br />
                                ..Miguelgomoz&cia@hotmail.com ..<br />
                                .https://www.miguelgomez.com.co/. <br />
                                ------------------------------------------------------- <br />
                                .. Servicio - {auth.PER_Nom} ..
                            </Typography>
                        </CardContent>

                        <CardContent>
                            {valores.map((row) => (
                              <Typography component="div"  sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: 0 }}>
                                <span>{row.DESCRIPCION}</span>
                                <span>{row.PRECIO}</span>
                              </Typography>
                            ))}
                        </CardContent>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: 0}}>
                            <Typography variant="h6" component="div">
                                -------------------------<br />
                                Total{bull}{caja.total}
                            </Typography>

                        </CardContent>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', paddingTop: 0}}>
                            {valores2.map((row, index) => (
                                <Typography component="div"  sx={{ display: 'flex', flexDirection: 'column' }}>
                                     {Object.entries(row).map(([key, value], idx) => (
                                        value !== 0 ?
                                          <span key={idx}>{key}: {value.toString()}</span>
                                          : null
                                     ))}
                                </Typography>
                            ))}
                        </CardContent>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: 0 }}>
                            <Typography variant="h6" component="div">
                                -------------------------<br />
                                Cambio{bull}{}   {caja.cambio.toLocalesString('es')}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            <Box sx={{ width: '139vw', padding: 0, margin: 0, paddingTop: 12 }}>
                <Button component={Link} href="../../pedidos/pedidosCaja" variant="outlined" sx={{ width: "100%", height: 300, padding: 0, margin: 0, backgroundColor: "#087ea6", color: "white" }} onClick={cerrarP}>
                    Nuevo Pedido
                </Button>
            </Box>
        </Paper>
    )
}

export default ReciboCaja;