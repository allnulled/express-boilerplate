<%
const autoincrement_word = process.env.DATABASE_DRIVER === "sqlite" ? "AUTOINCREMENT" : "AUTO_INCREMENT";
%>
CREATE TABLE Blog_post (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
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
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  contenido TEXT,
  fecha_de_creacion DATETIME
);