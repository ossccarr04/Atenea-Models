import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

//dotenv.config();

export const config = {
  api: {
    bodyParser: false, // importante para formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Método no permitido');
  }

  const form = formidable({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error al parsear el formulario:', err);
      return res.status(500).json({ message: 'Error al procesar formulario', error: err });
    }

    // Acceder a los primeros valores de los arrays
    const userEmail = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const codigo = Array.isArray(fields.codigo) ? fields.codigo[0] : fields.codigo;
    const file = files.file ? (Array.isArray(files.file) ? files.file[0] : files.file) : null;

    if (!file || !userEmail || !codigo) {
      return res.status(400).json({ message: 'Faltan datos requeridos: archivo, email o código' });
    }

    let carac1 = '', carac2 = '', carac3 = '', carac4 = '', carac5 = '', carac6 = '', carac7 = '', carac8 = '', carac9 = '', carac10 = '', modelo = '';

    switch (codigo.substring(0, 3)) {
      case "CAM":
        modelo = "camiseta";
        carac1 = "Entallado: " + (fields.entallado ? fields.entallado[0] : '');
        carac2 = "Manga: " + (fields.manga ? fields.manga[0] : '');
        carac3 = "Cuello: " + (fields.cuello ? fields.cuello[0] : '');
        carac4 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        carac5 = "Decoracion: " + (fields.decoracion ? fields.decoracion[0] : '');
        carac6 = "Sexo: " + (fields.sexo ? fields.sexo[0] : '');
        carac7 = "Contorno" + (fields.contorno_medidas ? " (cm): " + fields.contorno_medidas[0] : '');
        carac8 = "Largo" + (fields.largo_medidas ? " (cm): " + fields.largo_medidas[0] : '');
        carac9 = "Sugerencia: " + (fields.sugerencias ? fields.sugerencias[0] : '');
        carac10 = "Precio: " + (fields.precio ? fields.precio[0] : '') + " €";
        break;

      case "VES":
        modelo = "vestido";
        carac1 = "Tipo: " + (fields.tipo ? fields.tipo[0] : '');
        carac2 = "Manga: " + (fields.manga ? fields.manga[0] : '');
        carac3 = "Cuello: " + (fields.cuello ? fields.cuello[0] : '');
        carac4 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        carac5 = "Sexo: " + (fields.sexo ? fields.sexo[0] : '');
        carac6 = "Contorno" + (fields.contorno_medidas ? " (cm): " + fields.contorno_medidas[0] : '');
        carac7 = "Largo" + (fields.largo_medidas ? " (cm): " + fields.largo_medidas[0] : '');
        carac8 = "Sugerencia: " + (fields.sugerencias ? fields.sugerencias[0] : '');
        carac9 = "Precio: " + (fields.precio ? fields.precio[0] : '') + " €";
        break;

      case "PAN":
        modelo = "pantalon";
        carac1 = "Tipo: " + (fields.tipo ? fields.tipo[0] : '');
        carac2 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        carac3 = "Sexo: " + (fields.sexo ? fields.sexo[0] : '');
        carac4 = "Contorno" + (fields.contorno_medidas ? " (cm): " + fields.contorno_medidas[0] : '');
        carac5 = "Largo" + (fields.largo_medidas ? " (cm): " + fields.largo_medidas[0] : '');
        carac6 = "Sugerencia: " + (fields.sugerencias ? fields.sugerencias[0] : '');
        carac7 = "Precio: " + (fields.precio ? fields.precio[0] : '') + " €";
        break;

      case "FAL":
        modelo = "falda";
        carac1 = "Entallado: " + (fields.entallado ? fields.entallado[0] : '');
        carac2 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        carac3 = "Sexo: " + (fields.sexo ? fields.sexo[0] : '');
        carac4 = "Contorno" + (fields.contorno_medidas ? " (cm): " + fields.contorno_medidas[0] : '');
        carac5 = "Largo" + (fields.largo_medidas ? " (cm): " + fields.largo_medidas[0] : '');
        carac6 = "Sugerencia: " + (fields.sugerencias ? fields.sugerencias[0] : '');
        carac7 = "Precio: " + (fields.precio ? fields.precio[0] : '') + " €";
        break;

      case "CHA":
        modelo = "chaqueta";
        carac1 = "Tipo: " + (fields.tipo ? fields.tipo[0] : '');
        carac2 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        carac3 = "Decoracion: " + (fields.decoracion ? fields.decoracion[0] : '');
        carac4 = "Sexo: " + (fields.sexo ? fields.sexo[0] : '');
        carac5 = "Contorno" + (fields.contorno_medidas ? " (cm): " + fields.contorno_medidas[0] : '');
        carac6 = "Largo" + (fields.largo_medidas ? " (cm): " + fields.largo_medidas[0] : '');
        carac7 = "Sugerencia: " + (fields.sugerencias ? fields.sugerencias[0] : '');
        carac8 = "Precio: " + (fields.precio ? fields.precio[0] : '') + " €";
        break;

      case "OTR":
        modelo = "diseño personalizado";
        carac1 = "Sugerencia: " + (fields.sugerencias ? fields.sugerencias[0] : '');
        carac2 = "Precio: " + (fields.precio ? fields.precio[0] : '') + " €";
        break;
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Diseño subido. Código de compra: ' + codigo,
      text: `Aquí tienes los detalles de tu ${modelo}:\n\n
Código: ${codigo}
${carac1}
${carac2}
${carac3}
${carac4}
${carac5}
${carac6}
${carac7}
${carac8}
${carac9}
${carac10}

Encontrarás adjunta la imagen del diseño.`,
      attachments: [
        {
          filename: file.originalFilename,
          path: file.filepath,
        }
      ],
      replyTo: userEmail,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.response);
      res.status(200).json({ message: 'Correo enviado exitosamente', info });
    } catch (error) {
      console.error('Error al enviar correo:', error);
      res.status(500).json({ message: 'Error al enviar correo', error });
    }
  });
}
