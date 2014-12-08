(function() {
  var Object, _;

  _ = require('lodash');

  Object = (function() {
    function Object() {}

    Object.prototype.extend = function(protoProps) {
      var Surrogate, child, parent;
      parent = this;
      child = null;
      child = function() {
        return parent.apply(this, arguments);
      };
      Surrogate = function() {
        return this.constructor = child;
      };
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();
      if (protoProps) {
        _.extend(child.prototype, protoProps);
      }
      child.__super__ = parent.prototype;
      return child;
    };

    return Object;

  })();

  module.expors = Object;

}).call(this);
