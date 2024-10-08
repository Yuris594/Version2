'use client'

import { format } from "date-fns";
import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const useGenerarPDF = (valores, valores2, auth, caja = {}) => {
    const [pdfDataUrl, setPdfDataUrl] = useState(null);
    const fecha = format(new Date(), 'dd/MM/yyyy HH:mm:ss');

    const generarPDF = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(10);
        pdf.setFont("Helvetica", "normal");
        
        // Encabezado
        pdf.text("Miguel Gomez & Cia", 10, 10);
        pdf.text("Tel: 777777", 10, 15);
        pdf.text("Email: miguelgomoz&cia@hotmail.com", 10, 20);
        pdf.text("Website: https://www.miguelgomez.com.co", 10, 25);
        pdf.text("---------------------------------------------------------------", 10, 30);

        // Título del recibo
        pdf.setFontSize(12);
        pdf.setFont("Helvetica", "bold");
        pdf.text(`Servicio: ${auth.PER_Nom || 'Desconocido'}`, 10, 40);
        
        let currentY = 50;
        pdf.setFontSize(10);
        pdf.setFont("Helvetica", "normal");
        
        // Productos
        pdf.text("Descripción", 10, currentY);
        pdf.text("Precio", 100, currentY);
        currentY += 10;
        
        // Verifica que valores sea un array y que no esté vacío
        if ((valores) && valores.length > 0) {
            for (let i = 0; i < valores.length - 4; i++) {
                const row = valores[i];
                pdf.text(`${row.DESCRIPCION}`, 10, currentY);
                pdf.text(`$${row.PRECIO}`, 100, currentY);
                currentY += 15;
            }
        }

        // Total
        currentY += 10;
        pdf.setFontSize(12);
        pdf.setFont("Helvetica", "bold");
        pdf.text("Total:", 10, currentY);
        pdf.text(`$${caja.total}`, 100, currentY);
        
        // Tipo
        currentY += 10;
        pdf.setFontSize(10);
        pdf.setFont("Helvetica", "normal");
        if (Array.isArray(valores2) && valores2.length > 0) {
            valores2.forEach((row) => {
                Object.entries(row).forEach(([key, value]) => {
                    if (value !== 0 && value != null) {
                        const formattedKey = `${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}:`;

                        pdf.setFont("Helvetica", "bold");
                        pdf.text(formattedKey, 10, currentY);

                        pdf.setFont("Helvetica", "bold");
                        const valueText = `$${value.toLocaleString('es')}`;
                        pdf.text(valueText, 100, currentY);
                        currentY += 10;
                    }
                });
            });
        } else {
            pdf.text("No hay información adicional disponible", 10, currentY);
            currentY += 10;
        }

        // Cambio
        currentY += 5;
        pdf.setFontSize(12);
        pdf.setFont("Helvetica", "bold");
        pdf.text("Cambio:", 10, currentY);
        const cambio = caja.cambio != null ? parseFloat(caja.cambio).toLocaleString('es') : '0.00';
        pdf.text(`$${cambio}`, 100, currentY);

        // Fecha
        currentY += 10;
        pdf.setFontSize(10);
        pdf.setFont("Helvetica", "normal");
        pdf.text(`Fecha: ${fecha}`, 10, currentY);

        // Generar PDF
        const dataUrl = pdf.output('datauristring');
        setPdfDataUrl(dataUrl);

        // Abrir PDF en una nueva ventana
        pdf.output('dataurlnewwindow');
    }

    return { generarPDF, pdfDataUrl };
}

export default useGenerarPDF;