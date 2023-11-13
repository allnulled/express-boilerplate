CREATE TABLE Votacion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    presentacion TEXT,
    fecha_de_presentacion DATETIME,
    fecha_de_problemas DATETIME,
    fecha_de_soluciones DATETIME,
    fecha_de_implementaciones DATETIME,
    fecha_de_aplicaciones DATETIME
);

CREATE TABLE Problema (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    id_votacion INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id)
);

CREATE TABLE Solucion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    id_votacion INTEGER,
    id_problema INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema) REFERENCES Problema (id)
);

CREATE TABLE Implementacion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(1024),
    descripcion TEXT,
    contenido TEXT,
    id_votacion INTEGER,
    id_problema INTEGER,
    id_solucion INTEGER,
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema) REFERENCES Problema (id),
    FOREIGN KEY (id_solucion) REFERENCES Solucion (id)
);

CREATE TABLE Voto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_votacion INTEGER,
    id_problema INTEGER,
    id_solucion INTEGER,
    id_implementacion INTEGER,
    sentido VARCHAR(64),
    FOREIGN KEY (id_votacion) REFERENCES Votacion (id),
    FOREIGN KEY (id_problema) REFERENCES Problema (id),
    FOREIGN KEY (id_solucion) REFERENCES Solucion (id),
    FOREIGN KEY (id_implementacion) REFERENCES Implementacion (id)
);