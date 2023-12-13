CREATE TABLE Carpeta (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre VARCHAR(1024) UNIQUE,
  id_carpeta_padre INTEGER,
  FOREIGN KEY (id_carpeta_padre) REFERENCES Carpeta (id)
);

CREATE TABLE Fichero (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fichero VARCHAR(1024) UNIQUE /*
    @es_tipo: fichero
  */,
  id_carpeta_padre INTEGER,
  FOREIGN KEY (id_carpeta_padre) REFERENCES Carpeta (id)
);