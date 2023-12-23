
window.VuejsCalendario = Castelog.metodos.un_componente_vue2("VuejsCalendario",
  "<div class=\"Component VuejsCalendario\">"
 + "    <div class=\"entrada_de_calendario\">"
 + "      <table class=\"tabla_de_entrada_de_calendario\">"
 + "        <tbody>"
 + "          <tr>"
 + "            <td style=\"width: 100%;\">"
 + "              <input style=\"width:100%;\" type=\"text\" v-model=\"valor_de_fecha_en_texto\" disabled=\"true\" />"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"alternar_calendario\" v-if=\"!esta_mostrando_calendario\">Cambiar</button>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"alternar_calendario\" v-else=\"\">Dejar</button>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "    <div class=\"calendario\" style=\"max-width: 200px;\" v-if=\"esta_mostrando_calendario\">"
 + "      <div class=\"chivato_de_fecha\">{{ obtener_fecha_formateada(fecha_seleccionada) }}</div>"
 + "      <div class=\"chivato_de_fecha\">a las {{ espaciar_izquierda(hora_seleccionada, 2) }}:{{ espaciar_izquierda(minuto_seleccionado, 2) }}:{{ espaciar_izquierda(segundo_seleccionado, 2) }}.{{ espaciar_izquierda(milisegundo_seleccionado, 3) }}</div>"
 + "      <table class=\"tabla_de_calendario\">"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <button class=\"boton_de_mover_mes\" v-on:click=\"ir_a_mes_anterior\"> ◀ </button>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"boton_de_mover_mes\" v-on:click=\"ir_a_mes_siguiente\"> ▶ </button>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "      <table class=\"tabla_de_calendario\">"
 + "        <tbody>"
 + "          <tr v-for=\"semana, semana_index in celdas_del_mes_actual\" v-bind:key=\"'semana-' + semana_index\">"
 + "            <td v-for=\"dia, dia_index in semana\" v-bind:key=\"'dia-' + dia_index\">"
 + "              <span v-if=\"dia\">"
 + "                <button class=\"boton_de_calendario\" :class=\"{active: dia.getDate() === fecha_seleccionada.getDate()}\" v-on:click=\"() => seleccionar_dia(dia)\">{{ dia.getDate() }}</button>"
 + "              </span>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "      <table class=\"tabla_de_calendario\" v-if=\"!soloFecha\">"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"agregar_hora\"> ▲ </button>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"agregar_minuto\"> ▲ </button>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"agregar_segundo\"> ▲ </button>"
 + "            </td>"
 + "          </tr>"
 + "          <tr>"
 + "            <td>"
 + "              <table>"
 + "                <tr>"
 + "                  <td><input class=\"entrada_de_calendario\" type=\"text\" v-model=\"hora_seleccionada\" /></td>"
 + "                  <td>:</td>"
 + "                </tr>"
 + "              </table>"
 + "            </td>"
 + "            <td>"
 + "              <table>"
 + "                <tr>"
 + "                  <td><input class=\"entrada_de_calendario\" type=\"text\" v-model=\"minuto_seleccionado\" /></td>"
 + "                  <td>:</td>"
 + "                </tr>"
 + "              </table>"
 + "            </td>"
 + "            <td>"
 + "              <table>"
 + "                <tr>"
 + "                  <td><input class=\"entrada_de_calendario\" type=\"text\" v-model=\"segundo_seleccionado\" /></td>"
 + "                </tr>"
 + "              </table>"
 + "            </td>"
 + "          </tr>"
 + "          <tr>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"quitar_hora\"> ▼ </button>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"quitar_minuto\"> ▼ </button>"
 + "            </td>"
 + "            <td>"
 + "              <button class=\"boton_de_calendario\" v-on:click=\"quitar_segundo\"> ▼ </button>"
 + "            </td>"
 + "          </tr>"
 + "          <tr>"
 + "            <td colspan=\"100\">"
 + "              <input class=\"entrada_de_calendario\" type=\"text\" v-model=\"milisegundo_seleccionado\" />"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ soloFecha:{ type:Boolean,
default:false
},
alCambiar:{ type:Function,
default:function() {
}
},
valorInicial:{ type:[ String,
Date ],
default:function() {try {
return new Date(  );
} catch(error) {
console.log(error);
throw error;
}

}
}
},
data() {try {
console.log('[DEBUG]', "VuejsCalendario.data");
return { valor_de_fecha_en_texto:"",
esta_mostrando_calendario:false,
fecha_seleccionada:undefined,
celdas_del_mes_actual:undefined,
hora_seleccionada:undefined,
minuto_seleccionado:undefined,
segundo_seleccionado:undefined,
milisegundo_seleccionado:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ alternar_calendario() {try {
console.log('[DEBUG]', "VuejsCalendario.alternar_calendario");
this.esta_mostrando_calendario = (!(this.esta_mostrando_calendario));
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_mes_anterior() {try {
console.log('[DEBUG]', "VuejsCalendario.ir_a_mes_anterior");
const nueva_fecha = new Date( this.fecha_seleccionada );
nueva_fecha.setMonth( nueva_fecha.getMonth(  ) - 1 );
this.fecha_seleccionada = nueva_fecha;
} catch(error) {
console.log(error);
throw error;
}

},
ir_a_mes_siguiente() {try {
console.log('[DEBUG]', "VuejsCalendario.ir_a_mes_siguiente");
const nueva_fecha = new Date( this.fecha_seleccionada );
nueva_fecha.setMonth( nueva_fecha.getMonth(  ) + 1 );
this.fecha_seleccionada = nueva_fecha;
} catch(error) {
console.log(error);
throw error;
}

},
agregar_hora() {try {
console.log('[DEBUG]', "VuejsCalendario.agregar_hora");
let hora = parseInt( this.hora_seleccionada );
hora += 1;
this.hora_seleccionada = hora;
} catch(error) {
console.log(error);
throw error;
}

},
agregar_minuto() {try {
console.log('[DEBUG]', "VuejsCalendario.agregar_minuto");
let minuto = parseInt( this.minuto_seleccionado );
minuto += 1;
this.minuto_seleccionado = minuto;
} catch(error) {
console.log(error);
throw error;
}

},
agregar_segundo() {try {
console.log('[DEBUG]', "VuejsCalendario.agregar_segundo");
let segundo = parseInt( this.segundo_seleccionado );
segundo += 1;
this.segundo_seleccionado = segundo;
} catch(error) {
console.log(error);
throw error;
}

},
quitar_hora() {try {
console.log('[DEBUG]', "VuejsCalendario.quitar_hora");
let hora = parseInt( this.hora_seleccionada );
hora -= 1;
this.hora_seleccionada = hora;
} catch(error) {
console.log(error);
throw error;
}

},
quitar_minuto() {try {
console.log('[DEBUG]', "VuejsCalendario.quitar_minuto");
let minuto = parseInt( this.minuto_seleccionado );
minuto -= 1;
this.minuto_seleccionado = minuto;
} catch(error) {
console.log(error);
throw error;
}

},
quitar_segundo() {try {
console.log('[DEBUG]', "VuejsCalendario.quitar_segundo");
let segundo = parseInt( this.segundo_seleccionado );
segundo -= 1;
this.segundo_seleccionado = segundo;
} catch(error) {
console.log(error);
throw error;
}

},
seleccionar_dia( dia ) {try {
console.log('[DEBUG]', "VuejsCalendario.seleccionar_dia");
this.fecha_seleccionada = dia;
} catch(error) {
console.log(error);
throw error;
}

},
espaciar_izquierda( texto,
longitud,
relleno = "0" ) {try {
console.log('[DEBUG]', "VuejsCalendario.espaciar_izquierda");
let salida = "" + texto;
while(salida.length < longitud) {
salida = relleno + salida;
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_valor() {try {
console.log('[DEBUG]', "VuejsCalendario.obtener_valor");
const fecha = new Date( this.fecha_seleccionada );
if(typeof this.hora_seleccionada === 'undefined') {
this.hora_seleccionada = fecha.getHours(  );
}
if(typeof this.minuto_seleccionado === 'undefined') {
this.minuto_seleccionado = fecha.getMinutes(  );
}
if(typeof this.segundo_seleccionado === 'undefined') {
this.segundo_seleccionado = fecha.getSeconds(  );
}
if(typeof this.milisegundo_seleccionado === 'undefined') {
this.milisegundo_seleccionado = fecha.getMilliseconds(  );
}
let salida = "";
salida += this.espaciar_izquierda( fecha.getFullYear(  ),
4,
"0" );
salida += "-";
salida += this.espaciar_izquierda( fecha.getMonth(  ),
2,
"0" );
salida += "-";
salida += this.espaciar_izquierda( fecha.getDate(  ),
2,
"0" );
salida += " ";
salida += this.espaciar_izquierda( this.hora_seleccionada,
2,
"0" );
salida += ":";
salida += this.espaciar_izquierda( this.minuto_seleccionado,
2,
"0" );
salida += ":";
salida += this.espaciar_izquierda( this.segundo_seleccionado,
2,
"0" );
salida += ".";
salida += this.espaciar_izquierda( this.milisegundo_seleccionado,
3,
"0" );
this.valor_de_fecha_en_texto = salida;
this.$forceUpdate( true );
this.alCambiar( salida,
this );
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
obtener_fecha_formateada( fecha ) {try {
console.log('[DEBUG]', "VuejsCalendario.obtener_fecha_formateada");
if(typeof fecha === 'undefined') {
return;
}
let formato = "";
formato += ( () => {
try {
if(fecha.getDay(  ) === 0) {
return "Domingo";
}
if(fecha.getDay(  ) === 1) {
return "Lunes";
}
if(fecha.getDay(  ) === 2) {
return "Martes";
}
if(fecha.getDay(  ) === 3) {
return "Miércoles";
}
if(fecha.getDay(  ) === 4) {
return "Jueves";
}
if(fecha.getDay(  ) === 5) {
return "Viernes";
}
if(fecha.getDay(  ) === 6) {
return "Sábado";
}
} catch(error) {
console.log(error);
throw error;
}
})();
formato += ", ";
formato += fecha.getDate(  );
formato += " de ";
formato += ( () => {
try {
if(fecha.getMonth(  ) === 0) {
return "Enero";
}
if(fecha.getMonth(  ) === 1) {
return "Febrero";
}
if(fecha.getMonth(  ) === 2) {
return "Marzo";
}
if(fecha.getMonth(  ) === 3) {
return "Abril";
}
if(fecha.getMonth(  ) === 4) {
return "Mayo";
}
if(fecha.getMonth(  ) === 5) {
return "Junio";
}
if(fecha.getMonth(  ) === 6) {
return "Julio";
}
if(fecha.getMonth(  ) === 7) {
return "Agosto";
}
if(fecha.getMonth(  ) === 8) {
return "Septiembre";
}
if(fecha.getMonth(  ) === 9) {
return "Octubre";
}
if(fecha.getMonth(  ) === 10) {
return "Noviembre";
}
if(fecha.getMonth(  ) === 11) {
return "Diciembre";
}
} catch(error) {
console.log(error);
throw error;
}
})();
formato += " de ";
formato += fecha.getFullYear(  );
return formato;
} catch(error) {
console.log(error);
throw error;
}

},
pasar_a_fecha( fecha_en_cualquier_formato ) {try {
console.log('[DEBUG]', "VuejsCalendario.pasar_a_fecha");
let salida = undefined;
if(typeof fecha_en_cualquier_formato === 'string') {
salida = new Date( fecha_en_cualquier_formato );
salida.setMonth( salida.getMonth(  ) + 1 );
}
if(fecha_en_cualquier_formato instanceof Date) {
salida = fecha_en_cualquier_formato;
}
return salida;
throw new Error( "Formato de fecha no soportado" );
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ fecha_seleccionada( nuevo_valor ) {try {
console.log('[DEBUG]', "VuejsCalendario.watch.fecha_seleccionada");
const dias = [  ];
const dia_1_del_mes = new Date( nuevo_valor );
dia_1_del_mes.setDate( 1 );
dia_1_del_mes.setHours( 0 );
dia_1_del_mes.setMinutes( 0 );
dia_1_del_mes.setSeconds( 0 );
dia_1_del_mes.setMilliseconds( 0 );
const dias_antes_de_entrar_en_el_mes = ( () => {
try {
const dia_de_semana = dia_1_del_mes.getDay(  );
if(dia_de_semana === 0) {
return 6;
}
if(dia_de_semana === 1) {
return 0;
}
if(dia_de_semana === 2) {
return 1;
}
if(dia_de_semana === 3) {
return 2;
}
if(dia_de_semana === 4) {
return 3;
}
if(dia_de_semana === 5) {
return 4;
}
if(dia_de_semana === 6) {
return 5;
}
} catch(error) {
console.log(error);
throw error;
}
})();
const celdas_vacias_anteriores = new Array( dias_antes_de_entrar_en_el_mes );
const dia_final_del_mes = new Date( nuevo_valor );
dia_final_del_mes.setMonth( dia_final_del_mes.getMonth(  ) + 1 );
dia_final_del_mes.setDate( 1 );
dia_final_del_mes.setDate( dia_final_del_mes.getDate(  ) - 1 );
const numero_final_de_mes = dia_final_del_mes.getDate(  );
let fila_actual = celdas_vacias_anteriores;
for(let index = 1; index < numero_final_de_mes + 1; index++) {const nueva_fecha = new Date( dia_1_del_mes );
nueva_fecha.setDate( index );
fila_actual.push( nueva_fecha );
if(nueva_fecha.getDay(  ) === 0) {
dias.push( fila_actual );
fila_actual = [  ];
}}
if(fila_actual.length) {
dias.push( fila_actual );
}
this.celdas_del_mes_actual = dias;
this.obtener_valor(  );
} catch(error) {
console.log(error);
throw error;
}

},
hora_seleccionada( nuevo_valor ) {try {
console.log('[DEBUG]', "VuejsCalendario.watch.hora_seleccionada");
this.obtener_valor(  );
} catch(error) {
console.log(error);
throw error;
}

},
minuto_seleccionado( nuevo_valor ) {try {
console.log('[DEBUG]', "VuejsCalendario.watch.minuto_seleccionado");
this.obtener_valor(  );
} catch(error) {
console.log(error);
throw error;
}

},
segundo_seleccionado( nuevo_valor ) {try {
console.log('[DEBUG]', "VuejsCalendario.watch.segundo_seleccionado");
this.obtener_valor(  );
} catch(error) {
console.log(error);
throw error;
}

},
milisegundo_seleccionado( nuevo_valor ) {try {
console.log('[DEBUG]', "VuejsCalendario.watch.milisegundo_seleccionado");
this.obtener_valor(  );
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
console.log('[DEBUG]', "VuejsCalendario.mounted");
this.fecha_seleccionada = this.pasar_a_fecha( this.valorInicial );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);