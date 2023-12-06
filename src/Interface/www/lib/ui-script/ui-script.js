(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.uiscript_components = {};
window.uiscript_api = {};

const xbreadcrumb = require("./xbreadcrumb/xbreadcrumb.js");
const xbutton = require("./xbutton/xbutton.js");
const xdialogport = require("./xdialogport/xdialogport.js");
const xdialogcurrent = require("./xdialogport/xdialogcurrent.js");
const xform = require("./xform/xform.js");
const xformfield = require("./xformfield/xformfield.js");
const xjumbotron = require("./xjumbotron/xjumbotron.js");
const xlabel = require("./xlabel/xlabel.js");
const xlayout = require("./xlayout/xlayout.js");
const xlayoutnopaddingbottom = require("./xlayoutnopaddingbottom/xlayoutnopaddingbottom.js");
const xlayoutnopaddingtop = require("./xlayoutnopaddingtop/xlayoutnopaddingtop.js");
const xlink = require("./xlink/xlink.js");
const xlist = require("./xlist/xlist.js");
const xlistitem = require("./xlistitem/xlistitem.js");
const xpage = require("./xpage/xpage.js");
const xpanel = require("./xpanel/xpanel.js");
const xparagraph = require("./xparagraph/xparagraph.js");
const xsubtitle = require("./xsubtitle/xsubtitle.js");
const xtable = require("./xtable/xtable.js");
const xtablecell = require("./xtablecell/xtablecell.js");
const xtablerow = require("./xtablerow/xtablerow.js");
const xtablebody = require("./xtablebody/xtablebody.js");
const xtester = require("./xtester/xtester.js");
const xtitle = require("./xtitle/xtitle.js");
const xwindow = require("./xwindow/xwindow.js");
const xwindowbody = require("./xwindowbody/xwindowbody.js");
const xwindowfooter = require("./xwindowfooter/xwindowfooter.js");
const xwindowfooteritem = require("./xwindowfooteritem/xwindowfooteritem.js");
const xwindowtitle = require("./xwindowtitle/xwindowtitle.js");
const xseparator = require("./xseparator/xseparator.js");
const xstatic = require("./xstatic/xstatic.js");

Object.assign(window.uiscript_api, {
    components: window.uiscript_components
});

window.uiscript_api.default = window.uiscript_api;

module.exports = window.uiscript_api;
},{"./xbreadcrumb/xbreadcrumb.js":2,"./xbutton/xbutton.js":3,"./xdialogport/xdialogcurrent.js":4,"./xdialogport/xdialogport.js":5,"./xform/xform.js":6,"./xformfield/xformfield.js":7,"./xjumbotron/xjumbotron.js":8,"./xlabel/xlabel.js":9,"./xlayout/xlayout.js":10,"./xlayoutnopaddingbottom/xlayoutnopaddingbottom.js":11,"./xlayoutnopaddingtop/xlayoutnopaddingtop.js":12,"./xlink/xlink.js":13,"./xlist/xlist.js":14,"./xlistitem/xlistitem.js":15,"./xpage/xpage.js":16,"./xpanel/xpanel.js":17,"./xparagraph/xparagraph.js":18,"./xseparator/xseparator.js":19,"./xstatic/xstatic.js":20,"./xsubtitle/xsubtitle.js":21,"./xtable/xtable.js":22,"./xtablebody/xtablebody.js":23,"./xtablecell/xtablecell.js":24,"./xtablerow/xtablerow.js":25,"./xtester/xtester.js":26,"./xtitle/xtitle.js":27,"./xwindow/xwindow.js":28,"./xwindowbody/xwindowbody.js":29,"./xwindowfooter/xwindowfooter.js":30,"./xwindowfooteritem/xwindowfooteritem.js":31,"./xwindowtitle/xwindowtitle.js":32}],2:[function(require,module,exports){

uiscript_components.xbreadcrumb = Castelog.metodos.un_componente_vue2("xbreadcrumb",
  "<div class=\"Component xbreadcrumb\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],3:[function(require,module,exports){

uiscript_components.xbutton = Castelog.metodos.un_componente_vue2("xbutton",
  "<button class=\"Component xbutton\">"
 + "    <slot></slot>"
 + "  </button>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],4:[function(require,module,exports){

uiscript_components.xdialogcurrent = Castelog.metodos.un_componente_vue2("xdialogcurrent",
  "<div class=\"Component xdialogcurrent\">"
 + ""
 + "  </div>",
  function(component) {return { props:{ port:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],5:[function(require,module,exports){

uiscript_components.xdialogport = Castelog.metodos.un_componente_vue2("xdialogport",
  "<div class=\"Component xdialogport\">"
 + "    <div class=\"\" v-if=\"dialogs && dialogs.length && !is_loading\">"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <div>"
 + "                <xdialogcurrent :port=\"this\" ref=\"current_dialog\"></xdialogcurrent>"
 + "              </div>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { is_loading:false,
dialogs:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ generate_html_1( html,
title,
footer ) {try {
let html_vue = "";
html_vue += "<xwindow style='min-width:200px;'>";
html_vue += " <xwindowtitle>";
html_vue += "  " + title;
html_vue += " </xwindowtitle>";
html_vue += " <xwindowbody>";
html_vue += "  <form v-on:submit='finalize_dialog'>";
html_vue += "   " + html;
html_vue += "  </form>";
html_vue += " </xwindowbody>";
if(footer) {
html_vue += " <xwindowfooter>";
html_vue += "  <xwindowfooteritem>";
html_vue += "   " + footer;
html_vue += "  </xwindowfooteritem>";
html_vue += " </xwindowfooter>";
}
html_vue += "</xwindow>";
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
generate_html_2( html,
title,
footer,
button_accept = "Aceptar",
button_reject = "Cancelar" ) {try {
let html_vue = "";
html_vue += "<xwindow style='min-width:200px;'>";
html_vue += " <xwindowtitle>";
html_vue += "  " + title;
html_vue += " </xwindowtitle>";
html_vue += " <xwindowbody>";
html_vue += "  <form v-on:submit='finalize_dialog'>";
html_vue += "   " + html;
html_vue += "   <div style='text-align:right;padding:4px;border-top:1px solid #CCC;'>";
html_vue += "     <button v-on:click='finalize_dialog_accepting'>";
html_vue += "       " + button_accept;
html_vue += "     </button>";
html_vue += "     <button v-on:click='finalize_dialog_rejecting'>";
html_vue += "       " + button_reject;
html_vue += "     </button>";
html_vue += "   </div>";
html_vue += "  </form>";
html_vue += " </xwindowbody>";
if(footer) {
html_vue += " <xwindowfooter>";
html_vue += "  <xwindowfooteritem>";
html_vue += "   " + footer;
html_vue += "  </xwindowfooteritem>";
html_vue += " </xwindowfooter>";
}
html_vue += "</xwindow>";
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
generate_html_3( html,
title,
footer,
button_accept = "Aceptar" ) {try {
let html_vue = "";
html_vue += "<xwindow style='min-width:200px;'>";
html_vue += " <xwindowtitle>";
html_vue += "  " + title;
html_vue += " </xwindowtitle>";
html_vue += " <xwindowbody>";
html_vue += "  <form v-on:submit='finalize_dialog'>";
html_vue += "   " + html;
html_vue += "   <div style='text-align:right;padding:4px;border-top:1px solid #CCC;'>";
html_vue += "     <button v-on:click='finalize_dialog_accepting'>";
html_vue += "       " + button_accept;
html_vue += "     </button>";
html_vue += "   </div>";
html_vue += "  </form>";
html_vue += " </xwindowbody>";
if(footer) {
html_vue += " <xwindowfooter>";
html_vue += "  <xwindowfooteritem>";
html_vue += "   " + footer;
html_vue += "  </xwindowfooteritem>";
html_vue += " </xwindowfooter>";
}
html_vue += "</xwindow>";
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
async reset() {try {
this.is_loading = true;
this.$forceUpdate( true );
setTimeout( () => {try {
this.is_loading = false;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
0 );
} catch(error) {
console.log(error);
throw error;
}

},
obtener_subcomponente(  ) {try {
return { props:{ port:{ type:Object,
required:true
}
},
methods:{ finalize_dialog( evento ) {try {
this.port.close_first(  );
return false;
} catch(error) {
console.log(error);
throw error;
}

},
finalize_dialog_accepting( evento ) {try {
this.port.close_first_accepting(  );
return false;
} catch(error) {
console.log(error);
throw error;
}

},
finalize_dialog_rejecting( evento ) {try {
this.port.close_first_rejecting(  );
return false;
} catch(error) {
console.log(error);
throw error;
}

}
}
};
} catch(error) {
console.log(error);
throw error;
}

},
async extract_fields_from_dialog( current_dialog ) {try {
const formulario = current_dialog.$el.querySelector( "form" );
const elementos = formulario.elements;
const salida = { 
};
iterando_elementos:
for(let index = 0; index < elementos.length; index++) {const elemento = elementos[ index ];
const nombre = elemento.getAttribute( "name" );
const valor = ( () => {
try {
if(elemento.type === "file") {
return elemento.files;
}
else {
return elemento.value;
}
} catch(error) {
console.log(error);
throw error;
}
})();
if((!(typeof nombre === 'string'))) {
continue iterando_elementos;
}
salida[ nombre ] = valor;}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
get_template_from_dialog( dialogo_2 ) {try {
let html_vue = undefined;
if(dialogo_2.type === "form") {
html_vue = this.generate_html_1( dialogo_2.html,
dialogo_2.title,
dialogo_2.footer );
}
else if(dialogo_2.type === "confirm") {
html_vue = this.generate_html_2( dialogo_2.html,
dialogo_2.title,
dialogo_2.footer,
dialogo_2.button_accept,
dialogo_2.button_reject );
}
else if(dialogo_2.type === "inform") {
html_vue = this.generate_html_3( dialogo_2.html,
dialogo_2.title,
dialogo_2.footer,
dialogo_2.button_accept );
}
else {
throw new Error( "No se identificó el tipo de diálogo" );
}
return html_vue;
} catch(error) {
console.log(error);
throw error;
}

},
async close_first() {try {
const dialogo = this.dialogs.shift(  );
const tipo = dialogo.type;
const datos = this.extract_fields_from_dialog( this.$refs.current_dialog );
dialogo.promise_handler.ok( datos );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async close_first_accepting() {try {
const dialogo = this.dialogs.shift(  );
const tipo = dialogo.type;
const datos = this.extract_fields_from_dialog( this.$refs.current_dialog );
dialogo.promise_handler.ok( true );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async close_first_rejecting() {try {
const dialogo = this.dialogs.shift(  );
const tipo = dialogo.type;
const datos = this.extract_fields_from_dialog( this.$refs.current_dialog );
dialogo.promise_handler.ok( false );
if(this.dialogs.length === 0) {
return this.reset(  );
}
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
} catch(error) {
console.log(error);
throw error;
}

},
async form( ...args ) {try {
const [ html_o_todos ] = args;
if(typeof html_o_todos === 'string') {
return this.form_by_parameters( 
...(args ) );
}
if(typeof html_o_todos === 'object') {
return this.form_by_parameters( html_o_todos.html,
html_o_todos.title,
html_o_todos.footer );
}
throw new Error( "Parámetro no identificado en llamada a «xdialogport.form»" );
} catch(error) {
console.log(error);
throw error;
}

},
async form_by_parameters( html,
title = "Message",
footer = false ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
this.dialogs.push( { type:"form",
html,
title,
footer,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise;
} catch(error) {
console.log(error);
throw error;
}

},
async confirm( ...args ) {try {
const [ html_o_todos ] = args;
if(typeof html_o_todos === 'string') {
return this.confirm_by_parameters( 
...(args ) );
}
if(typeof html_o_todos === 'object') {
return this.confirm_by_parameters( html_o_todos.html,
html_o_todos.title,
html_o_todos.footer,
html_o_todos.button_accept,
html_o_todos.button_reject );
}
throw new Error( "Parámetro no identificado en llamada a «xdialogport.confirm»" );
} catch(error) {
console.log(error);
throw error;
}

},
async confirm_by_parameters( html,
title = "Message",
footer = false,
button_accept = "Aceptar",
button_reject = "Cancelar" ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
this.dialogs.push( { type:"confirm",
html,
title,
footer,
button_accept,
button_reject,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise;
} catch(error) {
console.log(error);
throw error;
}

},
async inform( ...args ) {try {
const [ html_o_todos ] = args;
if(typeof html_o_todos === 'string') {
return this.inform_by_parameters( 
...(args ) );
}
if(typeof html_o_todos === 'object') {
return this.inform_by_parameters( html_o_todos.html,
html_o_todos.title,
html_o_todos.footer,
html_o_todos.button_accept );
}
throw new Error( "Parámetro no identificado en llamada a «xdialogport.inform»" );
} catch(error) {
console.log(error);
throw error;
}

},
async inform_by_parameters( html,
title = "Message",
footer = false,
button_accept = "Aceptar" ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
this.dialogs.push( { type:"inform",
html,
title,
footer,
button_accept,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise;
} catch(error) {
console.log(error);
throw error;
}

},
async error( error ) {try {
const promise_handler = { 
};
promise_handler.ok = undefined;
promise_handler.fail = undefined;
promise_handler.promise = new Promise( ( ok2,
fail2 ) => {try {
promise_handler.ok = ok2;
promise_handler.fail = fail2;
} catch(error) {
console.log(error);
throw error;
}

} );
let html = "";
html += error.message;
html += ". ";
if(error && error.response && error.response.data && error.response.data.error) {
html += ( error.response ? ( error.response.data.error.name + ": " + error.response.data.error.message ) : "" );
}
else {
html += "";
}
html = this.escapeHtml( html );
html = "<xlayout style='color: red;text-shadow: 0 0 2px red;'>" + html + "</xlayout>";
const title = "Error de aplicación";
const footer = "Hubo un error.";
const button_accept = "De acuerdo";
this.dialogs.push( { type:"inform",
html,
title,
footer,
button_accept,
promise_handler
} );
if(this.dialogs.length === 1) {
const dialogo_2 = this.dialogs[ 0 ];
const html_vue = this.get_template_from_dialog( dialogo_2 );
Vue.component( "xdialogcurrent",
{ template:html_vue,

...(this.obtener_subcomponente(  ) )
} );
this.reset(  );
}
this.$forceUpdate( true );
return promise_handler.promise.then( () => {try {
return error;
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
escapeHtml( texto ) {try {
return texto.replace( new RegExp( ">",
"g" ),
"&gt;" ).replace( new RegExp( "<",
"g" ),
"&lt;" );
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
mounted() {try {
Vue.prototype.$dialogs = this;
Vue.prototype.$xdialogport = this;
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
},{}],6:[function(require,module,exports){

uiscript_components.xform = Castelog.metodos.un_componente_vue2("xform",
  "<div class=\"Component xform\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],7:[function(require,module,exports){

uiscript_components.xformfield = Castelog.metodos.un_componente_vue2("xformfield",
  "<div class=\"Component xformfield\">"
 + "    <div class=\"form_group\">"
 + "      <slot></slot>"
 + "      <div>"
 + "        <input class=\"text_input\" type=\"text\" />"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],8:[function(require,module,exports){

uiscript_components.xjumbotron = Castelog.metodos.un_componente_vue2("xjumbotron",
  "<div class=\"Component xjumbotron\">"
 + "    <table>"
 + "      <tbody>"
 + "        <tr>"
 + "          <td>"
 + "            <slot></slot>"
 + "          </td>"
 + "        </tr>"
 + "      </tbody>"
 + "    </table>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],9:[function(require,module,exports){

uiscript_components.xlabel = Castelog.metodos.un_componente_vue2("xlabel",
  "<div class=\"Component xlabel\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],10:[function(require,module,exports){

uiscript_components.xlayout = Castelog.metodos.un_componente_vue2("xlayout",
  "<div class=\"Component xlayout\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],11:[function(require,module,exports){

uiscript_components.xlayoutnopaddingbottom = Castelog.metodos.un_componente_vue2("xlayoutnopaddingbottom",
  "<div class=\"Component xlayoutnopaddingbottom\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],12:[function(require,module,exports){

uiscript_components.xlayoutnopaddingtop = Castelog.metodos.un_componente_vue2("xlayoutnopaddingtop",
  "<div class=\"Component xlayoutnopaddingtop\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],13:[function(require,module,exports){

uiscript_components.xlink = Castelog.metodos.un_componente_vue2("xlink",
  "<a class=\"Component xlink\" :href=\"href\">"
 + "    <slot></slot>"
 + "  </a>",
  function(component) {return { props:{ href:{ type:String,
default:"javascript:void(0)"
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],14:[function(require,module,exports){

uiscript_components.xlist = Castelog.metodos.un_componente_vue2("xlist",
  "<ul class=\"Component xlist\">"
 + "    <slot></slot>"
 + "  </ul>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],15:[function(require,module,exports){

uiscript_components.xlistitem = Castelog.metodos.un_componente_vue2("xlistitem",
  "<li class=\"Component xlistitem\">"
 + "    <slot></slot>"
 + "  </li>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],16:[function(require,module,exports){

uiscript_components.xpage = Castelog.metodos.un_componente_vue2("xpage",
  "<div class=\"Component xpage\">"
 + "    <div class=\"title\" v-if=\"title\">{{ title }}</div>"
 + "    <div class=\"container\">"
 + "      <div class=\"content\">"
 + "        <slot></slot>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ title:{ type:String,
default:""
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],17:[function(require,module,exports){

uiscript_components.xpanel = Castelog.metodos.un_componente_vue2("xpanel",
  "<div class=\"Component xpanel\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],18:[function(require,module,exports){

uiscript_components.xparagraph = Castelog.metodos.un_componente_vue2("xparagraph",
  "<p class=\"Component xparagraph\">"
 + "    <slot></slot>"
 + "  </p>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],19:[function(require,module,exports){

uiscript_components.xseparator = Castelog.metodos.un_componente_vue2("xseparator",
  "<hr class=\"Component xseparator\"></hr>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],20:[function(require,module,exports){

uiscript_components.xstatic = Castelog.metodos.un_componente_vue2("xstatic",
  "<div class=\"Component xstatic\">"
 + "    <div>"
 + "      <table>"
 + "        <tbody>"
 + "          <tr>"
 + "            <td>"
 + "              <div>"
 + "                <slot></slot>"
 + "              </div>"
 + "            </td>"
 + "          </tr>"
 + "        </tbody>"
 + "      </table>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],21:[function(require,module,exports){

uiscript_components.xsubtitle = Castelog.metodos.un_componente_vue2("xsubtitle",
  "<div class=\"Component xsubtitle\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],22:[function(require,module,exports){

uiscript_components.xtable = Castelog.metodos.un_componente_vue2("xtable",
  "<table class=\"Component xtable\">"
 + "    <slot></slot>"
 + "  </table>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],23:[function(require,module,exports){

uiscript_components.xtablebody = Castelog.metodos.un_componente_vue2("xtablebody",
  "<tbody class=\"Component xtablebody\">"
 + "    <slot></slot>"
 + "  </tbody>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],24:[function(require,module,exports){

uiscript_components.xtablecell = Castelog.metodos.un_componente_vue2("xtablecell",
  "<td class=\"Component xtablecell\">"
 + "    <slot></slot>"
 + "  </td>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],25:[function(require,module,exports){

uiscript_components.xtablerow = Castelog.metodos.un_componente_vue2("xtablerow",
  "<tr class=\"Component xtablerow\">"
 + "    <slot></slot>"
 + "  </tr>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],26:[function(require,module,exports){

uiscript_components.xtester = Castelog.metodos.un_componente_vue2("xtester",
  "<div class=\"Component xtester\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { data:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
mounted() {try {
window.xtesterr = this;
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
},{}],27:[function(require,module,exports){

uiscript_components.xtitle = Castelog.metodos.un_componente_vue2("xtitle",
  "<div class=\"Component xtitle\">"
 + "    <div class=\"content\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],28:[function(require,module,exports){

uiscript_components.xwindow = Castelog.metodos.un_componente_vue2("xwindow",
  "<div class=\"Component xwindow window\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],29:[function(require,module,exports){

uiscript_components.xwindowbody = Castelog.metodos.un_componente_vue2("xwindowbody",
  "<div class=\"Component xwindowbody window-body\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],30:[function(require,module,exports){

uiscript_components.xwindowfooter = Castelog.metodos.un_componente_vue2("xwindowfooter",
  "<div class=\"Component xwindowfooter status-bar\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],31:[function(require,module,exports){

uiscript_components.xwindowfooteritem = Castelog.metodos.un_componente_vue2("xwindowfooteritem",
  "<div class=\"Component xwindowfooteritem status-bar-field\">"
 + "    <slot></slot>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}],32:[function(require,module,exports){

uiscript_components.xwindowtitle = Castelog.metodos.un_componente_vue2("xwindowtitle",
  "<div class=\"Component xwindowtitle title-bar\">"
 + "    <div class=\"title-bar-text\">"
 + "      <slot></slot>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ 
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
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
},{}]},{},[1]);
