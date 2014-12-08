Bacon = require('baconjs').Bacon
Object = require('./Object')
Module = require('./Module')
Window = require('./Window')

class Application extends Object
  modules: {}

  constructor: (@browser, window) ->
    @gui = browser.require('nw.gui')
    @app = @gui.App
    @window = new Window(window)

  module: (name, moduleClass) ->
    if moduleClass? then @modules[name] = new moduleClass()
    @modules[name]

  onBeforeStart: ->
  onStart: ->
  start: ->
    @onBeforeStart()
    @window.show()
    @onStart()

  onBeforeStop: ->
  onStop: ->
  stop: ->
    @onBeforeStop()
    @window.close()
    @onStop()

  quit: () ->
    @app.quit()


module.exports = Application