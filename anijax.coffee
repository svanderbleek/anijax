###
Anijax, animate your AJAX load, jQuery UI style, with Rails 3 UJS

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
)(jQuery)
