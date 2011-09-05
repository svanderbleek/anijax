# Anijax

Animate your AJAX load, jQuery UI style, with Rails 3 UJS

## Use

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
