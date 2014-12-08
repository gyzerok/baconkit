Bacon = require('baconjs').Bacon
Object = require('./Object')
Window = require('./Window')

class Application extends Object
  constructor: (@browser, window) ->
    @gui = browser.require('nw.gui')
    @app = @gui.App
    @window = new Window(window)

  start: () ->
    @window.show()

  stop: () ->
    @window.close()

  quit: () ->
    @app.quit()


module.exports = Application