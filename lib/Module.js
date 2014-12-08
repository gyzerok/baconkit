(function() {
  var Module, Object,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Object = require('./Object');

  Module = (function(_super) {
    __extends(Module, _super);

    function Module() {
      return Module.__super__.constructor.apply(this, arguments);
    }

    return Module;

  })(Object);

  module.exports = Module;

}).call(this);
