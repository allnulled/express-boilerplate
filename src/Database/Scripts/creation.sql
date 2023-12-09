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

CREATE TABLE Tabla_1 /*
  @es_seleccionable
  @es_insertable
  @es_actualizable
  @es_eliminable
  @comprobar_permiso:
    al        select | insert | update | delete
    si        @tiene_permiso(data, "permiso de administración")
    entonces  @@prohibir(data, "Se necesita permiso de administración para esta operación.")
  @comprobar_permiso:
    al        select | insert | update | delete
    si        @tiene_permiso(data, "permiso de administración")
    entonces  @@prohibir(data, "Se requieren permisos específicos para esta operación")
  */ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(100)
);

CREATE TABLE Tabla_2 /*
  @es_seleccionable
  @es_insertable
  @es_actualizable
  @es_eliminable
  */ (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre_privado VARCHAR(100),
  nombre_publico VARCHAR(100) /*
    @comprobar_restriccion: no es seleccionable si @no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_filtrable VARCHAR(100) /*
    @comprobar_restriccion: no es filtrable si @no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_ordenable VARCHAR(100) /*
    @comprobar_restriccion: no es ordenable si @no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_insertable VARCHAR(100) /*
    @comprobar_restriccion: no es insertable si @no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_actualizable VARCHAR(100) /*
    @comprobar_restriccion: no es actualizable si @no_tiene_permiso(data, "permiso de administración")
  */
);

CREATE TABLE Tabla_3 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_usuario INTEGER /*
    @interceptar: $interceptors.Columns.fijar_id_de_usuario_al_insertar(data, id_column, this);
    @interceptar: $interceptors.Columns.fijar_id_de_usuario_al_actualizar(data, id_column, this);
    @interceptar: $interceptors.Columns.es_actualizable_si_id_usuario_coincide_con(data, id_column, this);
  */,
  creado_en DATETIME /*
    @interceptar: $interceptors.Columns.fijar_fecha_actual_al_insertar(data, id_column, this);
  */,
  creado_por INTEGER /*
    @interceptar: $interceptors.Columns.fijar_id_de_usuario_al_insertar(data, id_column, this);
  */,
  actualizado_en DATETIME /*
    @interceptar: $interceptors.Columns.fijar_fecha_actual_al_actualizar(data, id_column, this);
  */,
  actualizado_por INTEGER /*
    @interceptar: $interceptors.Columns.fijar_id_de_usuario_al_actualizar(data, id_column, this);
  */,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (actualizado_por) REFERENCES Usuario (id),
  FOREIGN KEY (creado_por) REFERENCES Usuario (id)
);