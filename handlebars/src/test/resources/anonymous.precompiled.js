(function() {
  var template = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", functionType="function", escapeExpression=this.escapeExpression;


  buffer += "Hi "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "!";
  return buffer;
  });
  var templates = Handlebars.templates = Handlebars.templates || {};
  templates['input'] = template;
  var partials = Handlebars.partials = Handlebars.partials || {};
  partials['input'] = template;
})();