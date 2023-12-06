
window.PaginaDeAbrirTabla = Castelog.metodos.un_componente_vue2("PaginaDeAbrirTabla",
  "<div class=\"Component PaginaDeAbrirTabla\">"
 + "    <xtitle>Abrir tabla «{{ $route.params.tabla }}»</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link to=\"/administracion\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir al panel de administración</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link :to=\"'/crear-item/' + $route.params.tabla\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a crear ítem «{{ $route.params.tabla }}»</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <button class=\"boton_ancho_izquierda boton_verde\" :class=\"{active: is_showing_filtros_panel}\" v-on:click=\"() => {is_showing_filtros_panel = !is_showing_filtros_panel; $forceUpdate(true); }\">"
 + "            <span v-if=\"is_showing_filtros_panel\">Cerrar panel de filtros</span>"
 + "            <span v-else=\"\">Abrir panel de filtros</span>"
 + "            <span class=\"chivato_de_cuenta\">{{ where.length }}</span>"
 + "          </button>"
 + "        </xlistitem>"
 + "        <xlistitem v-if=\"is_showing_filtros_panel\">"
 + "          <xpanel class=\"\">"
 + "            <xpanel class=\"\" style=\"border: 1px solid #CCC; border-radius:2pt; margin-top:1px;\">"
 + "              <xtable>"
 + "                <xtablebody>"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:100%;\">"
 + "                      <button class=\"width_100\" v-on:click=\"agregar_regla_de_filtro\">Añadir filtro</button>"
 + "                    </xtablecell>"
 + "                    <xtablecell style=\"width:1%;\">"
 + "                      <button class=\"width_100 boton_verde\" v-on:click=\"obtener_datos_de_tabla\">Buscar</button>"
 + "                    </xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "              <xtable style=\"width:100%;\">"
 + "                <xtablebody v-for=\"where_rule, where_index in where\" v-bind:key=\"'where-' + where_index\">"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:50%;\">"
 + "                      <select v-model=\"where[where_index][0]\" style=\"width:100%;\">"
 + "                        <option v-for=\"column, column_index in root.compacted_schema[$route.params.tabla].composicion\" v-bind:key=\"'where-' + where_index + '-column-' + column_index\" :value=\"column.columna\">"
 + "                          {{ column.columna }}"
 + "                        </option>"
 + "                      </select>"
 + "                    </xtablecell>"
 + "                    <xtablecell style=\"width:50%;\">"
 + "                      <select v-model=\"where[where_index][1]\" style=\"width:100%;\">"
 + "                        <option v-for=\"operation, operation_index in available_operations\" v-bind:key=\"'where-' + where_index + '-operation-' + operation_index\" :value=\"operation\">"
 + "                          {{ operation }}"
 + "                        </option>"
 + "                      </select>"
 + "                    </xtablecell>"
 + "                    <xtablecell style=\"width:1%;\" rowspan=\"2\">"
 + "                      <button class=\"boton_rojo\" style=\"min-width:1%;\" v-on:click=\"() => eliminar_regla_de_filtro(where_index)\"> x </button>"
 + "                    </xtablecell>"
 + "                  </xtablerow>"
 + "                  <xtablerow>"
 + "                    <xtablecell colspan=\"2\">"
 + "                      <input style=\"width:100%;\" type=\"text\" :disabled=\"['IS NULL','IS NOT NULL'].indexOf(where[where_index][1]) !== -1\" v-model=\"where[where_index][2]\" />"
 + "                    </xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "            </xpanel>"
 + "          </xpanel>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <button class=\"boton_ancho_izquierda boton_verde\" :class=\"{active: is_showing_ordenacion_panel}\" v-on:click=\"() => {is_showing_ordenacion_panel = !is_showing_ordenacion_panel; $forceUpdate(true); }\">"
 + "            <span v-if=\"is_showing_ordenacion_panel\">Cerrar panel de orden</span>"
 + "            <span v-else=\"\">Abrir panel de orden</span>"
 + "            <span class=\"chivato_de_cuenta\">{{ order.length }}</span>"
 + "          </button>"
 + "        </xlistitem>"
 + "        <xlistitem v-if=\"is_showing_ordenacion_panel\">"
 + "          <xpanel class=\"\">"
 + "            <xpanel class=\"\" style=\"border: 1px solid #CCC; border-radius:2pt; margin-top:1px;\">"
 + "              <xtable style=\"width:100%;\">"
 + "                <xtablebody>"
 + "                  <xtablerow>"
 + "                    <xtablecell colspan=\"100\">"
 + "                      <button class=\"width_100\" v-on:click=\"agregar_regla_de_ordenacion\">Añadir regla</button>"
 + "                    </xtablecell>"
 + "                    <xtablecell style=\"width:1%;\">"
 + "                      <button class=\"width_100 boton_verde\" v-on:click=\"obtener_datos_de_tabla\">Buscar</button>"
 + "                    </xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "              <xtable style=\"width:100%;\">"
 + "                <xtablebody v-for=\"order_rule, order_index in order\" v-bind:key=\"'order-' + order_index\">"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:50%;\">"
 + "                      <select v-model=\"order[order_index][0]\" style=\"width:100%;\">"
 + "                        <option v-for=\"column, column_index in root.compacted_schema[$route.params.tabla].composicion\" v-bind:key=\"'order-' + order_index + '-column-' + column_index\" :value=\"column.columna\">"
 + "                          {{ column.columna }}"
 + "                        </option>"
 + "                      </select>"
 + "                    </xtablecell>"
 + "                    <xtablecell style=\"width:50%;\">"
 + "                      <select v-model=\"order[order_index][1]\" style=\"width:100%;\">"
 + "                        <option value=\"ASC\">ASC</option>"
 + "                        <option value=\"DESC\">DESC</option>"
 + "                      </select>"
 + "                    </xtablecell>"
 + "                    <xtablecell style=\"width:50%;\">"
 + "                      <button class=\"boton_rojo\" style=\"min-width:1%;\" v-on:click=\"() => eliminar_regla_de_ordenacion(order_index)\"> x </button>"
 + "                    </xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "            </xpanel>"
 + "          </xpanel>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <button class=\"boton_ancho_izquierda boton_verde\" :class=\"{active: is_showing_busqueda_panel}\" v-on:click=\"() => {is_showing_busqueda_panel = !is_showing_busqueda_panel; $forceUpdate(true); }\">"
 + "            <span v-if=\"is_showing_busqueda_panel\">Cerrar panel de búsqueda</span>"
 + "            <span v-else=\"\">Abrir panel de búsqueda</span>"
 + "            <span class=\"chivato_de_cuenta\">{{ search.length }}</span>"
 + "          </button>"
 + "        </xlistitem>"
 + "        <xlistitem v-if=\"is_showing_busqueda_panel\">"
 + "          <xpanel class=\"\">"
 + "            <xpanel class=\"\" style=\"border: 1px solid #CCC; border-radius:2pt; margin-top:1px;\">"
 + "              <xtable>"
 + "                <xtablebody>"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:100%;\">"
 + "                      <input class=\"\" style=\"width:100%;\" type=\"text\" v-model=\"search\" placeholder=\"Busca un texto aquí...\" />"
 + "                    </xtablecell>"
 + "                    <xtablecell>"
 + "                      <button class=\"boton_verde\" v-on:click=\"obtener_datos_de_tabla()\">Buscar</button>"
 + "                    </xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "            </xpanel>"
 + "          </xpanel>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "    <xlayoutnopaddingtop>"
 + "      <div style=\"text-align:left;\">"
 + "        <xtable>"
 + "          <xtablebody>"
 + "            <xtablerow>"
 + "              <xtablecell>"
 + "                <button v-on:click=\"() => {if(page < 2) return; page--;obtener_datos_de_tabla()}\"> « </button>"
 + "              </xtablecell>"
 + "              <xtablecell style=\"padding:8px;\">"
 + "                <xlabel>Página {{ page }}</xlabel>"
 + "              </xtablecell>"
 + "              <xtablecell>"
 + "                <button v-on:click=\"() => {page++;obtener_datos_de_tabla()}\"> » </button>"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "          </xtablebody>"
 + "        </xtable>"
 + "      </div>"
 + "      <xpanel style=\"overflow: scroll;\" v-if=\"rows && rows.length\">"
 + "        <xtable class=\"tabla_de_datos\" style=\"width:100%;\">"
 + "          <thead>"
 + "            <tr>"
 + "              <th v-for=\"row_header, row_header_index in row_headers\" :style=\"row_header === 'id' ? 'width:1%;' : ''\" v-bind:key=\"'row-header-' + row_header_index\">"
 + "                {{ row_header }}"
 + "              </th>"
 + "            </tr>"
 + "          </thead>"
 + "          <xtablebody>"
 + "            <xtablerow v-for=\"row, row_index in rows\" v-bind:key=\"'row-' + row_index\">"
 + "              <xtablecell v-for=\"prop, prop_index in row\" v-bind:key=\"'row-' + row_index + '-cell-' + prop_index\">"
 + "                <template v-if=\"prop_index === 'id'\">"
 + "                  <button v-on:click=\"() => {$router.history.push('/abrir-fila/' + $route.params.tabla + '/' + prop);}\">{{ prop }}</button>"
 + "                </template>"
 + "                <template v-else=\"\">"
 + "                  {{ prop }}"
 + "                </template>"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "          </xtablebody>"
 + "        </xtable>"
 + "      </xpanel>"
 + "      <div v-else=\"\">"
 + "        <div style=\"min-height: 100px;padding-top: 40px;text-align: center;\">"
 + "          No se encontraron resultados para la búsqueda."
 + "        </div>"
 + "      </div>"
 + "      <div style=\"text-align:right;\">"
 + "        <xtable style=\"display: inline-block;\">"
 + "          <xtablebody>"
 + "            <xtablerow>"
 + "              <xtablecell>"
 + "                <button v-on:click=\"() => {if(page < 2) return; page--;obtener_datos_de_tabla()}\"> « </button>"
 + "              </xtablecell>"
 + "              <xtablecell style=\"padding:8px;\">"
 + "                <xlabel>Página {{ page }}</xlabel>"
 + "              </xtablecell>"
 + "              <xtablecell>"
 + "                <button v-on:click=\"() => {page++;obtener_datos_de_tabla()}\"> » </button>"
 + "              </xtablecell>"
 + "            </xtablerow>"
 + "          </xtablebody>"
 + "        </xtable>"
 + "      </div>"
 + "    </xlayoutnopaddingtop>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeAbrirTabla.data");
return { is_showing_filtros_panel:false,
is_showing_ordenacion_panel:false,
is_showing_busqueda_panel:false,
available_operations:[ "=",
"!=",
"<",
"<=",
">",
">=",
"IS NULL",
"IS NOT NULL",
"IN",
"NOT IN",
"LIKE",
"NOT LIKE" ],
rows:[  ],
row_headers:[  ],
where:[  ],
order:[  ],
search:"",
page:1,
items:20
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ agregar_regla_de_filtro() {try {
this.where.push( [  ] );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_regla_de_ordenacion() {try {
this.order.push( [  ] );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_regla_de_filtro( indice ) {try {
this.where.splice( indice,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_regla_de_ordenacion( indice ) {try {
this.order.splice( indice,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_datos_de_tabla() {try {
console.log('[DEBUG]', "PaginaDeAbrirTabla.obtener_datos_de_tabla");
const respuesta_datos_de_tabla = (await Castelog.metodos.una_peticion_http("/Select", "POST", { table:this.$route.params.tabla,
where:this.where,
order:this.order,
page:this.page,
items:this.items,
search:this.search
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_datos_de_tabla instanceof Error) {
return;
}
this.rows = respuesta_datos_de_tabla.data.data.output;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ rows( nuevo_valor ) {try {
console.log('[DEBUG]', "PaginaDeAbrirTabla.watch.rows");
if(nuevo_valor && nuevo_valor.length) {
this.row_headers = Object.keys(nuevo_valor[ 0 ]);
}
} catch(error) {
console.log(error);
throw error;
}

}
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
async mounted() {try {
console.log('[DEBUG]', "PaginaDeAbrirTabla.mounted");
(await this.obtener_datos_de_tabla(  ));
} catch(error) {
console.log(error);
throw error;
}

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