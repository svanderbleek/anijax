(function() {
  /*
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
  */  (function($) {
    var settings;
    settings = {
      displayElement: void 0,
      className: '',
      imagePath: ''
    };
    return $.fn.anijax = function(options) {
      var display, imageHTML, _ref;
      if (options) {
        $.extend(settings, options);
      }
      if (this.length) {
                if ((_ref = settings.displayElement) != null) {
          _ref;
        } else {
          settings.displayElement = this;
        };
        display = settings.displayElement;
        imageHTML = "<img class=\"" + settings.className + "\"                        src=\"" + settings.imagePath + "\"/>";
        this.bind('ajax:beforeSend', function() {
          return display.html(imageHTML);
        });
        return this.bind('ajax:compelete', function() {
          return display.html('');
        });
      }
    };
  })(jQuery);
}).call(this);
