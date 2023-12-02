
window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <xtitle>Inicio de aplicación</xtitle>"
 + "    <xlayout>"
 + "      <xwindow>"
 + "        <xwindowtitle>Ventana de inicio</xwindowtitle>"
 + "        <xwindowbody>"
 + "          <xlayout>"
 + "            Alguna cosa por poner."
 + "          </xlayout>"
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
return { error:undefined,
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