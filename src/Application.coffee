Bacon = require('baconjs').Bacon
Object = require('./Object')
Window = require('./Window')

class Application extends Object
  constructor: (@browser, window) ->
    @gui = browser.require('nw.gui')
    @app = @gui.App
    @window = new Window(window)

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