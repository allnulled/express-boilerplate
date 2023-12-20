
window.PaginaDeAutentificacion = Castelog.metodos.un_componente_vue2("PaginaDeAutentificacion",
  "<div class=\"Component PaginaDeAutentificacion\">"
 + "    <xtitle>Autentificación</xtitle>"
 + "    <xlayout>"
 + "      <xlist>"
 + "        <xlistitem>"
 + "          <router-link to=\"/\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a inicio</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <router-link to=\"/cambiar-contrasenya\">"
 + "            <button class=\"boton_ancho_izquierda boton_azul\">Ir a cambiar contraseña</button>"
 + "          </router-link>"
 + "        </xlistitem>"
 + "        <xlistitem>"
 + "          <xpanel>"
 + "            <xpanel>"
 + "              <button class=\"boton_verde boton_ancho_izquierda\" v-on:click=\"alternar_panel('sesion')\">Sesión</button>"
 + "            </xpanel>"
 + "            <xtableviewer v-if=\"paneles_activos.indexOf('sesion') !== -1\">"
 + "              <xtable class=\"tabla_de_datos margin_top_1\">"
 + "                <xtablebody>"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:1%;\">ID:</xtablecell>"
 + "                    <xtablecell>{{ root.authentication.sesion.id }}</xtablecell>"
 + "                  </xtablerow>"
 + "                  <xtablerow>"
 + "                    <xtablecell>Token:</xtablecell>"
 + "                    <xtablecell style=\"word-break:break-all;\">{{ root.authentication.sesion.token }}</xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "            </xtableviewer>"
 + "          </xpanel>"
 + "          <xpanel>"
 + "            <xpanel>"
 + "              <button class=\"boton_verde boton_ancho_izquierda\" v-on:click=\"alternar_panel('usuario')\">Usuario</button>"
 + "            </xpanel>"
 + "            <xtableviewer v-if=\"paneles_activos.indexOf('usuario') !== -1\">"
 + "              <xtable class=\"tabla_de_datos margin_top_1\">"
 + "                <xtablebody>"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:1%;\">ID:</xtablecell>"
 + "                    <xtablecell>{{ root.authentication.usuario.id }}</xtablecell>"
 + "                  </xtablerow>"
 + "                  <xtablerow>"
 + "                    <xtablecell>Nombre:</xtablecell>"
 + "                    <xtablecell>{{ root.authentication.usuario.nombre }}</xtablecell>"
 + "                  </xtablerow>"
 + "                  <xtablerow>"
 + "                    <xtablecell>Correo:</xtablecell>"
 + "                    <xtablecell>{{ root.authentication.usuario.correo }}</xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "            </xtableviewer>"
 + "          </xpanel>"
 + "          <xpanel>"
 + "            <xpanel>"
 + "              <button class=\"boton_verde boton_ancho_izquierda\" v-on:click=\"alternar_panel('permisos')\">Permisos</button>"
 + "            </xpanel>"
 + "            <xtableviewer v-if=\"paneles_activos.indexOf('permisos') !== -1\">"
 + "              <xtable class=\"tabla_de_datos margin_top_1\">"
 + "                <xtablebody v-for=\"permiso, permiso_index in root.authentication.permisos\" v-bind:key=\"'permiso-' + permiso_index\">"
 + "                  <xtablerow>"
 + "                    <xtablecell style=\"width:1%;\">ID:</xtablecell>"
 + "                    <xtablecell>{{ permiso.id }}</xtablecell>"
 + "                  </xtablerow>"
 + "                  <xtablerow>"
 + "                    <xtablecell>Nombre:</xtablecell>"
 + "                    <xtablecell>{{ permiso.nombre }}</xtablecell>"
 + "                  </xtablerow>"
 + "                  <xtablerow>"
 + "                    <xtablecell>Descripción:</xtablecell>"
 + "                    <xtablecell>{{ permiso.descripcion }}</xtablecell>"
 + "                  </xtablerow>"
 + "                </xtablebody>"
 + "              </xtable>"
 + "            </xtableviewer>"
 + "          </xpanel>"
 + "        </xlistitem>"
 + "      </xlist>"
 + "    </xlayout>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
console.log('[DEBUG]', "PaginaDeAutentificacion.data");
return { paneles_activos:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ alternar_panel( panel ) {try {
console.log('[DEBUG]', "PaginaDeAutentificacion.alternar_panel");
const posicion = this.paneles_activos.indexOf( panel );
if((!(posicion === 0 - 1))) {
this.paneles_activos.splice( posicion,
1 );
}
else {
this.paneles_activos.push( panel );
}
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