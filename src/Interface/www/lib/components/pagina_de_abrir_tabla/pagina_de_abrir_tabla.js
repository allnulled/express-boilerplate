
window.PaginaDeAbrirTabla = Castelog.metodos.un_componente_vue2("PaginaDeAbrirTabla",
  "<div class=\"Component PaginaDeAbrirTabla\">"
 + "    <xtitle>Tabla «{{ $route.params.tabla }}»</xtitle>"
 + "    <xlayoutnopaddingbottom>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link to=\"/administracion\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a panel de administración</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link :to=\"'/crear-item/' + $route.params.tabla\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a crear ítem «{{ $route.params.tabla }}»</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayoutnopaddingbottom>"
 + "    <SelectorDeTabla :root=\"root\" :tabla=\"$route.params.tabla\" modo=\"ver\" />"
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