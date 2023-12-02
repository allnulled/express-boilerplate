
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Interfaz de usuario</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/ui-script/ui-script.js\"></script>\n    <script src=\"lib/components/pagina_de_login/pagina_de_login.js\"></script>\n    <script src=\"lib/components/pagina_de_inicio/pagina_de_inicio.js\"></script>\n    <style>\n      * {\n        font-family: Sans-serif;\n      }\n      html {\n        background-color: #444;\n      }\n      hr {\n        margin: 0;\n        border: none;\n        border-top: 1px solid #333;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <template v-if=\"sesion_token\">"
 + "      <router-view :root=\"this\"></router-view>"
 + "    </template>"
 + "    <template v-else=\"\">"
 + "      <PaginaDeLogin :root=\"this\" />"
 + "    </template>"
 + "  </div>",
  function(component) {return { data() {try {
return { sesion_token:undefined
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