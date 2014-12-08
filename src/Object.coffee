_ = require('lodash')

class Object
  extend: (protoProps) ->
    parent = @
    child = null

    child = -> parent.apply(this, arguments)

    Surrogate = -> @constructor = child
    Surrogate.prototype = parent.prototype
    child.prototype = new Surrogate()

    if protoProps then _.extend(child.prototype, protoProps)
    child.__super__ = parent.prototype
    child

module.expors = Object