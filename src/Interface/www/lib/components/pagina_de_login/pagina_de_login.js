
window.PaginaDeLogin = Castelog.metodos.un_componente_vue2("PaginaDeLogin",
  "<div class=\"PaginaDeLogin Component\">"
 + "    <xtitle>Entrar al sistema</xtitle>"
 + "    <xlayout style=\"text-align:center;\">"
 + "      <xwindow style=\"display:inline-block; width:100%; max-width:200px; text-align:left;\">"
 + "        <xwindowtitle>Credenciales necesarias</xwindowtitle>"
 + "        <xwindowbody>"
 + "          <xlayoutnopaddingtop>"
 + "            <div style=\"padding-top:12px;\">"
 + "              <xlabel>Usuario:</xlabel>"
 + "              <input style=\"width:100%;min-width:auto;\" type=\"text\" name=\"user\" v-model=\"usuario\" />"
 + "            </div>"
 + "            <div style=\"padding-top:12px;\">"
 + "              <xlabel>Contraseña:</xlabel>"
 + "              <input style=\"width:100%;min-width:auto;\" type=\"text\" name=\"password\" v-model=\"contrasenya\" />"
 + "            </div>"
 + "          </xlayoutnopaddingtop>"
 + "          <hr />"
 + "          <xpanel style=\"text-align:center; padding:4px;\">"
 + "            <button v-on:click=\"login\">Entrar</button>"
 + "          </xpanel>"
 + "        </xwindowbody>"
 + "        <xwindowfooter>"
 + "          <xwindowfooteritem v-if=\"!error\">✔ Cargado correctamente.</xwindowfooteritem>"
 + "          <xwindowfooteritem v-else=\"\">✘ {{ error.name }}: {{ error.message }}.</xwindowfooteritem>"
 + "        </xwindowfooter>"
 + "      </xwindow>"
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { usuario:"",
contrasenya:"",
error:undefined,
error_timeout:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ gestionar_error( error ) {try {
this.error = error;
this.$forceUpdate( true );
clearTimeout( this.error_timeout );
this.error_timeout = setTimeout( () => {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 3 );
} catch(error) {
console.log(error);
throw error;
}

},
async login() {try {
const nombre = this.usuario;
const contrasenya = this.contrasenya;
const respuesta = (await Castelog.metodos.una_peticion_http("/Login", "POST", { nombre,
contrasenya
}, { 
}, null, error => {
this.gestionar_error( error );}));
if(typeof respuesta === 'undefined') {
return;
}
this.root.sesion_token = respuesta.data.data.sesion.token;
} catch(error) {
this.gestionar_error( error );}
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