(function() {
  var Bacon, Object, Window,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Bacon = require('baconjs').Bacon;

  Object = require('./Object');

  Window = (function(_super) {
    __extends(Window, _super);

    function Window() {
      return Window.__super__.constructor.apply(this, arguments);
    }

    constructor(function(gui, opts) {
      if (opts.window != null) {
        return this.window = opts;
      } else {
        return this.window = gui.Window.open(url, opts);
      }
    });

    ({
      width: Bacon.fromEventTarget(Window.window, 'resize')
    }).map(function(width) {
      return width;
    }).toProperty().startWith(Window.window.width);

    ({
      height: Bacon.fromEventTarget(Window.window, 'resize')
    }).map(function(_, height) {
      return height;
    }).toProperty().startWith(Window.window.height);

    Window.prototype.size = Bacon.combineTemplate({
      width: Window.width,
      height: Window.height
    });

    Window.prototype.isFullscreen = Bacon.mergeAll(Bacon.fromEventTarget(Window.window, 'enter-fullscreen').map(true), Bacon.fromEventTarget(Window.window, 'leave-fullscreen').map(false)).toProperty().startWith(Window.window.isFullscreen);

    Window.prototype.minimized = Bacon.mergeAll(Bacon.fromEventTarget(Window.window, 'minimize').map(true), Bacon.fromEventTarget(Window.window, 'restore').map(false)).toProperty().startWith(Window.window.minimized);

    Window.prototype.maximized = Bacon.mergeAll(Bacon.fromEventTarget(Window.window, 'maximized').map(true), Bacon.fromEventTarget(Window.window, 'unmaximized').map(false)).toProperty().startWith(Window.window.maximized);

    Window.prototype.title = Bacon.constant(Window.window.title);

    Window.prototype.context = Bacon.constant(Window.window.window);

    Window.prototype.resize = function(width, height) {
      return this.window.resizeTo(width = this.window.width, height = this.window.height);
    };

    Window.prototype.fullscreen = function(bool) {
      if (bool == null) {
        bool = null;
      }
      return this.window.isFullscreen = bool ? bool : !this.window.isFullscreen;
    };

    Window.prototype.kiosk = function(bool) {
      return this.window.isKioskMode = bool ? bool : !this.window.isKioskMode;
    };

    Window.prototype.maximize = function() {
      return this.window.maximize();
    };

    Window.prototype.unmaximize = function() {
      return this.window.unmaximize();
    };

    Window.prototype.minimize = function() {
      return this.window.minimize();
    };

    Window.prototype.unminimize = function() {
      return this.window.restore();
    };

    Window.prototype.focus = function() {
      return this.window.focus();
    };

    Window.prototype.blur = function() {
      return this.window.blur();
    };

    Window.prototype.show = function() {
      return this.window.show();
    };

    Window.prototype.hide = function() {
      return this.window.hide();
    };

    Window.prototype.reload = function() {
      return this.window.reload();
    };

    Window.prototype.close = function(force) {
      if (force == null) {
        force = false;
      }
      return this.window.close(force);
    };

    return Window;

  })(Object);

  module.exports = Window;

}).call(this);
