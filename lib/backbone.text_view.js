(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.TextView = (function(_super) {
    __extends(TextView, _super);

    function TextView() {
      this.render = __bind(this.render, this);
      _ref = TextView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TextView.prototype.template = JST.text;

    TextView.prototype.defaults = {
      name: 'input',
      type: 'text',
      label: '',
      className: 'input-details',
      defaultValue: '',
      placeholder: '',
      disabled: false,
      span: ''
    };

    TextView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      return this.render();
    };

    TextView.prototype.render = function() {
      this.$el.html(this.template({
        name: this.options.name,
        type: this.options.type,
        label: this.options.label,
        className: this.options.className,
        defaultValue: _.isFunction(this.options.defaultValue) ? this.options.defaultValue() : this.options.defaultValue,
        placeholder: this.options.placeholder,
        disabled: this.options.disabled,
        span: this.options.span
      }));
      return this;
    };

    return TextView;

  })(Backbone.View);

}).call(this);
