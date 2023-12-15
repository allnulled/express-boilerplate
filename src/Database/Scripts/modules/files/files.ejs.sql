<%
const autoincrement_word = process.env.DATABASE_DRIVER === "sqlite" ? "AUTOINCREMENT" : "AUTO_INCREMENT";
%>
CREATE TABLE Carpeta (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  nombre VARCHAR(512) UNIQUE,
  id_carpeta_padre INTEGER,
  FOREIGN KEY (id_carpeta_padre) REFERENCES Carpeta (id)
);

CREATE TABLE Fichero (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fichero VARCHAR(512) UNIQUE /*
    @es_tipo: fichero
  */,
  id_carpeta_padre INTEGER,
  FOREIGN KEY (id_carpeta_padre) REFERENCES Carpeta (id)
);