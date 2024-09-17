"use client";

import { Box, Button, Typography, Paper, TextField } from "@mui/material";
import Banner from "@/app/components/banner/banner";
import { useForm } from "@/app/hooks/useForm";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";


const noExiste = () => {
  Swal.fire({
    title: "Factura no existe!",
    icon: "error",
    button: "Aceptar",
  });
};

const obtenerFactura = async (factura_) => {
  const response = await fetch(`/api/clientes/factura_lineas/${factura_}`, {
    method: "GET", 
    headers: {
      "Content-Type" : "application/json"
    }
  });
  return response.json()
}

const Factura = () => {
  const { form, changed } = useForm({});
  const [fac, setFac] = useState(null);
  const [productos, setProductos] = useState([]);
  const [fecha] = useState(format(new Date(), "dd/MM/yyyy HH:mm:ss"));
  const [totales, setTotales] = useState({});


  const factura = async (e) => {
    e.preventDefault();
    const factura_ = form.factura;
    const datos = await obtenerFactura(factura_)
    console.log(datos)
    try {
      if (datos) {
          setFac(datos[0]);
          const clavesDeseadas = [
            "ARTICULO",
            "CANTIDAD",
            "DESCRIPCION",
            "PORCIVA",
            "PORDESC",
            "PRECIO_UNITARIO",
            "PRECIO_TOTAL",
            "TOTAL_IMPUESTO1",
            "DESC_TOT_LINEA",
            "TOTAL_MERCADERIA"
          ];
        const productosFiltrados = datos.map((objecto) => {
          const objetoFiltrado = Object.fromEntries(
            Object.entries(objecto).filter(([clave]) =>
              clavesDeseadas.includes(clave)
            )
          );

          if ("PRECIO_TOTAL" in objetoFiltrado) {
            objetoFiltrado["PRECIO_TOTAL"] = Math.floor(objetoFiltrado["PRECIO_TOTAL"]);
          }
          if ("DESC_TOT_LINEA" in objetoFiltrado) {
            objetoFiltrado["DESC_TOT_LINEA"] = Math.floor(objetoFiltrado["DESC_TOT_LINEA"]);
          }
          return objetoFiltrado;
        });
        setProductos(productosFiltrados);

        let sumatotal = 0;
        let descuento = 0;

        productosFiltrados.forEach(producto => {
          sumatotal += producto.PRECIO_TOTAL || 0;
          descuento += producto.DESC_TOT_LINEA || 0;
        });

        const impuesto = sumatotal * 0.19;
        const totalConImpuesto = sumatotal + impuesto;
        
        setTotales({
          sumatotal: sumatotal.toLocaleString('es-ES'),
          descuento: descuento.toLocaleString('es-ES'),
          impuesto: impuesto.toLocaleString('es-ES'),
          totalConImpuesto: totalConImpuesto.toLocaleString('es-ES'),
        });

      } else {
        noExiste();
      }
    } catch (error) {
      console.error("Error al realizar la peticion;", error);
      noExiste();
    }
  };
  
  useEffect(() => {
    if (fac && productos) {
        generarPDF();
        setFac();
        setProductos([]);
    }
}, [fac, productos]);

  
  
  const generarPDF = () => {
    const pdf = new jsPDF("portrait", "pt", "letter");
    const columnsParaPDF = [
      { field: "ARTICULO", headerName: "Ref.", width: 200 },
      { field: "CANTIDAD", headerName: "CANT", width: 200, align: "right" },
      { field: "CPed", headerName: "UND", width: 200, type: "number", align: "right", },
      { field: "DESCRIPCION", headerName: "DESCRIPCIÓN", width: 1000 },
      { field: "PORCIVA", headerName: "IVA", width: 200, align: "right" },
      { field: "PORDESC", headerName: "DTO", width: 200, align: "right" },
      { field: "PRECIO_UNITARIO", headerName: "VALOR UNI", width: 200,
        valueFormatter: (params) => {
          const PRECIO_UNITARIO = params.value;
          const precioRedondeado = Number(PRECIO_UNITARIO).toFixed(0);
          return `${parseFloat(precioRedondeado).toLocaleString()}`;
        }, align: "right",
      },
      { field: "PRECIO_TOTAL", headerName: "TOTAL", width: 250, type: "number",
        valueFormatter: (params) => {
          const PRECIO_TOTAL = params.value;
          const precioRedondeado = Number(PRECIO_TOTAL).toFixed(0);
          return `${parseFloat(precioRedondeado).toLocaleString()}`;
        }, align: "right",
      },
    ];

    const styles = {
      theme: "plain",
      tableWidth: "auto",
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
      font: "helvetica",
      fontStyle: "normal",
      textColor: [0, 0, 0],
      dispaly: "flex",
      fontSize: 8,
    };

    const dataToPrint = productos.map((row) => {
      const rowData = [];
      columnsParaPDF.forEach((column) => {
        rowData.push(row[column.field]);
      });
      return rowData;
    });

    
    function encabezado() {
      pdf.setFontSize(11);
      pdf.text("Nuestra dirección y lineas de atención han cambiado:(4) 604 3380 - 3203509705", 100, 17 );
      pdf.setFontSize(13);
      pdf.text("_________________________________________________________________________________", 12, 20);

      pdf.setFontSize(13);
      pdf.addImage("/logo_factura.png", 'PNG', 10, 30, 200, 25);
      pdf.setFontSize(15);
      pdf.text(`REMISIÓN N°:   ${fac.FACTURA}`, 350, 45);
      pdf.setFontSize(9);
      pdf.text(` ${fac.FECHA_DESPACHO}`, 500, 65);
      pdf.setFontSize(11);
      pdf.text("FECHA", 460, 65);
      pdf.text("NIT.830.900.137-1", 50, 65);
      pdf.setFontSize(13);
      pdf.text("_________________________________________________________________________________", 12, 70);
      pdf.setFontSize(9);
      pdf.text(`CLIENTE:    ${fac.CLIENTE}`, 12, 85);
      pdf.text(`NIT/CEDULA:    ${fac.CreatedBy}`, 12, 98);
      pdf.text(`TEL:    ${fac.CreatedBy}`, 200, 98);
      pdf.text(`VENDEDOR:    ${fac.CreatedBy}`, 350, 98);
      pdf.text(`MUNICIPIO:    ${fac.CreatedBy}-${fac.CreatedBy}`, 12, 112);
      pdf.text(`PEDIDO:    ${fac.PEDIDO}`, 340, 112);
      pdf.text(`CREADO:    ${fac.CreatedBy}`, 450, 112);
      pdf.text(`DIRECCION:    ${fac.CreatedBy}`, 12, 125);
      pdf.text(`NOTA:   ${fac.OBSERVACIONES}`, 12, 139);
    }

    encabezado();
      pdf.autoTable({
        head: [columnsParaPDF.map((column) => column.headerName)],
        body: dataToPrint,
        startY: 150,
        theme: "plain",
        columnStyles: { cellWidth: "auto" },
        styles,
      });

    function agregarContenido() {
      pdf.setFontSize(10);
      pdf.text(`TOTAL ITEMS:        ${productos.length}`, 350, pdf.autoTable.previous.finalY + 20);
      pdf.text(`SubTotal:     ${fac.TOTAL_MERCADERIA.toLocaleString('es-ES')}`, 470, pdf.autoTable.previous.finalY + 20);
      pdf.text(`Desc:           ${totales.descuento.toLocaleString('es-ES')}`, 470, pdf.autoTable.previous.finalY + 40);
      pdf.text(`IVA:              ${totales.impuesto}`, 470, pdf.autoTable.previous.finalY + 60);
      pdf.text(`TOTAL:        ${totales.totalConImpuesto}`, 470, pdf.autoTable.previous.finalY + 80);

      pdf.setFontSize(11);
      pdf.text("ACEPTO este documento y declaro haber recibido real y \n materialmente los articulos arriba descritos ",12, pdf.autoTable.previous.finalY + 20);
      pdf.text(`FECHA RECIBIDO_____________`, 280, pdf.autoTable.previous.finalY + 72);
      pdf.text(`FIRMA Y SELLO`, 12, pdf.autoTable.previous.finalY + 90);
      pdf.text(`HORA:____:____`, 280, pdf.autoTable.previous.finalY + 86);
      pdf.text(`${fecha}`, 12, pdf.autoTable.previous.finalY + 106);

      pdf.rect(10, pdf.autoTable.previous.finalY + 9, 450, 88);
      pdf.rect(463, pdf.autoTable.previous.finalY + 9, 120, 88);
    }

      agregarContenido();
      pdf.output("dataurlnewwindow");
  };

  return (
    <>
      <Box marginBottom="50px">
        {" "} <Banner />{" "}
      </Box>
      <Box className="container">
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "44vw", }}>
          <Paper sx={{ marginTop: 8,  display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#eeee", padding: 2, }}>
            <Typography component="h1" variant="h5">
              Digite número de factura
            </Typography>

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                required
                fullWidth
                id="factura"
                name="factura"
                autoComplete="factura"
                autoFocus
                value={form.factura || ""}
                onChange={changed}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={factura} >
                Buscar
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Factura;

