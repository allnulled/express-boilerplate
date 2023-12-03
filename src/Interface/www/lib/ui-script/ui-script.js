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
const xpage = require("./xpage/xpage.js");
const xpanel = require("./xpanel/xpanel.js");
const xparagraph = require("./xparagraph/xparagraph.js");
const xsubtitle = require("./xsubtitle/xsubtitle.js");
const xtable = require("./xtable/xtable.js");
const xtablecell = require("./xtablecell/xtablecell.js");
const xtablerow = require("./xtablerow/xtablerow.js");
const xtester = require("./xtester/xtester.js");
const xtitle = require("./xtitle/xtitle.js");
const xwindow = require("./xwindow/xwindow.js");
const xwindowbody = require("./xwindowbody/xwindowbody.js");
const xwindowfooter = require("./xwindowfooter/xwindowfooter.js");
const xwindowfooteritem = require("./xwindowfooteritem/xwindowfooteritem.js");
const xwindowtitle = require("./xwindowtitle/xwindowtitle.js");
const xstatic = require("./xstatic/xstatic.js");
const ast_parser = require("../../../../src/ui-script.parser.ast.js");
const parser = require("../../../../src/ui-script.parser.js");

Object.assign(window.uiscript_api, {
    ast: { parser: ast_parser },
    parser,
    components: window.uiscript_components
});

window.uiscript_api.default = window.uiscript_api;

module.exports = window.uiscript_api;
},{"../../../../src/ui-script.parser.ast.js":29,"../../../../src/ui-script.parser.js":30,"./xbreadcrumb/xbreadcrumb.js":2,"./xbutton/xbutton.js":3,"./xdialogport/xdialogcurrent.js":4,"./xdialogport/xdialogport.js":5,"./xform/xform.js":6,"./xformfield/xformfield.js":7,"./xjumbotron/xjumbotron.js":8,"./xlabel/xlabel.js":9,"./xlayout/xlayout.js":10,"./xlayoutnopaddingbottom/xlayoutnopaddingbottom.js":11,"./xlayoutnopaddingtop/xlayoutnopaddingtop.js":12,"./xlink/xlink.js":13,"./xpage/xpage.js":14,"./xpanel/xpanel.js":15,"./xparagraph/xparagraph.js":16,"./xstatic/xstatic.js":17,"./xsubtitle/xsubtitle.js":18,"./xtable/xtable.js":19,"./xtablecell/xtablecell.js":20,"./xtablerow/xtablerow.js":21,"./xtester/xtester.js":22,"./xtitle/xtitle.js":23,"./xwindow/xwindow.js":24,"./xwindowbody/xwindowbody.js":25,"./xwindowfooter/xwindowfooter.js":26,"./xwindowfooteritem/xwindowfooteritem.js":27,"./xwindowtitle/xwindowtitle.js":28}],2:[function(require,module,exports){

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
html_vue += "<xwindow>";
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
html_vue += "<xwindow>";
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
html_vue += "<xwindow>";
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
},{}],15:[function(require,module,exports){

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
},{}],16:[function(require,module,exports){

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
},{}],17:[function(require,module,exports){

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
},{}],18:[function(require,module,exports){

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
},{}],19:[function(require,module,exports){

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
},{}],20:[function(require,module,exports){

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
},{}],21:[function(require,module,exports){

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
},{}],22:[function(require,module,exports){

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
},{}],23:[function(require,module,exports){

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
},{}],24:[function(require,module,exports){

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
},{}],25:[function(require,module,exports){

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
},{}],26:[function(require,module,exports){

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
},{}],27:[function(require,module,exports){

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
},{}],28:[function(require,module,exports){

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
},{}],29:[function(require,module,exports){
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Language: peg$parseLanguage },
      peg$startRuleFunction  = peg$parseLanguage,

      peg$c0 = function(token0, sentencias, token1) { return reducir_sentencias(sentencias) },
      peg$c1 = "!",
      peg$c2 = peg$literalExpectation("!", false),
      peg$c3 = function(token0, token1, tag, atributos, contenido) { return { tag, atributos, contenido } },
      peg$c4 = /^[A-Za-z0-9_\-:$]/,
      peg$c5 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "_", "-", ":", "$"], false, false),
      peg$c6 = function() { return text() },
      peg$c7 = "[",
      peg$c8 = peg$literalExpectation("[", false),
      peg$c9 = "]",
      peg$c10 = peg$literalExpectation("]", false),
      peg$c11 = function(token0, token1, atributos, token2) { return atributos },
      peg$c12 = "=",
      peg$c13 = peg$literalExpectation("=", false),
      peg$c14 = function(token0, clave, token1, valor) { return { clave, valor } },
      peg$c15 = "'",
      peg$c16 = peg$literalExpectation("'", false),
      peg$c17 = "\\\\",
      peg$c18 = peg$literalExpectation("\\\\", false),
      peg$c19 = "\\'",
      peg$c20 = peg$literalExpectation("\\'", false),
      peg$c21 = peg$anyExpectation(),
      peg$c22 = function(token1, texto, token2) { return text() },
      peg$c23 = "\"",
      peg$c24 = peg$literalExpectation("\"", false),
      peg$c25 = "\\\"",
      peg$c26 = peg$literalExpectation("\\\"", false),
      peg$c27 = function(contenido) { return contenido },
      peg$c28 = "{{",
      peg$c29 = peg$literalExpectation("{{", false),
      peg$c30 = "}}",
      peg$c31 = peg$literalExpectation("}}", false),
      peg$c32 = function(token0, token1, contenido, token2) { return contenido },
      peg$c33 = "\\}}",
      peg$c34 = peg$literalExpectation("\\}}", false),
      peg$c35 = function(contenido) { return text().trim() },
      peg$c36 = "{",
      peg$c37 = peg$literalExpectation("{", false),
      peg$c38 = "}",
      peg$c39 = peg$literalExpectation("}", false),
      peg$c40 = function() {},
      peg$c41 = "\t",
      peg$c42 = peg$literalExpectation("\t", false),
      peg$c43 = " ",
      peg$c44 = peg$literalExpectation(" ", false),
      peg$c45 = "\r\n",
      peg$c46 = peg$literalExpectation("\r\n", false),
      peg$c47 = "\r",
      peg$c48 = peg$literalExpectation("\r", false),
      peg$c49 = "\n",
      peg$c50 = peg$literalExpectation("\n", false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseLanguage() {
    var s0;

    s0 = peg$parseSentencias();

    return s0;
  }

  function peg$parseSentencias() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseTag();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseTag();
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTag() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c1;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNombre();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAtributos();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseContenido();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1, s2, s3, s4, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNombre() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c4.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c5); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c4.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseAtributos() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c7;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseAtributo();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseAtributo();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s4 = peg$c9;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c11(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAtributo() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNombre();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c12;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseTexto_entre_comillas();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c14(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTexto_entre_comillas() {
    var s0;

    s0 = peg$parseTexto_entre_comillas_simples();
    if (s0 === peg$FAILED) {
      s0 = peg$parseTexto_entre_comillas_dobles();
    }

    return s0;
  }

  function peg$parseTexto_entre_comillas_simples() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c15;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 39) {
        s5 = peg$c15;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c17) {
          s5 = peg$c17;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s5 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c19) {
            s5 = peg$c19;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s5 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c21); }
            }
          }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 39) {
          s5 = peg$c15;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c17) {
            s5 = peg$c17;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
          }
          if (s5 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c19) {
              s5 = peg$c19;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }
            if (s5 === peg$FAILED) {
              if (input.length > peg$currPos) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c21); }
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c15;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTexto_entre_comillas_dobles() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c23;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 34) {
        s5 = peg$c23;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c17) {
          s5 = peg$c17;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s5 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c25) {
            s5 = peg$c25;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c26); }
          }
          if (s5 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c21); }
            }
          }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 34) {
          s5 = peg$c23;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c24); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c17) {
            s5 = peg$c17;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
          }
          if (s5 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c25) {
              s5 = peg$c25;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c26); }
            }
            if (s5 === peg$FAILED) {
              if (input.length > peg$currPos) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c21); }
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c23;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c24); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseContenido() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseContenido_2();
    if (s1 === peg$FAILED) {
      s1 = peg$parseContenido_1();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c27(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseContenido_2() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c28) {
        s2 = peg$c28;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNegacion_de_cierre_de_dobles_corchetes_curvados();
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c30) {
            s4 = peg$c30;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c32(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNegacion_de_cierre_de_dobles_corchetes_curvados() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    if (input.substr(peg$currPos, 2) === peg$c30) {
      s4 = peg$c30;
      peg$currPos += 2;
    } else {
      s4 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c33) {
        s4 = peg$c33;
        peg$currPos += 3;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c34); }
      }
      if (s4 === peg$FAILED) {
        if (input.length > peg$currPos) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c30) {
          s4 = peg$c30;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c33) {
            s4 = peg$c33;
            peg$currPos += 3;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c34); }
          }
          if (s4 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c21); }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c35(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseContenido_1() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 123) {
        s2 = peg$c36;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSentencias();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s4 = peg$c38;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c32(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    s0 = peg$parse__();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parse___();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c40();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parse__() {
    var s0, s1;

    if (input.charCodeAt(peg$currPos) === 9) {
      s0 = peg$c41;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c42); }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 32) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c40();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parse___() {
    var s0, s1;

    if (input.substr(peg$currPos, 2) === peg$c45) {
      s0 = peg$c45;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c47;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c48); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 10) {
          s1 = peg$c49;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c50); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c40();
        }
        s0 = s1;
      }
    }

    return s0;
  }


  	const reducir_sentencia_a_html = function(ast) {
  		const { tag, atributos, contenido } = ast;
  		let html = "";
  		html += "<";
  		html += tag;
  		if(atributos) {
  			for(let i=0; i<atributos.length; i++) {
  				const { clave, valor } = atributos[i];
  				html += " ";
  				html += clave;
  				html += "=";
  				html += valor;
  			}
  		}
  		html += ">";
  		if(contenido) {
  			html += "\n";
  			if(Array.isArray(contenido)) {
  				for(let i=0; i<contenido.length; i++) {
  					const item = contenido[i];
  					html += reducir_sentencia_a_html(item);
  				}
  			} else if(typeof contenido === "string") {
  				html += contenido;
  			}
  			html += "\n";
  		}
  		html += "</";
  		html += tag;
  		html += ">";
  		return html;
  	};
  	const reducir_sentencias = function(sentencias) {
  		return sentencias;
  		return sentencias.map(item => reducir_sentencia_a_html(item)).join("\n");
  	};


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};

},{}],30:[function(require,module,exports){
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Language: peg$parseLanguage },
      peg$startRuleFunction  = peg$parseLanguage,

      peg$c0 = function(token0, sentencias, token1) { return reducir_sentencias(sentencias) },
      peg$c1 = "!",
      peg$c2 = peg$literalExpectation("!", false),
      peg$c3 = function(token0, token1, tag, atributos, contenido) { return { tag, atributos, contenido } },
      peg$c4 = /^[A-Za-z0-9_\-:$]/,
      peg$c5 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "_", "-", ":", "$"], false, false),
      peg$c6 = function() { return text() },
      peg$c7 = "[",
      peg$c8 = peg$literalExpectation("[", false),
      peg$c9 = "]",
      peg$c10 = peg$literalExpectation("]", false),
      peg$c11 = function(token0, token1, atributos, token2) { return atributos },
      peg$c12 = "=",
      peg$c13 = peg$literalExpectation("=", false),
      peg$c14 = function(token0, clave, token1, valor) { return { clave, valor } },
      peg$c15 = "'",
      peg$c16 = peg$literalExpectation("'", false),
      peg$c17 = "\\\\",
      peg$c18 = peg$literalExpectation("\\\\", false),
      peg$c19 = "\\'",
      peg$c20 = peg$literalExpectation("\\'", false),
      peg$c21 = peg$anyExpectation(),
      peg$c22 = function(token1, texto, token2) { return text() },
      peg$c23 = "\"",
      peg$c24 = peg$literalExpectation("\"", false),
      peg$c25 = "\\\"",
      peg$c26 = peg$literalExpectation("\\\"", false),
      peg$c27 = function(contenido) { return contenido },
      peg$c28 = "{{",
      peg$c29 = peg$literalExpectation("{{", false),
      peg$c30 = "}}",
      peg$c31 = peg$literalExpectation("}}", false),
      peg$c32 = function(token0, token1, contenido, token2) { return contenido },
      peg$c33 = "\\}}",
      peg$c34 = peg$literalExpectation("\\}}", false),
      peg$c35 = function(contenido) { return text().trim() },
      peg$c36 = "{",
      peg$c37 = peg$literalExpectation("{", false),
      peg$c38 = "}",
      peg$c39 = peg$literalExpectation("}", false),
      peg$c40 = function() {},
      peg$c41 = "\t",
      peg$c42 = peg$literalExpectation("\t", false),
      peg$c43 = " ",
      peg$c44 = peg$literalExpectation(" ", false),
      peg$c45 = "\r\n",
      peg$c46 = peg$literalExpectation("\r\n", false),
      peg$c47 = "\r",
      peg$c48 = peg$literalExpectation("\r", false),
      peg$c49 = "\n",
      peg$c50 = peg$literalExpectation("\n", false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseLanguage() {
    var s0;

    s0 = peg$parseSentencias();

    return s0;
  }

  function peg$parseSentencias() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseTag();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseTag();
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c0(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTag() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c1;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c2); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNombre();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseAtributos();
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseContenido();
            if (s5 === peg$FAILED) {
              s5 = null;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c3(s1, s2, s3, s4, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNombre() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c4.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c5); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c4.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c5); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c6();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseAtributos() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 91) {
        s2 = peg$c7;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parseAtributo();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parseAtributo();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 93) {
            s4 = peg$c9;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c11(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAtributo() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNombre();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s3 = peg$c12;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parseTexto_entre_comillas();
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c14(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTexto_entre_comillas() {
    var s0;

    s0 = peg$parseTexto_entre_comillas_simples();
    if (s0 === peg$FAILED) {
      s0 = peg$parseTexto_entre_comillas_dobles();
    }

    return s0;
  }

  function peg$parseTexto_entre_comillas_simples() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c15;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 39) {
        s5 = peg$c15;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c16); }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c17) {
          s5 = peg$c17;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s5 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c19) {
            s5 = peg$c19;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c20); }
          }
          if (s5 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c21); }
            }
          }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 39) {
          s5 = peg$c15;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c17) {
            s5 = peg$c17;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
          }
          if (s5 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c19) {
              s5 = peg$c19;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c20); }
            }
            if (s5 === peg$FAILED) {
              if (input.length > peg$currPos) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c21); }
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c15;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c16); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTexto_entre_comillas_dobles() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c23;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c24); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 34) {
        s5 = peg$c23;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c17) {
          s5 = peg$c17;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c18); }
        }
        if (s5 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c25) {
            s5 = peg$c25;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c26); }
          }
          if (s5 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c21); }
            }
          }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 34) {
          s5 = peg$c23;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c24); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c17) {
            s5 = peg$c17;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c18); }
          }
          if (s5 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c25) {
              s5 = peg$c25;
              peg$currPos += 2;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c26); }
            }
            if (s5 === peg$FAILED) {
              if (input.length > peg$currPos) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c21); }
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c23;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c24); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseContenido() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseContenido_2();
    if (s1 === peg$FAILED) {
      s1 = peg$parseContenido_1();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c27(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseContenido_2() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c28) {
        s2 = peg$c28;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNegacion_de_cierre_de_dobles_corchetes_curvados();
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c30) {
            s4 = peg$c30;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c31); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c32(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNegacion_de_cierre_de_dobles_corchetes_curvados() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    if (input.substr(peg$currPos, 2) === peg$c30) {
      s4 = peg$c30;
      peg$currPos += 2;
    } else {
      s4 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c31); }
    }
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      if (input.substr(peg$currPos, 3) === peg$c33) {
        s4 = peg$c33;
        peg$currPos += 3;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c34); }
      }
      if (s4 === peg$FAILED) {
        if (input.length > peg$currPos) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c30) {
          s4 = peg$c30;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c33) {
            s4 = peg$c33;
            peg$currPos += 3;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c34); }
          }
          if (s4 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c21); }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c35(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseContenido_1() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 123) {
        s2 = peg$c36;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSentencias();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s4 = peg$c38;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c32(s1, s2, s3, s4);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    s0 = peg$parse__();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parse___();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c40();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parse__() {
    var s0, s1;

    if (input.charCodeAt(peg$currPos) === 9) {
      s0 = peg$c41;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c42); }
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 32) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c40();
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parse___() {
    var s0, s1;

    if (input.substr(peg$currPos, 2) === peg$c45) {
      s0 = peg$c45;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c46); }
    }
    if (s0 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 13) {
        s0 = peg$c47;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c48); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 10) {
          s1 = peg$c49;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c50); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c40();
        }
        s0 = s1;
      }
    }

    return s0;
  }


  	const reducir_sentencia_a_html = function(ast) {
  		const { tag, atributos, contenido } = ast;
  		let html = "";
  		html += "<";
  		html += tag;
  		if(atributos) {
  			for(let i=0; i<atributos.length; i++) {
  				const { clave, valor } = atributos[i];
  				html += " ";
  				html += clave;
  				html += "=";
  				html += valor;
  			}
  		}
  		html += ">";
  		if(contenido) {
  			html += "\n";
  			if(Array.isArray(contenido)) {
  				for(let i=0; i<contenido.length; i++) {
  					const item = contenido[i];
  					html += reducir_sentencia_a_html(item);
  				}
  			} else if(typeof contenido === "string") {
  				html += contenido;
  			}
  			html += "\n";
  		}
  		html += "</";
  		html += tag;
  		html += ">";
  		return html;
  	};
  	const reducir_sentencias = function(sentencias) {
  		return sentencias.map(item => reducir_sentencia_a_html(item)).join("\n");
  	};


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};

},{}]},{},[1]);
