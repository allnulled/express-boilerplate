
window.SelectorDeTabla = Castelog.metodos.un_componente_vue2("SelectorDeTabla",
  "<div>"
 + "    <xpanel>"
 + "      <xtable v-if=\"['uno','varios'].indexOf(modo) !== -1\">"
 + "        <xtablebody>"
 + "          <xtablerow>"
 + "            <xtablecell style=\"width:100%;\">"
 + "              <input style=\"width:100%;\" type=\"text\" v-model=\"selected_ids\" disabled=\"true\" placeholder=\"Aquí aparece el identificador de los seleccionados\" />"
 + "            </xtablecell>"
 + "            <xtablecell style=\"padding-left: 4px;\">"
 + "              <button style=\"min-width:30px;\" :class=\"{active:is_showing_panels}\" v-on:click=\"() => alternar_paneles()\">...</button>"
 + "            </xtablecell>"
 + "          </xtablerow>"
 + "        </xtablebody>"
 + "      </xtable>"
 + "      <xpanel v-if=\"(modo === 'ver') || ((['uno','varios'].indexOf(modo) !== -1) && is_showing_panels)\">"
 + "        <xpanel style=\"padding-left: 4px; padding-right: 4px;margin-top: 4px;background-color: #333; border: 1px solid white;\">"
 + "          <xpanel v-if=\"['uno','varios'].indexOf(modo) !== -1\" style=\"padding-top: 4px;\">"
 + "            <input style=\"width:100%;\" type=\"text\" v-model=\"selected_preferred_columns\" disabled=\"true\" placeholder=\"Aquí aparece la columna preferida de los seleccionados\" />"
 + "          </xpanel>"
 + "          <xlist>"
 + "            <xlistitem>"
 + "              <button class=\"boton_ancho_izquierda boton_verde\" :class=\"{active: is_showing_filtros_panel}\" v-on:click=\"() => {is_showing_filtros_panel = !is_showing_filtros_panel; $forceUpdate(true); }\">"
 + "                <span v-if=\"is_showing_filtros_panel\">Cerrar panel de filtros</span>"
 + "                <span v-else=\"\">Abrir panel de filtros</span>"
 + "                <span class=\"chivato_de_cuenta\">{{ where.length }}</span>"
 + "              </button>"
 + "            </xlistitem>"
 + "            <xlistitem v-if=\"is_showing_filtros_panel\">"
 + "              <xpanel class=\"\">"
 + "                <xpanel class=\"\" style=\"border: 1px solid #CCC; border-radius:2pt; margin-top:1px;\">"
 + "                  <xtable>"
 + "                    <xtablebody>"
 + "                      <xtablerow>"
 + "                        <xtablecell style=\"width:100%;\">"
 + "                          <button class=\"width_100\" v-on:click=\"agregar_regla_de_filtro\">Añadir filtro</button>"
 + "                        </xtablecell>"
 + "                        <xtablecell style=\"width:1%;\">"
 + "                          <button class=\"width_100 boton_verde\" v-on:click=\"obtener_datos_de_tabla\">Buscar</button>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                    </xtablebody>"
 + "                  </xtable>"
 + "                  <xtable style=\"width:100%;\">"
 + "                    <xtablebody v-for=\"where_rule, where_index in where\" v-bind:key=\"'where-' + where_index\">"
 + "                      <xtablerow>"
 + "                        <xtablecell style=\"width:50%;\">"
 + "                          <select v-model=\"where[where_index][0]\" style=\"width:100%;\">"
 + "                            <option v-for=\"column, column_index in root.compacted_schema[tabla].composicion\" v-bind:key=\"'where-' + where_index + '-column-' + column_index\" :value=\"column.columna\">"
 + "                              {{ column.columna }}"
 + "                            </option>"
 + "                          </select>"
 + "                        </xtablecell>"
 + "                        <xtablecell style=\"width:50%;\">"
 + "                          <select v-model=\"where[where_index][1]\" style=\"width:100%;\">"
 + "                            <option v-for=\"operation, operation_index in available_operations\" v-bind:key=\"'where-' + where_index + '-operation-' + operation_index\" :value=\"operation\">"
 + "                              {{ operation }}"
 + "                            </option>"
 + "                          </select>"
 + "                        </xtablecell>"
 + "                        <xtablecell style=\"width:1%;position:relative;\" class=\"celda_de_boton_de_eliminar\" rowspan=\"2\">"
 + "                          <button class=\"boton_rojo\" style=\"min-width:1%;position:absolute;top:0;left:0;right:0;bottom:0;\" v-on:click=\"() => eliminar_regla_de_filtro(where_index)\"> x </button>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                      <xtablerow>"
 + "                        <xtablecell colspan=\"2\">"
 + "                          <input style=\"width:100%;\" type=\"text\" :disabled=\"['IS NULL','IS NOT NULL'].indexOf(where[where_index][1]) !== -1\" v-model=\"where[where_index][2]\" />"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                    </xtablebody>"
 + "                  </xtable>"
 + "                </xpanel>"
 + "              </xpanel>"
 + "            </xlistitem>"
 + "            <xlistitem>"
 + "              <button class=\"boton_ancho_izquierda boton_verde\" :class=\"{active: is_showing_ordenacion_panel}\" v-on:click=\"() => {is_showing_ordenacion_panel = !is_showing_ordenacion_panel; $forceUpdate(true); }\">"
 + "                <span v-if=\"is_showing_ordenacion_panel\">Cerrar panel de orden</span>"
 + "                <span v-else=\"\">Abrir panel de orden</span>"
 + "                <span class=\"chivato_de_cuenta\">{{ order.length }}</span>"
 + "              </button>"
 + "            </xlistitem>"
 + "            <xlistitem v-if=\"is_showing_ordenacion_panel\">"
 + "              <xpanel class=\"\">"
 + "                <xpanel class=\"\" style=\"border: 1px solid #CCC; border-radius:2pt; margin-top:1px;\">"
 + "                  <xtable style=\"width:100%;\">"
 + "                    <xtablebody>"
 + "                      <xtablerow>"
 + "                        <xtablecell colspan=\"100\">"
 + "                          <button class=\"width_100\" v-on:click=\"agregar_regla_de_ordenacion\">Añadir regla</button>"
 + "                        </xtablecell>"
 + "                        <xtablecell style=\"width:1%;\">"
 + "                          <button class=\"width_100 boton_verde\" v-on:click=\"obtener_datos_de_tabla\">Buscar</button>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                    </xtablebody>"
 + "                  </xtable>"
 + "                  <xtable style=\"width:100%;\">"
 + "                    <xtablebody v-for=\"order_rule, order_index in order\" v-bind:key=\"'order-' + order_index\">"
 + "                      <xtablerow>"
 + "                        <xtablecell style=\"width:50%;\">"
 + "                          <select v-model=\"order[order_index][0]\" style=\"width:100%;\">"
 + "                            <option v-for=\"column, column_index in root.compacted_schema[tabla].composicion\" v-bind:key=\"'order-' + order_index + '-column-' + column_index\" :value=\"column.columna\">"
 + "                              {{ column.columna }}"
 + "                            </option>"
 + "                          </select>"
 + "                        </xtablecell>"
 + "                        <xtablecell style=\"width:50%;\">"
 + "                          <select v-model=\"order[order_index][1]\" style=\"width:100%;\">"
 + "                            <option value=\"ASC\">ASC</option>"
 + "                            <option value=\"DESC\">DESC</option>"
 + "                          </select>"
 + "                        </xtablecell>"
 + "                        <xtablecell style=\"width: 1%;position:relative;\" class=\"celda_de_boton_de_eliminar\">"
 + "                          <button class=\"boton_rojo\" style=\"min-width:1%;position:absolute;top:0;left:0;right:0;bottom:0;\" v-on:click=\"() => eliminar_regla_de_ordenacion(order_index)\"> x </button>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                    </xtablebody>"
 + "                  </xtable>"
 + "                </xpanel>"
 + "              </xpanel>"
 + "            </xlistitem>"
 + "            <xlistitem>"
 + "              <button class=\"boton_ancho_izquierda boton_verde\" :class=\"{active: is_showing_busqueda_panel}\" v-on:click=\"() => {is_showing_busqueda_panel = !is_showing_busqueda_panel; $forceUpdate(true); }\">"
 + "                <span v-if=\"is_showing_busqueda_panel\">Cerrar panel de búsqueda</span>"
 + "                <span v-else=\"\">Abrir panel de búsqueda</span>"
 + "                <span class=\"chivato_de_cuenta\">{{ search.length }}</span>"
 + "              </button>"
 + "            </xlistitem>"
 + "            <xlistitem v-if=\"is_showing_busqueda_panel\">"
 + "              <xpanel class=\"\">"
 + "                <xpanel class=\"\" style=\"border: 1px solid #CCC; border-radius:2pt; margin-top:1px;\">"
 + "                  <xtable>"
 + "                    <xtablebody>"
 + "                      <xtablerow>"
 + "                        <xtablecell style=\"width:100%;\">"
 + "                          <input class=\"\" style=\"width:100%;\" type=\"text\" v-model=\"search\" placeholder=\"Busca un texto aquí...\" />"
 + "                        </xtablecell>"
 + "                        <xtablecell>"
 + "                          <button class=\"boton_verde\" v-on:click=\"obtener_datos_de_tabla()\">Buscar</button>"
 + "                        </xtablecell>"
 + "                      </xtablerow>"
 + "                    </xtablebody>"
 + "                  </xtable>"
 + "                </xpanel>"
 + "              </xpanel>"
 + "            </xlistitem>"
 + "          </xlist>"
 + "          <div style=\"text-align:left;\">"
 + "            <xtable>"
 + "              <xtablebody>"
 + "                <xtablerow>"
 + "                  <xtablecell>"
 + "                    <button v-on:click=\"() => {if(page < 2) return; page--;obtener_datos_de_tabla()}\"> « </button>"
 + "                  </xtablecell>"
 + "                  <xtablecell style=\"padding:8px;\">"
 + "                    <xlabel>Página {{ page }}</xlabel>"
 + "                  </xtablecell>"
 + "                  <xtablecell>"
 + "                    <button v-on:click=\"() => {page++;obtener_datos_de_tabla()}\"> » </button>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "              </xtablebody>"
 + "            </xtable>"
 + "          </div>"
 + "          <xtableviewer v-if=\"rows && rows.length\">"
 + "            <xtable class=\"tabla_de_datos\" style=\"width:100%;\">"
 + "              <thead>"
 + "                <tr>"
 + "                  <th v-if=\"modo === 'uno' ||modo === 'varios'\"></th>"
 + "                  <th v-for=\"row_header, row_header_index in row_headers\" :style=\"row_header === 'id' ? 'width:1%;' : ''\" v-bind:key=\"'row-header-' + row_header_index\">"
 + "                    {{ root.humanizar_texto_de_columna($route.params.tabla, row_header) }}"
 + "                  </th>"
 + "                </tr>"
 + "              </thead>"
 + "              <xtablebody>"
 + "                <xtablerow v-for=\"row, row_index in rows\" v-bind:key=\"'row-' + row_index\">"
 + "                  <xtablecell v-if=\"modo === 'uno' || modo === 'varios'\">"
 + "                    <button v-if=\"modo === 'uno'\" v-on:click=\"() => seleccionar_item(row)\">{{ selected_ids.indexOf(row.id) === -1 ? \"+\" : \"-\" }}</button>"
 + "                    <button v-if=\"modo === 'varios'\" v-on:click=\"() => seleccionar_item(row)\">{{ selected_ids.indexOf(row.id) === -1 ? \"+\" : \"-\" }}</button>"
 + "                  </xtablecell>"
 + "                  <xtablecell v-for=\"prop, prop_index in row\" v-bind:key=\"'row-' + row_index + '-cell-' + prop_index\">"
 + "                    <template v-if=\"prop_index === 'id'\">"
 + "                      <button v-if=\"modo === 'ver'\" v-on:click=\"() => {$router.history.push('/abrir-fila/' + tabla + '/' + prop);}\">{{ prop }}</button>"
 + "                      <span v-else=\"\">{{ prop }}</span>"
 + "                    </template>"
 + "                    <template v-else=\"\">"
 + "                      {{ prop }}"
 + "                    </template>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "              </xtablebody>"
 + "            </xtable>"
 + "          </xtableviewer>"
 + "          <div v-else=\"\">"
 + "            <div style=\"min-height: 100px;padding-top: 40px;text-align: center;\">"
 + "              No se encontraron resultados para la búsqueda."
 + "            </div>"
 + "          </div>"
 + "          <div style=\"text-align:right;\">"
 + "            <xtable style=\"display: inline-block;\">"
 + "              <xtablebody>"
 + "                <xtablerow>"
 + "                  <xtablecell>"
 + "                    <button v-on:click=\"() => {if(page < 2) return; page--;obtener_datos_de_tabla()}\"> « </button>"
 + "                  </xtablecell>"
 + "                  <xtablecell style=\"padding:8px;\">"
 + "                    <xlabel>Página {{ page }}</xlabel>"
 + "                  </xtablecell>"
 + "                  <xtablecell>"
 + "                    <button v-on:click=\"() => {page++;obtener_datos_de_tabla()}\"> » </button>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "              </xtablebody>"
 + "            </xtable>"
 + "          </div>"
 + "        </xpanel>"
 + "      </xpanel>"
 + "    </xpanel>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
},
modo:{ type:String,
default:"ver"
},
tabla:{ type:String,
required:true
},
alCambiar:{ type:Function,
default:function() {
}
},
valorInicial:{ type:[ Number,
String ],
default:function() {try {
return undefined;
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
console.log('[DEBUG]', "SelectorDeTabla.data");
return { is_showing_panels:false,
is_showing_filtros_panel:false,
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
selected_items:[  ],
selected_ids:( this.valorInicial ? [ this.valorInicial ] : [  ] ),
selected_preferred_columns:( this.valorInicial ? [ this.valorInicial ] : [  ] ),
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
methods:{ getValue() {try {
console.log('[DEBUG]', "SelectorDeTabla.getValue");
if(this.modo === "uno") {
return this.selected_ids[ 0 ];
}
else if(this.modo === "varios") {
return this.selected_ids;
}
} catch(error) {
console.log(error);
throw error;
}

},
alternar_paneles() {try {
console.log('[DEBUG]', "SelectorDeTabla.alternar_paneles");
this.is_showing_panels = (!(this.is_showing_panels));
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_item( item ) {try {
console.log('[DEBUG]', "SelectorDeTabla.seleccionar_item");
const posicion = this.selected_items.indexOf( item );
const esta_seleccionado = (!(posicion === 0 - 1));
if(esta_seleccionado && this.modo === "uno") {
this.selected_items.splice( item,
1 );
}
else if(esta_seleccionado && this.modo === "varios") {
this.selected_items.splice( item,
1 );
}
else if((!(esta_seleccionado)) && this.modo === "uno") {
this.selected_items = [ item ];
}
else if((!(esta_seleccionado)) && this.modo === "varios") {
this.selected_items.push( item );
}
this.actualizar_items_seleccionados(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
actualizar_items_seleccionados() {try {
console.log('[DEBUG]', "SelectorDeTabla.actualizar_items_seleccionados");
this.selected_ids = this.selected_items.map( ( item_seleccionado ) => {try {
return item_seleccionado.id;
} catch(error) {
console.log(error);
throw error;
}

} );
const columna_preferida = this.root.compacted_schema[ this.tabla ].atributos.tiene_columna_preferida || "id";
this.selected_preferred_columns = this.selected_items.map( ( item_seleccionado ) => {try {
return item_seleccionado[ columna_preferida ];
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_regla_de_filtro() {try {
console.log('[DEBUG]', "SelectorDeTabla.agregar_regla_de_filtro");
this.where.push( [  ] );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
agregar_regla_de_ordenacion() {try {
console.log('[DEBUG]', "SelectorDeTabla.agregar_regla_de_ordenacion");
this.order.push( [  ] );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_regla_de_filtro( indice ) {try {
console.log('[DEBUG]', "SelectorDeTabla.eliminar_regla_de_filtro");
this.where.splice( indice,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
eliminar_regla_de_ordenacion( indice ) {try {
console.log('[DEBUG]', "SelectorDeTabla.eliminar_regla_de_ordenacion");
this.order.splice( indice,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_datos_de_tabla() {try {
console.log('[DEBUG]', "SelectorDeTabla.obtener_datos_de_tabla");
const respuesta_datos_de_tabla = (await Castelog.metodos.una_peticion_http("/Select", "POST", { table:this.tabla,
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
console.log('[DEBUG]', "SelectorDeTabla.watch.rows");
if(nuevo_valor && nuevo_valor.length) {
this.row_headers = Object.keys(nuevo_valor[ 0 ]);
}
} catch(error) {
console.log(error);
throw error;
}

},
selected_ids( nuevo_valor ) {try {
console.log('[DEBUG]', "SelectorDeTabla.watch.selected_ids");
if(this.modo === "uno") {
this.alCambiar( nuevo_valor[ 0 ],
this );
}
else if(this.modo === "varios") {
this.alCambiar( nuevo_valor,
this );
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
console.log('[DEBUG]', "SelectorDeTabla.mounted");
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