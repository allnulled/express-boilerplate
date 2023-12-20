
window.PaginaDeEsquema = Castelog.metodos.un_componente_vue2("PaginaDeEsquema",
  "<div class=\"Component PaginaDeEsquema\">"
 + "    <xtitle>Esquema</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "      <template v-for=\"table, table_name in root.compacted_schema\">"
 + "        <xpanel style=\"\" v-bind:key=\"'table-' + table_name\">"
 + "          <button class=\"boton_ancho_izquierda boton_verde\" v-on:click=\"() => alternar_mostrar(table.tabla)\">{{ table.tabla }}</button>"
 + "          <xpanel v-if=\"esta_mostrando.indexOf(table.tabla) !== -1\">"
 + "            <template v-for=\"column, column_name in table.composicion\">"
 + "              <xpanel class=\"\" v-bind:key=\"'column-' + table_name + '-' + column_name\" style=\"padding-left:8px;\" v-if=\"column.sentencia === 'columna'\">"
 + "                <button class=\"boton_ancho_izquierda\" v-on:click=\"() => alternar_mostrar(table.tabla + '.' + column.columna)\">{{ column.columna }}</button>"
 + "                <xtableviewer class=\"padding_top_1\" v-if=\"esta_mostrando.indexOf(table.tabla + '.' + column.columna) !== -1\">"
 + "                  <xtable class=\"tabla_de_datos\">"
 + "                    <xtablebody>"
 + "                      <xtablerow>"
 + "                        <xtablecell style=\"width:1%;\">"
 + "                          <span style=\"font-weight:bold;\">Tipo:</span>"
 + "                        </xtablecell>"
 + "                        <xtablecell>"
 + "                          <span>{{ column.tipo }}</span>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                      <xtablerow>"
 + "                        <xtablecell>"
 + "                          <span style=\"font-weight:bold;\">Detalles:</span>"
 + "                        </xtablecell>"
 + "                        <xtablecell>"
 + "                          <span>{{ column.detalles }}</span>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                      <xtablerow>"
 + "                        <xtablecell>"
 + "                          <span style=\"font-weight:bold;\">Atributos:</span>"
 + "                        </xtablecell>"
 + "                        <xtablecell>"
 + "                          <xtableviewer>"
 + "                            <xtable class=\"tabla_de_datos\">"
 + "                              <xtablebody>"
 + "                                <xtablerow v-for=\"attribute, attribute_name in column.atributos\" v-bind:key=\"'atributo-' + table_name + '-' + column_name + '-' + attribute_name\">"
 + "                                  <xtablecell style=\"text-align:right;\">"
 + "                                    <span style=\"font-weight:bold; font-size:10px;\">@{{ attribute_name }}</span>"
 + "                                  </xtablecell>"
 + "                                  <xtablecell>"
 + "                                    <span style=\"font-size:10px;\">{{ attribute }}</span>"
 + "                                  </xtablecell>"
 + "                                </xtablerow>"
 + "                              </xtablebody>"
 + "                            </xtable>"
 + "                          </xtableviewer>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                    </xtablebody>"
 + "                  </xtable>"
 + "                </xtableviewer>"
 + "              </xpanel>"
 + "            </template>"
 + "          </xpanel>"
 + "        </xpanel>"
 + "      </template>"
 + "    </xlayout>"
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