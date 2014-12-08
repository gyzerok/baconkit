(function() {
  var Application, Bacon, Object, Window,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bacon = require('baconjs').Bacon;

  Object = require('./Object');

  Window = require('./Window');

  Application = (function(_super) {
    __extends(Application, _super);

    function Application(browser, window) {
      this.browser = browser;
      this.gui = browser.require('nw.gui');
      this.app = this.gui.App;
      this.window = new Window(window);
    }

    Application.prototype.start = function() {
      return this.window.show();
    };

    Application.prototype.stop = function() {
      return this.window.close();
    };

    Application.prototype.quit = function() {
      return this.app.quit();
    };

    return Application;

  })(Object);

  module.exports = Application;

}).call(this);
