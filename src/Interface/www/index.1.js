
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 Interfaz de usuario</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/ui-script/ui-script.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/ui-script/ui-script.js\"></script>\n    <style>\n      h5 {\n        background-color: #333;\n        color: white;\n        padding: 12px;\n        margin: 0px;\n        font-size: 12px;\n        font-family: Arial;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <xtitle>Inicio</xtitle>"
 + "    <xlayout>"
 + "      "
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
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
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
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
window.PaginaDeLogin = Castelog.metodos.un_componente_vue2("PaginaDeLogin",
  "<div class=\"PaginaDeLogin Component\">"
 + "    <xtitle>Login</xtitle>"
 + "    <xstatic>"
 + "      <xwindow>"
 + "        <xwindowtitle>"
 + "          Credenciales requeridas"
 + "        </xwindowtitle>"
 + "        <xwindowbody>"
 + "          <xlayout>"
 + "            <xpanel>"
 + "              <xlabel>Nombre:</xlabel>"
 + "              <input style=\"width:100%;\" type=\"text\" name=\"nombre\" v-model=\"nombre\" />"
 + "            </xpanel>"
 + "            <xpanel style=\"padding-top:8px;\">"
 + "              <xlabel>Contraseña:</xlabel>"
 + "              <input style=\"width:100%;\" type=\"password\" name=\"contrasenya\" v-model=\"contrasenya\" />"
 + "            </xpanel>"
 + "          </xlayout>"
 + "          <hr style=\"border:none;border-top:1px solid #CCC;margin:4px;\" />"
 + "          <xlayout style=\"text-align:right;\">"
 + "            <button v-on:click=\"root.login(nombre, contrasenya)\">Entrar</button>"
 + "          </xlayout>"
 + "        </xwindowbody>"
 + "        <xwindowfooter>✔ Cargado correctamente.</xwindowfooter>"
 + "      </xwindow>"
 + "    </xstatic>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
const { nombre, contrasenya
} = this.obtener_credenciales_pasadas(  );
return { nombre,
contrasenya
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ obtener_credenciales_pasadas() {try {
let datos_json = localStorage.__express_boilerplate_login_credentials__;
if((!(typeof datos_json === 'string'))) {
datos_json = '{"nombre":"","contrasenya":""}';
}
const datos = JSON.parse(datos_json);
return datos;
} catch(error) {
console.log(error);
throw error;
}

},
persistir_credenciales( nombre,
contrasenya ) {try {
localStorage.__express_boilerplate_login_credentials__ = JSON.stringify({ nombre,
contrasenya
}, null, 2);
return true;
} catch(error) {
console.log(error);
throw error;
}

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
mounted() {
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
 + "    <template v-if=\"sesion_token\">"
 + "      <router-view :root=\"this\"></router-view>"
 + "    </template>"
 + "    <template v-else=\"\">"
 + "      <PaginaDeLogin :root=\"this\" ref=\"pagina_de_login\"></PaginaDeLogin>"
 + "    </template>"
 + "    <xdialogport></xdialogport>"
 + "  </div>",
  function(component) {return { data() {try {
return { sesion_token:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async login( nombre,
contrasenya ) {try {
const respuesta_login = (await Castelog.metodos.una_peticion_http("/Login", "POST", { nombre,
contrasenya
}, { 
}, null, null));
this.$refs.pagina_de_login.persistir_credenciales( nombre,
contrasenya );
this.sesion_token = respuesta_login.data.data.sesion.token;
} catch(error) {
Vue.prototype.$dialogs.inform( "<xlayout>" + Vue.prototype.$dialogs.escapeHtml( error.name ) + " " + Vue.prototype.$dialogs.escapeHtml( error.message ) + "</xlayout>" );}
}
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