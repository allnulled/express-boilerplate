<%
const autoincrement_word = process.env.DATABASE_DRIVER === "sqlite" ? "AUTOINCREMENT" : "AUTO_INCREMENT";
%>

CREATE TABLE Fichero (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  fichero VARCHAR(512) UNIQUE /*
    @es_tipo: fichero
  */,
  id_fichero_padre INTEGER,
  FOREIGN KEY (id_fichero_padre) REFERENCES Fichero (id)
);