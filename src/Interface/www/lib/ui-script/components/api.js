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