
window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <xtitle>Inicio</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/administracion\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">"
 + "              Ir al panel de administración"
 + "            </button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link to=\"/ayuda\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">"
 + "              Ir a la guía de ayuda"
 + "            </button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link to=\"/esquema\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">"
 + "              Ir a esquema"
 + "            </button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeInicio.data");
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