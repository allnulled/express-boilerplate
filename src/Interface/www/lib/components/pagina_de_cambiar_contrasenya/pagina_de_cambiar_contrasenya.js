
window.PaginaDeCambiarContrasenya = Castelog.metodos.un_componente_vue2("PaginaDeCambiarContrasenya",
  "<div class=\"Component PaginaDeCambiarContrasenya\">"
 + "    <xtitle>Cambiar contraseña</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link to=\"/autentificacion\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a autentificación</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "    <xlayoutnopaddingtop>"
 + "      <xform>"
 + "        <xformfield placeholder=\"Tu contraseña actual aquí\" :on-change=\"v => old_password = v\">Vieja contraseña:</xformfield>"
 + "        <xformfield placeholder=\"Tu futura contraseña aquí\" :on-change=\"v => new_password = v\">Nueva contraseña:</xformfield>"
 + "        <xformfield placeholder=\"Tu futura contraseña aquí\" :on-change=\"v => new_password_2 = v\">Nueva contraseña (otra vez):</xformfield>"
 + "        <xseparator></xseparator>"
 + "        <xpanel style=\"text-align:right;\">"
 + "          <button v-on:click=\"cambiar_contrasenya\">Cambiar contraseña</button>"
 + "        </xpanel>"
 + "      </xform>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { old_password:"",
new_password:"",
new_password_2:""
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async cambiar_contrasenya() {try {
const respuesta_cambio_contrasenya = (await Castelog.metodos.una_peticion_http("/ChangePassword", "POST", { old_password:this.old_password,
new_password:this.new_password,
new_password_2:this.new_password_2
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_cambio_contrasenya instanceof Error) {
return;
}
(await Vue.prototype.$dialogs.inform( "La contraseña fue cambiada correctamente." ));
this.$router.history.push( "/autentificacion" );
} catch(error) {
Vue.prototype.$dialogs.error( error );}
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