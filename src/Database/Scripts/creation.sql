
CREATE TABLE Usuario_no_confirmado (
  id INTEGER PRIMARY KEY AUTO_INCREMENT /*
    @tiene_nombre: Identificador
  */,
  nombre VARCHAR(255) UNIQUE /*
    @tiene_nombre: Nombre
  */,
  contrasenya VARCHAR(255) /*
    @tiene_nombre: Contraseña
  */,
  correo VARCHAR(255) UNIQUE /*
    @tiene_nombre: Correo
  */,
  token_de_confirmacion VARCHAR(30) UNIQUE /*
    @tiene_nombre: Token de confirmación
  */
);
CREATE TABLE Usuario (
  id INTEGER PRIMARY KEY AUTO_INCREMENT /*
    @tiene_nombre: Identificador
  */,
  nombre VARCHAR(255) UNIQUE /*
    @tiene_nombre: Nombre
  */,
  contrasenya VARCHAR(255) /*
    @tiene_nombre: Contraseña
  */,
  correo VARCHAR(255) UNIQUE /*
    @tiene_nombre: Correo
  */,
  token_de_recuperacion VARCHAR(255) UNIQUE /*
    @tiene_nombre: Token de recuperación
  */
);

CREATE TABLE Permiso (
  id INTEGER PRIMARY KEY AUTO_INCREMENT /*
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
  id INTEGER PRIMARY KEY AUTO_INCREMENT /*
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
  id INTEGER PRIMARY KEY AUTO_INCREMENT /*
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


CREATE TABLE Fichero (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  fichero VARCHAR(512) UNIQUE /*
    @es_tipo: fichero
  */,
  id_fichero_padre INTEGER,
  FOREIGN KEY (id_fichero_padre) REFERENCES Fichero (id)
);

CREATE TABLE Blog_post (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) /*
    @tipo: texto
    @descripcion: El título del post.
    @maximo_de_texto: 255
    @minimo_de_texto: 1
  */,
  subtitulo VARCHAR(512) /*
    @tipo: texto
    @descripcion: El subtítulo del post.
    @maximo_de_texto: 255
    @minimo_de_texto: 1
  */,
  contenido TEXT /*
    @tipo: texto
    @descripcion: El contenido del post.
    @maximo_de_texto: 255
    @minimo_de_texto: 1
  */,
  fecha_de_creacion DATETIME /*
    @tipo: fecha
    @descripcion: La fecha de la creación del post.
    @interceptar: await $interceptors.Columns.fijar_fecha_actual_al_insertar(data, 'fecha_de_creacion', this)
  */,
  fecha_de_actualizacion DATETIME /*
    @tipo: fecha
    @descripcion: La fecha de la última actualización del post.
    @interceptar: await $interceptors.Columns.fijar_fecha_actual_al_actualizar(data, 'fecha_de_actualizacion', this)
  */
);

CREATE TABLE Blog_comentario_de_post (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  contenido TEXT /*
    @tipo: texto largo
    @descripcion: El contenido en HTML del post.
    @interceptar: await $interceptors.Columns.solo_html_seguro(data, 'contenido', this)
  */,
  detalles TEXT /*
    @tipo: texto largo
    @descripcion: Detalles sobre el post.
  */,
  fecha_de_creacion DATETIME /*
    @tipo: fecha
    @descripcion: La fecha de la creación del post.
    @interceptar: await $interceptors.Columns.fijar_fecha_actual_al_insertar(data, 'fecha_de_creacion', this)
  */
);


CREATE TABLE Horarios_entrenador /*
  @comprobar_permiso:
    al         insert | update | delete
    si         $conditionals.no_tiene_permiso(data, "permiso de administración")
    entonces   $consequencials.prohibir(data, "Esta operación requiere de permisos específicos")
*/ (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  id_usuario INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Horarios_cita_previa /*
  @comprobar_permiso:
    al         select | insert | update | delete
    si         $conditionals.no_tiene_permiso(data, "permiso de administración")
    entonces   $consequencials.prohibir(data, "Esta operación requiere de permisos específicos")
*/ (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  cita_previa_inicio TIMESTAMP NOT NULL,
  cita_previa_final TIMESTAMP NOT NULL,
  id_entrenador INTEGER,
  FOREIGN KEY (id_entrenador) REFERENCES Horarios_entrenador (id)
);


