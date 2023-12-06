
window.PaginaDeEsquema = Castelog.metodos.un_componente_vue2("PaginaDeEsquema",
  "<div class=\"Component PaginaDeEsquema\">"
 + "    <xtitle>Crear ítem «{{ $route.params.tabla }}»</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "    <xlayoutnopaddingtop>"
 + "      <template v-for=\"table, table_name in root.compacted_schema\">"
 + "        <xpanel style=\"\" v-bind:key=\"'table-' + table_name\">"
 + "          <button class=\"boton_ancho_izquierda boton_verde\" v-on:click=\"() => alternar_mostrar(table.tabla)\">{{ table.tabla }}</button>"
 + "          <xpanel v-if=\"esta_mostrando.indexOf(table.tabla) !== -1\">"
 + "            <template v-for=\"column, column_name in table.composicion\">"
 + "              <xpanel style=\"\" v-bind:key=\"'column-' + table_name + '-' + column_name\" style=\"padding-left:8px;\" v-if=\"column.sentencia === 'columna'\">"
 + "                <button class=\"boton_ancho_izquierda\" v-on:click=\"() => alternar_mostrar(table.tabla + '.' + column.columna)\">{{ column.columna }}</button>"
 + "                <xlayout v-if=\"esta_mostrando.indexOf(table.tabla + '.' + column.columna) !== -1\">"
 + "                  <xpanel><span style=\"font-weight:bold;\">Tipo:</span> {{ column.tipo }}</xpanel>"
 + "                  <xpanel><span style=\"font-weight:bold;\">Detalles:</span> {{ column.detalles }}</xpanel>"
 + "                  <xpanel><span style=\"font-weight:bold;\">Atributos:</span> </xpanel>"
 + "                  <template v-for=\"attribute, attribute_name in column.atributos\">"
 + "                    <xpanel v-bind:key=\"'atributo-' + table_name + '-' + column_name + '-' + attribute_name\">"
 + "                      <span style=\"font-weight:bold;\">- {{ attribute_name }}:</span> <span>{{ attribute }}</span>"
 + "                    </xpanel>"
 + "                  </template>"
 + "                </xlayout>"
 + "              </xpanel>"
 + "            </template>"
 + "          </xpanel>"
 + "        </xpanel>"
 + "      </template>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeEsquema.data");
return { esta_mostrando:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async alternar_mostrar( item ) {try {
console.log('[DEBUG]', "PaginaDeEsquema.alternar_mostrar");
const posicion = this.esta_mostrando.indexOf( item );
if(posicion === 0 - 1) {
this.esta_mostrando.push( item );
}
else {
this.esta_mostrando.splice( posicion,
1 );
}
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
async mounted() {
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