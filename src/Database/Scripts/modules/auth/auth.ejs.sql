CREATE TABLE Usuario (
  id INTEGER PRIMARY KEY AUTOINCREMENT /*
    @tiene_nombre: Identificador
  */,
  nombre VARCHAR(255) UNIQUE /*
    @tiene_nombre: Nombre
  */,
  contrasenya VARCHAR(255) /*
    @tiene_nombre: Contraseña
  */,
  correo VARCHAR(255) /*
    @tiene_nombre: Correo
  */
);

CREATE TABLE Permiso (
  id INTEGER PRIMARY KEY AUTOINCREMENT /*
    @tiene_nombre: Identificador
  */,
  nombre VARCHAR(255) /*
    @tiene_nombre: Nombre
  */,
  descripcion VARCHAR(511) /*
    @tiene_nombre: Descripción
  */
);

CREATE TABLE Permiso_de_usuario (
  id INTEGER PRIMARY KEY AUTOINCREMENT /*
    @tiene_nombre: Identificador
  */,
  id_usuario INTEGER /*
    @tiene_nombre: Identificador de usuario
  */,
  id_permiso INTEGER /*
    @tiene_nombre: Identificador de permiso
  */,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (id_permiso) REFERENCES Permiso (id)
);

CREATE TABLE Sesion (
  id INTEGER PRIMARY KEY AUTOINCREMENT /*
    @tiene_nombre: Identificador
  */,
  token VARCHAR(100) /*
    @tiene_nombre: Token de sesión
  */,
  id_usuario INTEGER /*
    @tiene_nombre: Identificador de usuario
  */,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);