
class Backbone.TextView extends Backbone.View

  template: JST.text

  defaults:
    name: 'input'
    type: 'text'
    label: ''
    className: 'input-details'
    defaultValue: ''
    placeholder: ''
    disabled: false
    span: ''

  initialize: ->
    @options = _.defaults @options, @defaults
    @render()

  render: =>
    @$el.html @template
      name: @options.name
      type: @options.type
      label: @options.label
      className: @options.className
      defaultValue: if _.isFunction @options.defaultValue then @options.defaultValue() else @options.defaultValue
      placeholder: @options.placeholder
      disabled: @options.disabled
      span: @options.span
    this
