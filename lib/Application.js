(function() {
  var Application, Bacon, Module, Object, Window,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bacon = require('baconjs').Bacon;

  Object = require('./Object');

  Module = require('./Module');

  Window = require('./Window');

  Application = (function(_super) {
    __extends(Application, _super);

    Application.prototype.modules = {};

    Application.prototype.windows = {};

    function Application(browser) {
      this.browser = browser;
      this.gui = browser.require('nw.gui');
      this.app = this.gui.App;
      this.window = this.window('main', gui.Window.get());
    }

    Application.prototype.window = function(name, windowClass, opts) {
      if (windowClass != null) {
        this.windows[name] = new windowClass(this.gui, opts);
      }
      return this.windows[name];
    };

    Application.prototype.module = function(name, moduleClass) {
      if (moduleClass != null) {
        this.modules[name] = new moduleClass();
      }
      return this.modules[name];
    };

    Application.prototype.onBeforeStart = function() {};

    Application.prototype.onStart = function() {};

    Application.prototype.start = function() {
      this.onBeforeStart();
      this.windows.main.show();
      return this.onStart();
    };

    Application.prototype.onBeforeStop = function() {};

    Application.prototype.onStop = function() {};

    Application.prototype.stop = function() {
      this.onBeforeStop();
      this.windows.main.close();
      return this.onStop();
    };

    Application.prototype.quit = function() {
      return this.app.quit();
    };

    return Application;

  })(Object);

  module.exports = Application;

}).call(this);
