import nodemailer from 'nodemailer';
import formidable from 'formidable';
import dotenv from 'dotenv';
dotenv.config();

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

    let carac1 = '', carac2 = '', carac3 = '', carac4 = '';

    switch (codigo.substring(0, 3)) {
      case "CAM":
        carac1 = "Entallado: " + (fields.entallado ? fields.entallado[0] : '');
        carac2 = "Manga: " + (fields.manga ? fields.manga[0] : '');
        carac3 = "Cuello: " + (fields.cuello ? fields.cuello[0] : '');
        carac4 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        break;
      case "VES":
        carac1 = "Tipo: " + (fields.tipo ? fields.tipo[0] : '');
        carac2 = "Manga: " + (fields.manga ? fields.manga[0] : '');
        carac3 = "Cuello: " + (fields.cuello ? fields.cuello[0] : '');
        carac4 = "Largo: " + (fields.largo ? fields.largo[0] : '');
        break;
      case "PAN":
        carac1 = "Tipo: " + (fields.tipo ? fields.tipo[0] : '');
        carac2 = "Largo: " + (fields.largo ? fields.largo[0] : '');
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
      text: `Aquí tienes los detalles de tu diseño:\n\n
Código: ${codigo}
${carac1}
${carac2}
${carac3}
${carac4}

Adjunto encontrarás la imagen del diseño.`,
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
