
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
 + "            <button class=\"boton_azul\" v-on:click=\"root.login(nombre, contrasenya)\">Entrar</button>"
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
console.log('[DEBUG]', "PaginaDeLogin.data");
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
console.log('[DEBUG]', "PaginaDeLogin.obtener_credenciales_pasadas");
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
console.log('[DEBUG]', "PaginaDeLogin.persistir_credenciales");
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