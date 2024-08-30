'use client'

import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';


export const Footer = () => {
    const [checked, setChecked] = useState(false);
    setTimeout(() => {
        setChecked(true)
    }, 700);
 
    return (
        <footer>
            <CssBaseline sx={{display:"block"}} />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box component="footer" sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        color: "white", height: "100px",  display: 'flex', alignContent:"flex-end" }}>

                    <Container maxWidth="sx" sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                
                    </Container>
                </Box>
            </Slide>
        </footer>
    )
}