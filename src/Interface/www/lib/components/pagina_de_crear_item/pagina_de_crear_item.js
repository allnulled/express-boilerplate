
window.PaginaDeCrearItem = Castelog.metodos.un_componente_vue2("PaginaDeCrearItem",
  "<div class=\"Component PaginaDeCrearItem\">"
 + "    <xtitle>Crear ítem «{{ $route.params.tabla }}»</xtitle>"
 + "    <xlayout>"
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
 + "          <router-link :to=\"'/abrir-tabla/' + $route.params.tabla\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a abrir tabla «{{ $route.params.tabla }}»</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "    <xlayoutnopaddingtop>"
 + "      <template v-for=\"field, field_index in fields\">"
 + "        <xpanel v-bind:key=\"'field-' + field_index\" v-if=\"field.columna !== 'id' && field.sentencia === 'columna'\">"
 + "          <xpanel style=\"padding-top:12px;\" v-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].atributos.es_tipo !== 'fichero'\">{{ root.humanizar_texto_de_columna($route.params.tabla, field.columna) }}:</xpanel>"
 + "          <xpanel v-if=\"false\">"
 + "            --- Input rendering ---"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].atributos.es_tipo === 'color'\">"
 + "            <input :ref=\"'color_' + field_index\" style=\"display:none;width:100%;\" type=\"color\" v-model=\"item[field.columna]\" />"
 + "            <button class=\"width_100\" v-on:click=\"() => {$refs['color_' + field_index][0].click() }\">"
 + "              <span style=\"min-height:15px;min-width:30px;width:50%;display:inline-block;border-radius:4pt;\" :style=\"'background-color:' + (item[field.columna] || '#333')\">"
 + "                {{ item[field.columna] }}"
 + "              </span>"
 + "            </button>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].atributos.es_tipo === 'fichero'\" style=\"display:none;\">"
 + "            <xtable>"
 + "              <xtablebody>"
 + "                <xtablerow>"
 + "                  <xtablecell>"
 + "                    <button class=\"width_100\" style=\"white-space: nowrap;\" v-on:click=\"() => {$refs['file_' + field_index][0].click() }\">"
 + "                      Seleccionar"
 + "                    </button>"
 + "                  </xtablecell>"
 + "                  <xtablecell>"
 + "                    <button class=\"width_100\" v-on:click=\"() => { guardar_fichero(field.columna) }\">"
 + "                      Guardar"
 + "                    </button>"
 + "                  </xtablecell>"
 + "                  <xtablecell class=\"width_100\">"
 + "                    Hay {{ item[field.columna] ? item[field.columna].length : '0' }} ficheros seleccionados"
 + "                    <input :ref=\"'file_' + field_index\" style=\"display:none;width:100%;\" type=\"file\" v-on:change=\"event => { root.$window.console.log(event.target.files); item[field.columna] = event.target.files }\" />"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "                <xtablerow v-if=\"item[field.columna]\">"
 + "                  <xtablecell colspan=\"100\">"
 + "                    <template v-for=\"fichero, fichero_index in item[field.columna]\">"
 + "                      <xpanel v-bind:key=\"'column_' + field.columna + '_file_' + fichero_index\">"
 + "                        <div>Fichero: {{ fichero_index+1 }} de {{ item[field.columna].length }}</div>"
 + "                        <div>Nombre: {{ fichero.name }}</div>"
 + "                        <div>Tamaño: {{ fichero.size }}B</div>"
 + "                      </xpanel>"
 + "                    </template>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "              </xtablebody>"
 + "            </xtable>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"typeof root.compacted_schema[ $route.params.tabla ].composicion[field.columna].es_clave_foranea !== 'undefined'\">"
 + "            <SelectorDeTabla :root=\"root\" modo=\"uno\" :tabla=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].es_clave_foranea.tabla_foranea\" :al-cambiar=\"v => item[field.columna] = v\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].tipo === 'VARCHAR'\">"
 + "            <input style=\"width:100%;\" type=\"text\" v-model=\"item[field.columna]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].tipo === 'INTEGER'\">"
 + "            <input style=\"width:100%;\" type=\"number\" v-model=\"item[field.columna]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].tipo === 'FLOAT'\">"
 + "            <input style=\"width:100%;\" type=\"number\" v-model=\"item[field.columna]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].tipo === 'TEXT'\">"
 + "            <textarea style=\"width:100%;min-height:80px;resize:vertical;\" v-model=\"item[field.columna]\"></textarea>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].tipo === 'DATETIME'\">"
 + "            <VuejsCalendario modo=\"datetime\" :al-cambiar=\"v => item[field.columna] = v\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"false\">"
 + "            --- END OF Input rendering ---"
 + "          </xpanel>"
 + "        </xpanel>"
 + "      </template>"
 + "    </xlayoutnopaddingtop>"
 + "    <xseparator/>"
 + "    <xlayout>"
 + "      <button class=\"boton_verde\" style=\"width:100%;\" v-on:click=\"crear_item\">Crear ítem «{{ $route.params.tabla }}»</button>"
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.data");
return { fields:[  ],
item:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async crear_item() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.crear_item");
const item = this.item;
const respuesta_crear_item = (await Castelog.metodos.una_peticion_http("/Insert", "POST", { table:this.$route.params.tabla,
item
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_crear_item instanceof Error) {
return;
}
this.$router.history.push( "/abrir-item/" + this.$route.params.tabla + "/" + respuesta_crear_item.data.data.id );
} catch(error) {
console.log(error);
throw error;
}

},
async guardar_fichero() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.guardar_fichero");
console.log("Nada que hace aquí");
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
async mounted() {try {
console.log('[DEBUG]', "PaginaDeCrearItem.mounted");
this.fields = ( Object.values(this.root.compacted_schema[ this.$route.params.tabla ].composicion) ).filter( ( columna ) => {try {
return (!(columna.columna.startsWith( "$" )));
} catch(error) {
console.log(error);
throw error;
}

} );
this.item = this.fields.reduce( ( salida,
field ) => {try {
if(field.columna.startsWith( "$" )) {
return salida;
}
if(field.columna === "id") {
return salida;
}
salida[ field.columna ] = "";
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
{ 
} );
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