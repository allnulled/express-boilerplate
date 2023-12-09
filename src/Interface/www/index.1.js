
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Interfaz de usuario</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_administracion/pagina_de_administracion.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_ayuda/pagina_de_ayuda.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_inicio/pagina_de_inicio.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_login/pagina_de_login.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_abrir_tabla/pagina_de_abrir_tabla.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_abrir_fila/pagina_de_abrir_fila.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_crear_item/pagina_de_crear_item.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_esquema/pagina_de_esquema.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/pagina_de_autentificacion/pagina_de_autentificacion.css\" />\n    \n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/ui-script/ui-script.js\"></script>\n    <script src=\"lib/components/pagina_de_administracion/pagina_de_administracion.js\"></script>\n    <script src=\"lib/components/pagina_de_ayuda/pagina_de_ayuda.js\"></script>\n    <script src=\"lib/components/pagina_de_inicio/pagina_de_inicio.js\"></script>\n    <script src=\"lib/components/pagina_de_login/pagina_de_login.js\"></script>\n    <script src=\"lib/components/pagina_de_abrir_tabla/pagina_de_abrir_tabla.js\"></script>\n    <script src=\"lib/components/pagina_de_abrir_fila/pagina_de_abrir_fila.js\"></script>\n    <script src=\"lib/components/pagina_de_crear_item/pagina_de_crear_item.js\"></script>\n    <script src=\"lib/components/pagina_de_esquema/pagina_de_esquema.js\"></script>\n    <script src=\"lib/components/pagina_de_autentificacion/pagina_de_autentificacion.js\"></script>\n    <style>\n      html {\n        background-color: #555;\n        color: white;\n      }\n      * {\n        font: 9pt Segoe UI,Sans-serif;\n      }\n      h5 {\n        background-color: #333;\n        color: white;\n        padding: 12px;\n        margin: 0px;\n        font-size: 12px;\n        font-family: Arial;\n      }\n      .width_100 {\n        width: 100%;\n      }\n      .boton_ancho_centro {\n        width: 100%;\n        margin-top: 4px;\n        text-align: center;\n      }\n      .boton_ancho_izquierda {\n        width: 100%;\n        margin-top: 4px;\n        text-align: left !important;\n      }\n      .win7 button {\n        word-break: break-all;\n      }\n      .win7 button.boton_verde {\n        background: linear-gradient(180deg,#b0d2a1 45%,#91db86 0,#71935e);\n        border: 1px solid #8eff8f;\n        outline: none;\n      }\n      .win7 button.boton_verde:hover,\n      .win7 button.boton_verde.active {\n        background: linear-gradient(180deg,#83ff56 45%,#77e373 0);\n        border-color: #40b13c;\n      }\n      .win7 button.boton_azul {\n        background: linear-gradient(180deg,#a5e2ff 45%,#bdb8ff 0,#00c3d7);\n        border: 1px solid #7aecff;\n        outline: none;\n      }\n      .win7 button.boton_azul:hover,\n      .win7 button.boton_azul.active {\n        background: linear-gradient(180deg,#6ccfff 45%,#46c8f0 0);\n        border-color: #6363ff;\n      }\n      .win7 button.boton_rojo {\n        background: linear-gradient(180deg,#f2adad 45%,#faa 0,#e62626);\n        border: 1px solid #7aecff;\n        outline: none;\n      }\n      .win7 button.boton_rojo:hover,\n      .win7 button.boton_rojo.active {\n        background: linear-gradient(180deg,#f97777 45%,#ff4e4e 0);\n        border-color: #ff6363;\n      }\n      .win7 a {\n        color: #97c9fb;\n      }\n      .padding_top_1 {\n        padding-top: 4px;\n      }\n      .padding_bottom_1 {\n        padding-bottom: 4px;\n      }\n      .margin_left_1 {\n        margin-left: 4px;\n      }\n      .margin_right_1 {\n        margin-right: 4px;\n      }\n      .margin_top_1 {\n        margin-top: 4px;\n      }\n      .margin_bottom_1 {\n        margin-bottom: 4px;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <template v-if=\"sesion_token && compacted_schema\">"
 + "      <router-view :root=\"this\"></router-view>"
 + "    </template>"
 + "    <template v-else=\"\">"
 + "      <PaginaDeLogin :root=\"this\" ref=\"pagina_de_login\"></PaginaDeLogin>"
 + "    </template>"
 + "    <xdialogport></xdialogport>"
 + "  </div>",
  function(component) {return { data() {try {
return { autentication:undefined,
original_schema:undefined,
compacted_schema:undefined,
sesion_token:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async obtener_schema() {try {
console.log('[DEBUG]', "App.obtener_schema");
const respuesta_schema = (await Castelog.metodos.una_peticion_http("/Schema", "POST", { 
}, { authorization:this.sesion_token
}, null, error => {
Vue.prototype.$dialogs.error( error );}));
if(respuesta_schema instanceof Error) {
return;
}
this.original_schema = respuesta_schema.data.data.esquema.original;
this.compacted_schema = respuesta_schema.data.data.esquema.compacto;
} catch(error) {
Vue.prototype.$dialogs.error( error );}
},
async login( nombre,
contrasenya ) {try {
console.log('[DEBUG]', "App.login");
const respuesta_login = (await Castelog.metodos.una_peticion_http("/Login", "POST", { nombre,
contrasenya
}, { 
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_login instanceof Error) {
return;
}
this.$refs.pagina_de_login.persistir_credenciales( nombre,
contrasenya );
this.authentication = respuesta_login.data.data;
this.sesion_token = respuesta_login.data.data.sesion.token;
(await this.obtener_schema(  ));
} catch(error) {
Vue.prototype.$dialogs.error( error );}
}
},
watch:{ 
},
beforeMount() {try {
console.log('[DEBUG]', "App.beforeMount");
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
},
{ path:"/administracion",
name:"PaginaDeAdministracion",
component:PaginaDeAdministracion,
props:{ 
}
},
{ path:"/abrir-tabla/:tabla",
name:"PaginaDeAbrirTabla",
component:PaginaDeAbrirTabla,
props:{ 
}
},
{ path:"/abrir-fila/:tabla/:fila",
name:"PaginaDeAbrirFila",
component:PaginaDeAbrirFila,
props:{ 
}
},
{ path:"/crear-item/:tabla",
name:"PaginaDeCrearItem",
component:PaginaDeCrearItem,
props:{ 
}
},
{ path:"/ayuda",
name:"PaginaDeAyuda",
component:PaginaDeAyuda,
props:{ 
}
},
{ path:"/esquema",
name:"PaginaDeEsquema",
component:PaginaDeEsquema,
props:{ 
}
},
{ path:"/autentificacion",
name:"PaginaDeAutentificacion",
component:PaginaDeAutentificacion,
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