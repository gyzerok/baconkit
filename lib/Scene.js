(function() {
  var Object, Scene,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Object = require('./Object');

  Scene = (function(_super) {
    __extends(Scene, _super);

    function Scene() {
      return Scene.__super__.constructor.apply(this, arguments);
    }

    return Scene;

  })(Object);

  module.exports = Scene;

}).call(this);
