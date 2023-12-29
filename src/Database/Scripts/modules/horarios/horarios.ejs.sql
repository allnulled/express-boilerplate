<%
const autoincrement_word = process.env.DATABASE_DRIVER === "sqlite" ? "AUTOINCREMENT" : "AUTO_INCREMENT";
%>

CREATE TABLE Horarios_entrenador /*
  @comprobar_permiso:
    al         insert | update | delete
    si         $conditionals.no_tiene_permiso(data, "permiso de administración")
    entonces   $consequencials.prohibir(data, "Esta operación requiere de permisos específicos")
*/ (
  id INTEGER PRIMARY KEY <%=autoincrement_word%>,
  id_usuario INTEGER,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id)
);

CREATE TABLE Horarios_cita_previa /*
  @comprobar_permiso:
    al         select | insert | update | delete
    si         $conditionals.no_tiene_permiso(data, "permiso de administración")
    entonces   $consequencials.prohibir(data, "Esta operación requiere de permisos específicos")
*/ (
  id INTEGER PRIMARY KEY <%=autoincrement_word%>,
  cita_previa_inicio TIMESTAMP NOT NULL,
  cita_previa_final TIMESTAMP NOT NULL,
  id_entrenador INTEGER,
  FOREIGN KEY (id_entrenador) REFERENCES Horarios_entrenador (id)
);

