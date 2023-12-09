
window.PaginaDeAbrirFila = Castelog.metodos.un_componente_vue2("PaginaDeAbrirFila",
  "<div class=\"Component PaginaDeAbrirFila\">"
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
 + "      <template v-for=\"value, key in row\">"
 + "        <xpanel style=\"padding-top:12px;\" v-bind:key=\"'row-' + key\" v-if=\"key !== 'id' && !key.startsWith('$')\">"
 + "          <xpanel style=\"font-weight:bold;text-decoration:underline;\">{{ key }}:</xpanel>"
 + "          <xpanel v-if=\"false\">"
 + "            --- Input rendering ---"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].atributos.es_tipo === 'color'\">"
 + "            <input :ref=\"'color_' + $route.params.tabla\" style=\"display:none;width:100%;\" type=\"color\" v-model=\"row[key]\" />"
 + "            <button class=\"width_100\" v-on:click=\"() => {$refs['color_' + $route.params.tabla][0].click() }\">"
 + "              <span style=\"min-height:15px;min-width:30px;width:50%;display:inline-block;border-radius:4pt;\" :style=\"'background-color:' + (row[key] || '#333')\">"
 + "                {{ row[key] }}"
 + "              </span>"
 + "            </button>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'VARCHAR'\">"
 + "            <input style=\"width:100%;\" type=\"text\" v-model=\"row[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'INTEGER'\">"
 + "            <input style=\"width:100%;\" type=\"number\" v-model=\"row[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'FLOAT'\">"
 + "            <input style=\"width:100%;\" type=\"number\" v-model=\"row[key]\" />"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'TEXT'\">"
 + "            <textarea style=\"width:100%;min-height:80px;resize:vertical;\" v-model=\"row[key]\"></textarea>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[key].tipo === 'DATETIME'\">"
 + "            <input style=\"width:100%;\" type=\"datetime-local\" v-model=\"row[key]\" />"
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
return { row:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async obtener_datos_de_fila() {try {
console.log('[DEBUG]', "PaginaDeAbrirFila.obtener_datos_de_fila");
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
this.row = respuesta_datos_de_fila.data.data.output[ 0 ];
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async guardar_item() {try {
console.log('[DEBUG]', "PaginaDeAbrirFila.guardar_item");
const respuesta_guardar_datos_de_fila = (await Castelog.metodos.una_peticion_http("/Update", "POST", { table:this.$route.params.tabla,
id:this.$route.params.fila,
item:this.row
}, { authorization:this.root.sesion_token
}, null, error => {
return Vue.prototype.$dialogs.error( error );}));
if(respuesta_guardar_datos_de_fila instanceof Error) {
return;
}
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
async eliminar_item() {try {
console.log('[DEBUG]', "PaginaDeAbrirFila.eliminar_item");
const confirmacion = (await Vue.prototype.$dialogs.form( { title:"Eliminar registro",
html:"<xlayout>¿Seguro que quieres eliminar el registro «" + this.$route.params.fila + "» de «" + this.$route.params.tabla + "»?</xlayout><xseparator /><xpanel class=''><button class='boton_rojo padding_bottom_1 margin_left_1 margin_bottom_1' v-on:click='finalize_dialog_accepting'>Sí, seguro</button><button class='boton_azul padding_bottom_1 margin_left_1 margin_bottom_1' v-on:click='finalize_dialog_rejecting'>Cancelar</button></xpanel>",
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
console.log('[DEBUG]', "PaginaDeAbrirFila.mounted");
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