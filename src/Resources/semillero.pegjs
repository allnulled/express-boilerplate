{
    const emf_definir_fichero = function(nombre, contenido) {
      let emf = "";
      emf += "\n<## " + nombre + " ##>\n";
      emf += contenido;
      return emf;
    };
    const reductores = {
      carpeta: function(sentencia) { return emf_definir_fichero( "mkdir " + sentencia.fichero, sentencia.contenido) },
      fichero: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      plantilla: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      controlador: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      utilidad: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      modelo: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      migracion: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      consulta: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      comando: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      configuracion: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      libreria_ui: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
      componente_ui: function(sentencia) { return emf_definir_fichero(sentencia.fichero, sentencia.contenido) },
    };
    const reducir_ast = function(sentencias) {
      let emf = "";
      for(let index = 0; index < sentencias.length; index++) {
        const sentencia = sentencias[index];
        const reductor = reductores[sentencia.tipo];
        const reduccion = reductor(sentencia);
        emf += reduccion;
      }
      return emf;
    };
  }
  
  Lenguaje = _* sentencias:Sentencia* _* { return reducir_ast(sentencias); }
  
  Sentencia =
    Sentencia_de_Defino_carpeta /
    Sentencia_de_Defino_fichero /
    Sentencia_de_Defino_plantilla /
    Sentencia_de_Defino_controlador /
    Sentencia_de_Defino_utilidad /
    Sentencia_de_Defino_modelo /
    Sentencia_de_Defino_migracion /
    Sentencia_de_Defino_consulta /
    Sentencia_de_Defino_comando /
    Sentencia_de_Defino_configuracion /
    Sentencia_de_Defino_libreria_de_interfaz /
    Sentencia_de_Defino_componente_de_interfaz
  
  Sentencia_de_Defino_carpeta =
    token1:(_* "Defino carpeta" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    token3:Subrayado?
    contenido:Negar_sentencia
      { return { tipo: "carpeta", fichero, contenido } }
  Sentencia_de_Defino_fichero =
    token1:(_* "Defino fichero" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    token3:Subrayado?
    contenido:Negar_sentencia
      { return { tipo: "fichero", fichero, contenido } }
  Sentencia_de_Defino_plantilla = 
    token1:(_* "Defino plantilla" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    token3:Subrayado?
    contenido:Negar_sentencia
      { return { tipo: "plantilla", fichero, contenido } }
  Sentencia_de_Defino_controlador = 
    token1:(_* "Defino controlador" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    token3:Subrayado?
    contenido:Negar_sentencia
      { return { tipo: "controlador", fichero, contenido } }
  Sentencia_de_Defino_utilidad = 
    token1:(_* "Defino utilidad" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "utilidad", fichero, contenido } }
  Sentencia_de_Defino_modelo = 
    token1:(_* "Defino modelo" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "modelo", fichero, contenido } }
  Sentencia_de_Defino_migracion = 
    token1:(_* "Defino migración" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "migracion", fichero, contenido } }
  Sentencia_de_Defino_consulta = 
    token1:(_* "Defino consulta" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "consulta", fichero, contenido } }
  Sentencia_de_Defino_comando = 
    token1:(_* "Defino comando" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "comando", fichero, contenido } }
  Sentencia_de_Defino_configuracion = 
    token1:(_* "Defino configuración" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "configuracion", fichero, contenido } }
  Sentencia_de_Defino_libreria_de_interfaz = 
    token1:(_* "Defino librería de interfaz" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "libreria_ui", fichero, contenido } }
  Sentencia_de_Defino_componente_de_interfaz =
    token1:(_* "Defino componente de interfaz" _+ )
    fichero:Negar_salto_de_linea
    token2:EOS
    contenido:Negar_sentencia
      { return { tipo: "componente_ui", fichero, contenido } }
  Negar_salto_de_linea = (!(___).)* { return text() }
  Negar_sentencia = (!(Sentencia).)* { return text() }
  Subrayado = "-"+ EOS
  EOS = ___ / EOF
  EOF = !.
  _ = __ / ___
  __ = "\t" / " "
  ___ = "\r\n" / "\r" / "\n"