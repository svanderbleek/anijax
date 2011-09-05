###
Anijax, animate your AJAX load, jQuery UI style, with Rails 3 UJS

Defaults to filling in the element that sends the ajax request,
which you probably don't want so change that.

Examples:

$.fn.anijax({ displayImage: 'load.gif' })
$('#form-with-remote-true').anijax()

$.fn.anijax({ 
  className: 'some-class',
  displayImage: 'load.gif', 
  displayElement: $('#some-element-to-fill-in')  
})
$('#form-with-remote-true').anijax()
   
Author: Sandy Vanderbleek (sandy.vanderbleek@gmail.com)
Github: svanderbleek/anijax

License: WTFBPPL (http://tomlea.co.uk/WTFBPPL.txt)
###

(($) -> 
  settings =
    displayElement: undefined
    className: ''
    imagePath: ''

  $.fn.anijax = (options) ->
    $.extend(settings, options) if options
    
    if this.length 
      settings.displayElement ?= this
      display = settings.displayElement
      imageHTML = "<img class=\"#{settings.className}\"
                        src=\"#{settings.imagePath}\"/>"
      
      this.bind 'ajax:beforeSend', ->
        display.html(imageHTML)
      this.bind 'ajax:compelete', ->
        display.html('')
)(jQuery)
