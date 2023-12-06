
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
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir al panel de administración</button>"
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
 + "        <xpanel style=\"padding-top:12px;\" v-bind:key=\"'field-' + field_index\" v-if=\"field.columna !== 'id'\">"
 + "          <xpanel style=\"font-weight:bold;text-decoration:underline;\">{{ field.columna }}:</xpanel>"
 + "          <xpanel v-if=\"false\">"
 + "            --- Input rendering ---"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].atributos.es_tipo === 'color'\">"
 + "            <input :ref=\"'color_' + $route.params.tabla\" style=\"display:none;width:100%;\" type=\"color\" v-model=\"item[field.columna]\" />"
 + "            <button class=\"width_100\" v-on:click=\"() => {$refs['color_' + $route.params.tabla][0].click() }\">"
 + "              <span style=\"min-height:15px;min-width:30px;width:50%;display:inline-block;border-radius:4pt;\" :style=\"'background-color:' + (item[field.columna] || '#333')\">"
 + "                {{ item[field.columna] }}"
 + "              </span>"
 + "            </button>"
 + "          </xpanel>"
 + "          <xpanel v-else-if=\"root.compacted_schema[ $route.params.tabla ].composicion[field.columna].atributos.es_tipo === 'color'\">"
 + "            <input style=\"width:100%;\" type=\"color\" v-model=\"item[field.columna]\" />"
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
 + "            <input style=\"width:100%;\" type=\"datetime-local\" v-model=\"item[field.columna]\" />"
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
this.$router.history.push( "/abrir-fila/" + this.$route.params.tabla + "/" + respuesta_crear_item.data.data.id );
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