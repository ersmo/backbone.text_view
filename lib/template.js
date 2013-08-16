this["JST"] = this["JST"] || {};

this["JST"]["text"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),label = locals_.label,type = locals_.type,name = locals_.name,defaultValue = locals_.defaultValue,placeholder = locals_.placeholder,disabled = locals_.disabled,className = locals_.className,span = locals_.span;if ( typeof label != undefined)
{
buf.push(jade.escape(null == (jade.interp = label) ? "" : jade.interp));
}
buf.push("<input" + (jade.attrs({ 'type':(type), 'name':(name), 'value':(defaultValue), 'placeholder':(placeholder), 'disabled':(disabled), "class": [("" + (className) + " " + (span) + "")] }, {"type":true,"class":true,"name":true,"value":true,"placeholder":true,"disabled":true})) + "/>");;return buf.join("");
};