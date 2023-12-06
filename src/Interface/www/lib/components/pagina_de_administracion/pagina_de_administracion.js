
window.PaginaDeAdministracion = Castelog.metodos.un_componente_vue2("PaginaDeAdministracion",
  "<div class=\"Component PaginaDeAdministracion\">"
 + "    <xtitle>Panel de administración</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem v-for=\"table, table_index in root.compacted_schema\" v-bind:key=\"'schema-table-' + table_index\">"
 + "          <router-link :to=\"'/abrir-tabla/' + table.tabla\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Abrir tabla «{{ table.tabla }}»</button>"
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
console.log('[DEBUG]', "PaginaDeAdministracion.data");
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