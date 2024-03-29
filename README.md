# Anijax

Animate your AJAX load, jQuery UI style, with Rails 3 UJS

## Use

Defaults to filling in the element that sends the ajax request,
which you probably don't want so change that. Assumes that you
will be filling in the display element with a response thus
wiping out the loading animation.

Examples:

    $.fn.anijax({ displayImage: 'load.gif' })
    $('#form-with-remote-true').anijax()

    $.fn.anijax({ 
      className: 'some-class',
      displayImage: 'load.gif', 
      displayElement: $('#some-element-to-fill-in')  
    })
    $('#form-with-remote-true').anijax()
    $('#other-form-with-remote-true').anijax({ 
      displayElement: $('other-element-to-fill-in) 
    })

Note in the last example how two different ajax senders
can have different display elements. The same holds for classes
and images.
