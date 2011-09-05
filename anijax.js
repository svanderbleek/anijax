(function() {
  /*
  Anijax, animate your AJAX load, jQuery UI style, with Rails 3 UJS
  
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
        return this.bind('ajax:beforeSend', function() {
          return display.html(imageHTML);
        });
      }
    };
  })(jQuery);
}).call(this);
