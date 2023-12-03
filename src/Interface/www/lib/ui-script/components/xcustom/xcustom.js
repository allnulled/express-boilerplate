
window.uiscript_api.xcustom = { 
};
window.uiscript_api.xcustom.create_by_code = function( code ) {try {
const valores = window.eval( '(function(){' + code + '})()' );
return window.uiscript_api.xcustom.create( valores );
} catch(error) {
console.log(error);
throw error;
}

};
window.uiscript_api.xcustom.update_by_code = function( id,
code ) {try {
const valores = window.eval( '(function(){' + code + '})()' );
return window.uiscript_api.xcustom.update( id,
valores );
} catch(error) {
console.log(error);
throw error;
}

};
window.uiscript_api.xcustom.create = function( valores ) {try {
const id = "xcustom" + Castelog.metodos.un_texto_aleatorio(5, undefined);
Vue.component( id,
valores );
return id;
} catch(error) {
console.log(error);
throw error;
}

};
window.uiscript_api.xcustom.update = function( id,
valores ) {try {
Vue.component( id,
valores );
return id;
} catch(error) {
console.log(error);
throw error;
}

};
window.uiscript_api.xcustom.delete = function( id ) {try {
delete Vue.options.components[ id ];
return true;
} catch(error) {
console.log(error);
throw error;
}

};
window.uiscript_api.xcustom.reset_component = function( component ) {try {
component.is_showing = false;
component.$forceUpdate( true );
setTimeout( function() {try {
component.is_showing = true;
component.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
0 );
return true;
} catch(error) {
console.log(error);
throw error;
}

};
uiscript_components.xcustom = Castelog.metodos.un_componente_vue2("xcustom",
  "<div class=\"Component xcustom\">"
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
mounted() {try {
Vue.prototype.$xcustom = this;
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