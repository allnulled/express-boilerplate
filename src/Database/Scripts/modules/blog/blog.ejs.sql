<%
const autoincrement_word = process.env.DATABASE_DRIVER === "sqlite" ? "AUTOINCREMENT" : "AUTO_INCREMENT";
%>
CREATE TABLE Blog_post (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
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
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
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