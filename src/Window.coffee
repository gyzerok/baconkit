Bacon = require('baconjs').Bacon
Object = require('./Object')

class Window extends Object
  constructor (opts) ->
    if opts.window
      @window = opts
    else
      @window = gui.Window.open(url, opts)

  width: Bacon.fromEventTarget(@window, 'resize')
              .map((width) -> width)
              .toProperty()
              .startWith(@window.width)
  height: Bacon.fromEventTarget(@window, 'resize')
               .map((_, height) -> height)
               .toProperty()
               .startWith(@window.height)
  size: Bacon.combineTemplate({ width: @width, height: @height })

  isFullscreen: Bacon.mergeAll(
    Bacon.fromEventTarget(@window, 'enter-fullscreen').map(true)
    Bacon.fromEventTarget(@window, 'leave-fullscreen').map(false)
  ).toProperty().startWith(@window.isFullscreen)

  minimized: Bacon.mergeAll(
    Bacon.fromEventTarget(@window, 'minimize').map(true)
    Bacon.fromEventTarget(@window, 'restore').map(false)
  ).toProperty().startWith(@window.minimized)
  maximized: Bacon.mergeAll(
    Bacon.fromEventTarget(@window, 'maximized').map(true)
    Bacon.fromEventTarget(@window, 'unmaximized').map(false)
  ).toProperty().startWith(@window.maximized)

  title: Bacon.constant(@window.title)
  context: Bacon.constant(@window.window)

  resize: (width, height) -> @window.resizeTo(width = @window.width, height = @window.height)

  fullscreen: (bool = null) -> @window.isFullscreen = if bool then bool else not @window.isFullscreen
  kiosk: (bool) -> @window.isKioskMode = if bool then bool else not @window.isKioskMode

  maximize: -> @window.maximize()
  unmaximize: -> @window.unmaximize()
  minimize: -> @window.minimize()
  unminimize: -> @window.restore()

  focus: -> @window.focus()
  blur: -> @window.blur()
  show: -> @window.show()
  hide: -> @window.hide()
  reload: -> @window.reload()
  close: (force = false) -> @window.close(force)

module.exports = Window