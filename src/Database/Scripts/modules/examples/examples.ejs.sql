<%
const autoincrement_word = process.env.DATABASE_DRIVER === "sqlite" ? "AUTOINCREMENT" : "AUTO_INCREMENT";
%>
CREATE TABLE Ejemplo_de_columna (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
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
    si        await $conditionals.no_tiene_permiso(data, "permiso de administración")
    entonces  await $consequencials.prohibir(data, "Se necesita permiso de administración para esta operación.")
  @comprobar_permiso:
    al        select | insert | update | delete
    si        await $conditionals.no_tiene_permiso(data, "permiso de administración")
    entonces  await $consequencials.prohibir(data, "Se requieren permisos específicos para esta operación")
  */ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  nombre VARCHAR(100)
);

CREATE TABLE Tabla_2 /*
  @es_seleccionable
  @es_insertable
  @es_actualizable
  @es_eliminable
  */ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  nombre_privado VARCHAR(100),
  nombre_publico VARCHAR(100) /*
    @comprobar_restriccion:
      no es seleccionable
      si $conditionals.no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_filtrable VARCHAR(100) /*
    @comprobar_restriccion: no es filtrable si $conditionals.no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_ordenable VARCHAR(100) /*
    @comprobar_restriccion: no es ordenable si $conditionals.no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_insertable VARCHAR(100) /*
    @comprobar_restriccion: no es insertable si $conditionals.no_tiene_permiso(data, "permiso de administración")
  */,
  nombre_no_actualizable VARCHAR(100) /*
    @comprobar_restriccion: no es actualizable si $conditionals.no_tiene_permiso(data, "permiso de administración")
  */
);

CREATE TABLE Tabla_3 /*
  @comprobar_permiso: 
    al update
    si $conditionals.columna_tiene_valor(data, "campo_de_estado", this, "FASE-0", ";")
    entonces $consequencials.columna_solo_actualizable_a(data, "campo_de_estado", this, "FASE-0;FASE-1", ";")
  @comprobar_permiso: 
    al update
    si $conditionals.columna_tiene_valor(data, "campo_de_estado", this, "FASE-1", ";")
    entonces $consequencials.columna_solo_actualizable_a(data, "campo_de_estado", this, "FASE-0;FASE-1;FASE-2", ";")
  @comprobar_permiso: 
    al update
    si $conditionals.columna_tiene_valor(data, "campo_de_estado", this, "FASE-2", ";")
    entonces $consequencials.columna_solo_actualizable_a(data, "campo_de_estado", this, "FASE-1;FASE-2;FASE-3", ";")
  @comprobar_permiso: 
    al update
    si $conditionals.columna_tiene_valor(data, "campo_de_estado", this, "FASE-3", ";")
    entonces $consequencials.columna_solo_actualizable_a(data, "campo_de_estado", this, "FASE-2;FASE-3;FASE-4", ";")
  @comprobar_permiso: 
    al update
    si $conditionals.columna_tiene_valor(data, "campo_de_estado", this, "FASE-4", ";")
    entonces $consequencials.columna_solo_actualizable_a(data, "campo_de_estado", this, "FASE-3;FASE-4;FASE-5", ";")
  @comprobar_permiso: 
    al update
    si $conditionals.columna_tiene_valor(data, "campo_de_estado", this, "FASE-5", ";")
    entonces $consequencials.columna_solo_actualizable_a(data, "campo_de_estado", this, "FASE-4;FASE-5;FASE-6", ";")
  @interceptar: $interceptors.Tables.registrar_cambios_en(data, this, "Historial_de_Tabla_3");
  @tiene_columna_preferida: campo_preferido
*/ (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
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
  campo_preferido VARCHAR(255),
  campo_libre VARCHAR(255),
  campo_de_estado VARCHAR(255) /*
    @interceptar: $interceptors.Columns.fijar_valor_inicial(data, id_column, this, "FASE-0");
  */,
  FOREIGN KEY (id_usuario) REFERENCES Usuario (id),
  FOREIGN KEY (actualizado_por) REFERENCES Usuario (id),
  FOREIGN KEY (creado_por) REFERENCES Usuario (id)
);

CREATE TABLE Historial_de_Tabla_3 (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  tabla VARCHAR(255),
  operacion VARCHAR(255),
  identificador INTEGER,
  parametros TEXT,
  autentificacion TEXT,
  creado_en DATETIME
);

CREATE TABLE Tabla_4 (
  id INTEGER PRIMARY KEY <%-autoincrement_word%>,
  id_tabla_3 INTEGER,
  campo_unico VARCHAR(255) UNIQUE,
  FOREIGN KEY (id_tabla_3) REFERENCES Tabla_3 (id)
);