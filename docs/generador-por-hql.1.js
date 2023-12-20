
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"generador-por-hql","version":"1","contenido":{"head":"<head>\n    <title>🌐 Generador por HQL 🌐</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/xcomponents/xcomponents.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/theme/theme.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/xcomponents/xcomponents.js\"></script>\n    <script src=\"lib/hql/hql.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>🌐 Generador por HQL 🌐</h5>"
 + "    <div>"
 + "      <textarea ref=\"editor_de_entrada\"></textarea>"
 + "    </div>"
 + "    <div style=\"padding: 4px;\">"
 + "      <button style=\"width:100%;\" v-on:click=\"validar\">Validar</button>"
 + "    </div>"
 + "    <div v-if=\"error\" style=\"padding: 4px;\">"
 + "      <div style=\"background-color: red; color: white; font-family: monospace; font-size: 10px;\" v-on:click=\"limpiar_error\">{{ error.name }} {{ error.message }} {{ error.stack }}</div>"
 + "      <div v-on:click=\"limpiar_error\" v-if=\"error.location\">"
 + "        <pre style=\"background-color: red; color: white; font-family: monospace; font-size: 10px;\">{{ error.location }}</pre>"
 + "        <pre style=\"background-color: red; color: white; font-family: monospace; font-size: 10px;\">{{ error.expected }}</pre>"
 + "      </div>"
 + "    </div>"
 + "    <div>"
 + "      <textarea ref=\"editor_de_salida\"></textarea>"
 + "    </div>"
 + "    <div style=\"padding: 4px;\" v-if=\"!error && !!salida\">"
 + "      <button style=\"width:100%;\" v-on:click=\"descargar\">Descargar</button>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { error:undefined,
salida:undefined,
cm_entrada:undefined,
cm_entrada_timeout:undefined,
cm_salida:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ limpiar_error() {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
validar() {try {
const entrada = this.cm_entrada.getValue(  );
const ast = Hql_parser.parse( entrada );
this.error = undefined;
this.salida = ast;
this.cm_salida.setValue( JSON.stringify( ast,
null,
2 ) );
} catch(error) {
this.error = error;
this.$forceUpdate( true );}
},
descargar() {
}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
this.cm_entrada = CodeMirror.fromTextArea( this.$refs.editor_de_entrada,
{ lineNumbers:true
} );
this.cm_salida = CodeMirror.fromTextArea( this.$refs.editor_de_salida,
{ lineNumbers:true
} );
this.cm_entrada.on( "change",
() => {try {
clearTimeout( this.cm_entrada_timeout );
this.cm_entrada_timeout = setTimeout( () => {try {
this.validar(  );
} catch(error) {
console.log(error);
throw error;
}

},
1500 );
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");