
window.PaginaDeAbrirItem = Castelog.metodos.un_componente_vue2("PaginaDeAbrirItem",
  "<div class=\"Component PaginaDeAbrirItem\">"
 + "    <xtitle>Abrir fila de «{{ $route.params.tabla }}» con id «{{ $route.params.fila }}»</xtitle>"
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
 + "      <template v-for=\"value, key in item\">"
 + "        <xpanel style=\"padding-top:12px;\" v-bind:key=\"'item-' + key\" v-if=\"key !== 'id' && !key.startsWith('$')\">"
 + "          <xpanel style=\"\">{{ root.humanizar_texto_de_columna($route.params.tabla, key) }}:</xpanel>"
 + "          <xpanel v-if=\"false\">"
 + "            --- Input rendering ---"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].atributos.es_tipo === 'color'\">"
 + "            <input :ref=\"'color_' + $route.params.tabla\" style=\"display:none;width:100%;\" type=\"color\" v-model=\"item[key]\" />"
 + "            <button class=\"width_100\" v-on:click=\"() => {$refs['color_' + $route.params.tabla][0].click() }\">"
 + "              <span style=\"min-height:15px;min-width:30px;width:50%;display:inline-block;border-radius:4pt;\" :style=\"'background-color:' + (item[key] || '#333')\">"
 + "                {{ item[key] }}"
 + "              </span>"
 + "            </button>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].atributos.es_tipo === 'fichero'\">"
 + "            <input :ref=\"'file_' + key\" style=\"display:none;width:100%;\" type=\"file\" v-on:change=\"event => { root.$window.console.log(event.target.files); item[key] = event.target.files }\" />"
 + "            <xtable>"
 + "              <xtablebody>"
 + "                <xtablerow>"
 + "                  <xtablecell class=\"width_100\">"
 + "                    <button class=\"width_100\" style=\"white-space: nowrap;\" v-on:click=\"() => {$refs['file_' + key][0].click() }\">"
 + "                      Seleccionar"
 + "                    </button>"
 + "                  </xtablecell>"
 + "                  <xtablecell>"
 + "                    <button class=\"width_100\" style=\"white-space: nowrap;\" v-on:click=\"() => { guardar_fichero(key) }\">"
 + "                      Guardar"
 + "                    </button>"
 + "                  </xtablecell>"
 + "                  <xtablecell>"
 + "                    <button class=\"width_100\" style=\"white-space: nowrap;\" v-on:click=\"() => { refrescar_fichero(key) }\">"
 + "                      Refrescar"
 + "                    </button>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "                <xtablerow>"
 + "                  <xtablecell colspan=\"100\" class=\"width_100\" v-if=\"item[key] && typeof(item[key]) !== 'string' && item[key].length\">"
 + "                    <xpill style=\"white-space: nowrap;\">Hay {{ item[key] ? item[key].length : '0' }} ficheros seleccionados</xpill>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "                <xtablerow v-if=\"typeof item[key] === 'string'\">"
 + "                  <xtablecell colspan=\"100\">"
 + "                    <div style=\"text-align: center;\">"
 + "                      <img class=\"imagen_de_fichero\" :src=\"'/uploads/' + item[key]\" />"
 + "                    </div>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "                <xtablerow v-if=\"item[key]\">"
 + "                  <xtablecell colspan=\"100\">"
 + "                    <template v-if=\"Array.isArray(item[key])\" v-for=\"fichero, fichero_index in item[key]\">"
 + "                      <xpanel v-bind:key=\"'column_' + key + '_file_' + fichero_index\">"
 + "                        <div>Fichero: {{ fichero_index+1 }} de {{ item[key].length }}</div>"
 + "                        <div>Nombre: {{ fichero.name }}</div>"
 + "                        <div>Tamaño: {{ fichero.size }}B</div>"
 + "                      </xpanel>"
 + "                    </template>"
 + "                    <template v-if=\"typeof(item[key]) === 'string'\">"
 + "                      <xpanel>"
 + "                        <div>{{item[key]}}</div>"
 + "                      </xpanel>"
 + "                    </template>"
 + "                  </xtablecell>"
 + "                </xtablerow>"
 + "              </xtablebody>"
 + "            </xtable>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"typeof root.compacted_schema[ $route.params.tabla ].composicion[key].es_clave_foranea !== 'undefined'\">"
 + "            <SelectorDeTabla :root=\"root\" modo=\"uno\" :tabla=\"root.compacted_schema[ $route.params.tabla ].composicion[key].es_clave_foranea.tabla_foranea\" :al-cambiar=\"v => item[key] = v\" :valor-inicial=\"item[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'VARCHAR'\">"
 + "            <input style=\"width:100%;\" type=\"text\" v-model=\"item[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'INTEGER'\">"
 + "            <input style=\"width:100%;\" type=\"number\" v-model=\"item[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'FLOAT'\">"
 + "            <input style=\"width:100%;\" type=\"number\" v-model=\"item[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'TEXT'\">"
 + "            <textarea style=\"width:100%;min-height:80px;resize:vertical;\" v-model=\"item[key]\"></textarea>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'DATETIME'\">"
 + "            <VuejsCalendario modo=\"datetime\" :al-cambiar=\"v => item[key] = v\" :valor-inicial=\"adaptar_fecha(item[key])\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"false\">"
 + "            --- END OF Input rendering ---"
 + "          </xpanel>"
 + "        </xpanel>"
 + "      </template>"
 + "    </xlayoutnopaddingtop>"
 + "    <xseparator/>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <button class=\"boton_ancho_centro boton_verde\" v-on:click=\"guardar_item\">Guardar ítem «{{ $route.params.tabla }}»</button>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <button class=\"boton_ancho_centro boton_rojo\" v-on:click=\"eliminar_item\">Eliminar ítem «{{ $route.params.tabla }}»</button>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { item:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ adaptar_fecha( fecha ) {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.adaptar_fecha");
console.log("ADAPTAR_FECHAAAAAAAAAAAAAAA");
console.log(fecha);
const entorno_de_datos = this.root.environment.DATABASE_DRIVER;
let fecha_adaptada = fecha;
if(entorno_de_datos === "mysql") {
fecha_adaptada = fecha.replace( "T",
" " ).replace( "Z",
"" );
}
console.log(fecha_adaptada);
return fecha_adaptada;
} catch(error) {
console.log(error);
throw error;
}

},
async obtener_datos_de_fila() {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.obtener_datos_de_fila");
this.item = false;
const respuesta_datos_de_fila = (await Castelog.metodos.una_peticion_http("/Select", "POST", { table:this.$route.params.tabla,
where:[ [ "id",
"=",
this.$route.params.fila ] ]
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_datos_de_fila instanceof Error) {
return;
}
if(respuesta_datos_de_fila.data.data.output.length === 0) {
return this.$router.history.push( "/abrir-tabla/" + this.$route.params.tabla );
}
this.item = respuesta_datos_de_fila.data.data.output[ 0 ];
this.$forceUpdate( true );
} catch(error) {
return Vue.prototype.$dialogs.error( error );}
},
async guardar_item() {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.guardar_item");
const clon_de_item = Object.assign({ 
}, this.item );
const claves_de_item = Object.keys(clon_de_item);
for(let index = 0; index < claves_de_item.length; index++) {const clave = claves_de_item[ index ];
if(typeof clon_de_item[ clave ] === 'object') {
delete clon_de_item[ clave ];
}}
const respuesta_guardar_datos_de_fila = (await Castelog.metodos.una_peticion_http("/Update", "POST", { table:this.$route.params.tabla,
id:this.$route.params.fila,
item:clon_de_item
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_guardar_datos_de_fila instanceof Error) {
return;
}
(await this.obtener_datos_de_fila(  ));
this.$forceUpdate( true );
} catch(error) {
return Vue.prototype.$dialogs.error( error );}
},
async eliminar_item() {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.eliminar_item");
const confirmacion = (await Vue.prototype.$dialogs.form( { title:"Eliminar registro",
html:"<xlayout style='color:black;'>¿Seguro que quieres eliminar el registro «" + this.$route.params.fila + "» de «" + this.$route.params.tabla + "»?</xlayout>" + "<xseparator />" + "<xpanel style='text-align:right;'>" + "  <button class='boton_rojo padding_bottom_1 margin_left_1 margin_bottom_1' v-on:click='finalize_dialog_accepting'>Sí, seguro</button>" + "  <button class='boton_azul padding_bottom_1 margin_left_1 margin_bottom_1' v-on:click='finalize_dialog_rejecting'>Cancelar</button>" + "</xpanel>",
footer:false
} ));
if(confirmacion === false) {
return;
}
const respuesta_eliminar_dato_de_fila = (await Castelog.metodos.una_peticion_http("/Delete", "POST", { table:this.$route.params.tabla,
id:this.$route.params.fila
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_eliminar_dato_de_fila instanceof Error) {
return;
}
this.$router.history.push( "/abrir-tabla/" + this.$route.params.tabla );
this.$forceUpdate( true );
} catch(error) {
return Vue.prototype.$dialogs.error( error );}
},
async guardar_fichero( columna ) {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.guardar_fichero");
const [ fichero ] = this.item[ columna ];
const formulario = new FormData(  );
formulario.append( "table",
this.$route.params.tabla );
formulario.append( "id",
this.item.id );
formulario.append( "column",
columna );
formulario.append( "file",
fichero );
const respuesta_fichero = (await Castelog.metodos.una_peticion_http("/SetFile", "POST", formulario, { authorization:this.root.sesion_token,
"Content-type":"multipart/form-data"
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_fichero instanceof Error) {
return;
}
(await this.obtener_datos_de_fila(  ));
} catch(error) {
return Vue.prototype.$dialogs.error( error );}
},
async refrescar_fichero( columna ) {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.refrescar_fichero");
(await this.obtener_datos_de_fila(  ));
} catch(error) {
return Vue.prototype.$dialogs.error( error );}
},
async desvincular_fichero( columna ) {try {
console.log('[DEBUG]', "PaginaDeAbrirItem.desvincular_fichero");
const [ fichero ] = this.item[ columna ];
const formulario = new FormData(  );
formulario.append( "table",
this.$route.params.tabla );
formulario.append( "id",
this.item.id );
formulario.append( "column",
columna );
formulario.append( "file",
null );
const respuesta_fichero = (await Castelog.metodos.una_peticion_http("/SetFile", "POST", formulario, { authorization:this.root.sesion_token,
"Content-type":"multipart/form-data"
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_fichero instanceof Error) {
return;
}
(await this.obtener_datos_de_fila(  ));
} catch(error) {
return Vue.prototype.$dialogs.error( error );}
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
console.log('[DEBUG]', "PaginaDeAbrirItem.mounted");
(await this.obtener_datos_de_fila(  ));
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