const express = require('express');
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log(`Starting server in ${process.env.NODE_ENV} mode`);

app.use(cors({
  origin: 'http://localhost:4200', 
  methods: 'GET,POST,PUT,DELETE', 
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(express.json());

const readData = () => {
  const data = fs.readFileSync('./db.json', 'utf8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/usuarios/me', authenticateToken, (req, res) => {
  const db = readData();
  const user = db.usuarios.find(u => u.idUser === req.user.id);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

app.get('/usuarios', (req, res) => {
  const db = readData();
  res.json(db.usuarios);
});

app.get('/cursos', (req, res) => {
  const db = readData();
  res.json(db.cursos);
});

app.post('/usuarios', (req, res) => {
  const db = readData();
  const { nombre, apellido, contraseña, rol, email } = req.body;
  const newUser = {
    idUser: db.usuarios.length + 1,
    nombre,
    apellido,
    contraseña,
    rol,
    email
  };
  db.usuarios.push(newUser);
  writeData(db);
  res.status(201).json({ message: 'Usuario creado exitosamente', id: newUser.idUser });
});

app.post('/cursos', (req, res) => {
  const db = readData();
  const { nombreProfesor, genero, telefono, nombreCurso, fecha, email, tiempo, precioCurso, tipoCurso, salon, descripcion } = req.body;
  const newCourse = {
    idCurso: db.cursos.length + 1,
    nombreProfesor,
    genero,
    telefono,
    nombreCurso,
    fecha,
    email,
    tiempo,
    precioCurso,
    tipoCurso,
    salon,
    descripcion
  };
  db.cursos.push(newCourse);
  writeData(db);
  res.status(201).json({ message: 'Curso creado exitosamente', id: newCourse.idCurso });
});

app.post('/login', (req, res) => {
  const db = readData();
  const { email, contraseña } = req.body;
  
  if (!email || !contraseña) {
    return res.status(400).json({ error: 'Correo electrónico y contraseña son requeridos' });
  }

  const user = db.usuarios.find(u => u.email === email && u.contraseña === contraseña);

  if (user) {
    const token = jwt.sign({ id: user.idUser }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ usuario: user, token });
  } else {
    res.status(401).json({ error: 'Correo electrónico o contraseña incorrectos' });
  }
});

app.delete('/cursos/:idCurso', (req, res) => {
  const db = readData();
  const idCurso = parseInt(req.params.idCurso);
  const index = db.cursos.findIndex(curso => curso.idCurso === idCurso);

  if (index !== -1) {
    db.cursos.splice(index, 1);
    writeData(db);
    res.status(200).json({ message: 'Curso eliminado exitosamente' });
  } else {
    res.status(404).json({ error: 'Curso no encontrado' });
  }
});

app.put('/cursos/:idCurso', (req, res) => {
  const db = readData();
  const idCurso = parseInt(req.params.idCurso);
  const { nombreProfesor, genero, telefono, nombreCurso, fecha, email, tiempo, precioCurso, tipoCurso, salon, descripcion } = req.body;
  const course = db.cursos.find(curso => curso.idCurso === idCurso);

  if (course) {
    Object.assign(course, { nombreProfesor, genero, telefono, nombreCurso, fecha, email, tiempo, precioCurso, tipoCurso, salon, descripcion });
    writeData(db);
    res.status(200).json({ message: 'Curso actualizado exitosamente' });
  } else {
    res.status(404).json({ error: 'Curso no encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
