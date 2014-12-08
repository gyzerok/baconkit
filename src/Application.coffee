Bacon = require('baconjs').Bacon
Object = require('./Object')
Module = require('./Module')
Window = require('./Window')

class Application extends Object
  modules: {}
  windows: {}

  constructor: (@browser, window) ->
    @gui = browser.require('nw.gui')
    @app = @gui.App
    @window = @window('main', gui, gui.Window.get())

  window: (name, windowClass, opts) ->
    if windowClass? then @windows[name] = new windowClass(@gui, opts)
    @windows[name]

  module: (name, moduleClass) ->
    if moduleClass? then @modules[name] = new moduleClass()
    @modules[name]

  onBeforeStart: ->
  onStart: ->
  start: ->
    @onBeforeStart()
    @windows.main.show()
    @onStart()

  onBeforeStop: ->
  onStop: ->
  stop: ->
    @onBeforeStop()
    @windows.main.close()
    @onStop()

  quit: () ->
    @app.quit()


module.exports = Application