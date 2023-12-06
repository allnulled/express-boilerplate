CREATE TABLE Usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(255) UNIQUE,
    contrasenya VARCHAR(255),
    correo VARCHAR(255)
);

CREATE TABLE Permiso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(511)
);

CREATE TABLE Permiso_de_usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER,
    id_permiso INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
    FOREIGN KEY (id_permiso) REFERENCES Permiso (id)
);

CREATE TABLE Sesion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    token VARCHAR(100),
    id_usuario INTEGER,
    FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);
CREATE TABLE Blog_post (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(255) /*
    @tipo: Texto normal
    @tipo-en-formulario: text
    @descripcion: El título del post del blog.
    @maximo-de-texto: 100
    @minimo-de-texto: 1
  */,
  subtitulo VARCHAR(512),
  contenido TEXT,
  fecha_de_creacion DATETIME
);

CREATE TABLE Blog_comentario_de_post (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  contenido TEXT,
  fecha_de_creacion DATETIME
);
CREATE TABLE Ejemplo_de_columna (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color VARCHAR(32) /*
    @es_tipo: color
  */
);