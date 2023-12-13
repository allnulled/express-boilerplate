Lenguaje = Sentencias
Sentencias = _* sentencias:Sentencia* _* { return sentencias }
Sentencia = Sentencia_CREATE_TABLE
Sentencia_CREATE_TABLE = 
  token1:(_* ("CREATE TABLE"/"create table") _+)
  tabla:Id
  token2:( _* )
  atributos:Hiperdetalles_de_tabla?
  token3:( _* "(" _*)
  composicion:Composicion_de_tabla
  token4:(_* ");")
    { return { tabla, atributos: atributos ? atributos : [], composicion, script: text() } }
Composicion_de_tabla = 
  sentencia1:Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_1
  sentenciaN:Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_n*
    { return [].concat([sentencia1]).concat(sentenciaN); }
Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_1 =
  Sentencia_FOREIGN_KEY /
  Sentencia_CONSTRAINT_UNIQUE /
  Sentencia_CREATE_COLUMN / 
  Sentencia_PRIMARY_KEY
Sentencia_CONSTRAINT_UNIQUE = 
  token1:(_*)
  token2:"CONSTRAINT"
  token3:(_+)
  columna:Id
  token4:(_+)
  token5:"UNIQUE"
  token6:(_* "(")
  columnas_implicadas:Id_list
  token7:(_* ")" _*)
    { return { sentencia: "restricción única", columna, columnas_implicadas } }
Id_list =
  columna:Id
  columnas:Id_postcoma+
    { return [].concat([ columna ]).concat(columnas) }
Id_postcoma =
  token1:","
  token2:_*
  id:Id
    { return id }
Sentencia_CREATE_COLUMN = 
  token1:(_*)
  columna:Id
  token2:(_+)
  tipo:Tipos
  detalles:Detalles_de_columna
  atributos:Hiperdetalles_de_columna?
    { return { sentencia: "columna", columna, tipo, detalles, atributos: atributos ? atributos : [] } }
Detalles_de_columna = (!(","/"\n"/"/*").)* { return text().trim() }
Hiperdetalles_de_tabla = Hiperdetalles_de_columna
Hiperdetalles_de_columna =
  token1:"/*"
  atributos:Hiperatributos
  token2:(_* "*/")
    { return atributos }
Hiperatributos =
  atributos:Hiperatributo*
    { return atributos ? atributos : [] }
Hiperatributo = Hiperatributo_tipo_4 / Hiperatributo_tipo_3 / Hiperatributo_tipo_2 / Hiperatributo_tipo_1
Hiperatributo_tipo_1 =
  token1:(___ (__ __)? (__ __)? "@")
  hiperatributo:Hiperatributo_texto
  subatributos:Hipersubatributos?
    { return subatributos ? [hiperatributo, subatributos] : hiperatributo }
Hiperatributo_tipo_2 = _* "@comprobar_permiso:" valor:Lenguaje_interno_1 { return valor }
Hiperatributo_tipo_3 = _* "@comprobar_restriccion:" valor:Lenguaje_interno_2 { return valor }
Hiperatributo_tipo_4 = _* "@interceptar:" valor:Lenguaje_interno_3 { return valor }

Lenguaje_interno_3 = (!(___).)+ { return { tipo: "interceptar", eval: text() } }

Lenguaje_interno_1 = Sentencia_1
Sentencia_1 = _* al:Accion si:Condicion? entonces:Consecuencia { return {tipo:"comprobar_permiso",al,si,entonces}}
Accion = _* "al" _+ ops:Operaciones { return ops }
Operaciones = op:Operacion op_n:Otras_operaciones* { return [op].concat(op_n) }
Otras_operaciones = (_* "|" _*) op:Operacion { return op }
Operacion = "select" / "insert" / "update" / "delete" / "getfile" / "setfile"
Condicion = _+ "si" _+ condicional:Condicional { return condicional }
Consecuencia = _+ "entonces" _+ reaccional:Consecuencial { return reaccional }
Condicional = (!(Consecuencia).)+ { return text() }
Consecuencial = (!(___).)+ { return text() }
Condicion_2 = _+ "si" _+ condicional:Condicional_2 { return condicional }
Condicional_2 = (!(___).)+ { return text() }

Lenguaje_interno_2 = Restriccion

Restriccion = restriccion:(
  Restriccion_1 /
  Restriccion_2 /
  Restriccion_3 /
  Restriccion_4 /
  Restriccion_5 /
  Restriccion_6 /
  Restriccion_7 /
  Restriccion_8 /
  Restriccion_9 /
  Restriccion_10 /
  Restriccion_11 /
  Restriccion_12 /
  Restriccion_13 /
  Restriccion_14 )
    { return restriccion }
Restriccion_1 = _*  "no es actualizable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es actualizable", si } }
Restriccion_2 = _*  "no es actualizable"
    { return {tipo: "comprobar_restriccion", entidad: "no es actualizable", si: null } }
Restriccion_3 = _*  "no es eliminable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es eliminable", si } }
Restriccion_4 = _*  "no es eliminable"
    { return {tipo: "comprobar_restriccion", entidad: "no es eliminable", si: null } }
Restriccion_5 = _*  "no es filtrable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es filtrable", si } }
Restriccion_6 = _*  "no es filtrable"
    { return {tipo: "comprobar_restriccion", entidad: "no es filtrable", si: null } }
Restriccion_7 = _*  "no es insertable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es insertable", si } }
Restriccion_8 = _*  "no es insertable"
    { return {tipo: "comprobar_restriccion", entidad: "no es insertable", si: null } }
Restriccion_9 = _*  "no es modificable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es modificable", si } }
Restriccion_10 = _* "no es modificable"
    { return {tipo: "comprobar_restriccion", entidad: "no es modificable", si: null } }
Restriccion_11 = _* "no es ordenable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es ordenable", si } }
Restriccion_12 = _* "no es ordenable"
    { return {tipo: "comprobar_restriccion", entidad: "no es ordenable", si: null } }
Restriccion_13 = _* "no es seleccionable" si:Condicion_2
    { return {tipo: "comprobar_restriccion", entidad: "no es seleccionable", si } }
Restriccion_14 = _* "no es seleccionable"
    { return {tipo: "comprobar_restriccion", entidad: "no es seleccionable", si } }

Hiperatributo_texto = (!(___).)+ { return text() }
Hipersubatributos =
  subatributos:Hipersubatributo+ 
    { return subatributos }
Hipersubatributo = ___+ (__ __)* "-" texto:Hiperatributo_texto { return texto.trim() }
Tipos = ("INTEGER"/"integer"/"int"/"VARCHAR"/"varchar"/"TEXT"/"text"/"DATETIME"/"datetime"/"DATE"/"date"/"TIMESTAMP"/"timestamp"/"TIME"/"time"/"REAL"/"real"/"BLOB"/"blob")
Sentencia_PRIMARY_KEY =
  token1:(_* ("PRIMARY KEY"/"primary key") _* )
  token3:(_* "(" _*)
  clave_1:Id
  clave_n:Id_n
  token4:(_* ")" _*)
    { return { sentencia: "clave primaria", columnas: [clave_1].concat(clave_n || []) } }
Sentencia_FOREIGN_KEY = 
  token1:(_* ("FOREIGN KEY"/"foreign key") _* "(")
  columna:Id
  token2:(")" _+ ("REFERENCES"/"references") _+)
  tabla_foranea:Id
  token3:(_* "(" _*)
  columna_foranea:Id
  token4:(_* ")" _*)
    { return { sentencia: "clave foránea", columna, tabla_foranea, columna_foranea } }
Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_n =
  token1:(_* "," _*)
  sentencia:Sentencia_CREATE_COLUMN_o_FOREIGN_KEY_o_PRIMARY_KEY_1
    { return sentencia }
Id = [A-Za-z_] [A-Za-z0-9_$]* { return text() }
Id_n = _* "," _* id:Id { return id }
___ "salto" = "\r\n" / "\r" / "\n" {}
__ "espacio" = "\t" / " " {}
_ "espacio o salto" = __ / ___ {}