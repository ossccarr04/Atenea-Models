require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

// Configuración de almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {

    cb(null, file.originalname); // Usamos el timestamp como nombre
  }
});

const upload = multer({ storage: storage });

const app = express();
const port = 3000;

app.use(cors());  // Permitir solicitudes de otros dominios (frontend)
app.use(express.json());  // Para manejar datos JSON
app.use(express.urlencoded({ extended: true }));  // Para manejar datos URL-encoded

// Ruta para enviar el correo con el archivo adjunto
app.post('/send-email', upload.single('file'), (req, res) => {
  const file = req.file; // Obtenemos el archivo subido desde el frontend
  const userEmail = req.body.email; // Obtenemos el correo del usuario desde el cuerpo de la solicitud
  const codigo = req.body.codigo;

  if (!file || !userEmail || !codigo) {
    return res.status(400).json({ message: 'Faltan datos requeridos: archivo, email o código' });
  }
  
  let carac1='', carac2='', carac3='', carac4='', carac5='', modelo='';

  switch(codigo.substring(0, 3)){ // Dependiendo de la prenda, se envían diferentes características
    case "CAM":
      modelo = "camiseta";
      carac1= "Entallado: "+req.body.entallado;
      carac2= "Manga: "+req.body.manga;
      carac3= "Cuello: "+req.body.cuello;
      carac4= "Largo: "+req.body.largo;  
      carac5= "Precio: "+req.body.precio + "€";
      break;

    case "VES":
      modelo = "vestido";
      carac1= "Tipo: "+req.body.tipo;
      carac2= "Manga: "+req.body.manga;
      carac3= "Cuello: "+req.body.cuello;
      carac4= "Largo: "+req.body.largo;  
      carac5= "Precio: "+req.body.precio + "€";
      break;
    
    case "PAN":
      modelo = "pantalon";
      carac1= "Tipo: "+req.body.tipo;
      carac2= "Largo: "+req.body.largo;  
      carac3= "Precio: "+req.body.precio + "€";

    case "FAL":
      modelo = "falda";
      carac1= "Entallado: "+req.body.entallado;
      carac2= "Largo: "+req.body.largo;
      carac3= "Precio: "+req.body.precio + "€";
      break;

    case "OTR":
      modelo = "diseño personalizado";
      carac1= "Precio: "+req.body.precio + "€";
  }

  // Configurar el transporte con nodemailer usando las variables de entorno
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // El correo configurado en el .env para enviar el correo
      pass: process.env.EMAIL_PASS,  // La contraseña de aplicación de Gmail configurada en el .env
    },
    tls: {
      rejectUnauthorized: false, // Esto ayuda a evitar problemas con SSL
    },
  });

  // Configurar el correo que se va a enviar
  const mailOptions = {
    from: process.env.EMAIL_USER, // El correo configurado en el .env para enviar el correo
    to: process.env.EMAIL_USER,   // El correo configurado en el .env para recibir el correo
    subject: 'Diseño subido. Codigo de compra: ' + codigo, // Asunto del correo
    text: `Aquí tienes los detalles de tu ${modelo}:\n\n
          ${"Codigo: "+codigo}
          ${carac1 ? carac1:''}
          ${carac2 ? carac2:''}
          ${carac3 ? carac3:''}
          ${carac4 ? carac4:''}
          ${carac5 ? carac5:''}\n
      Encontrarás adjunta la imagen del diseño.`,// Mensaje del correo
    attachments: [
      {
        filename: file.originalname, // Nombre del archivo adjunto
        path: file.path, // Ruta del archivo subido en el servidor
      },
    ],
    replyTo: userEmail,  // Aquí configuramos el correo de respuesta al correo del usuario
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ message: 'Error al enviar el correo', error });
    }
    console.log('Correo enviado:', info.response);
    res.status(200).json({ message: 'Correo enviado exitosamente', info });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


  
  
