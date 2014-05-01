(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
  } else {
      factory(jQuery);
  }
}(function ($) {
  $.fn.iframeShim = function (options) {
    return this.each(function() {
      var classNames = options.classNames || "";
      $(this).wrap("<div class='iframeshim-container'><div class='content-container'/></div>")
        .after("<iframe class='shim-iframe' frameborder='0' scrolling='no'/>")
        .parent().parent().addClass(classNames);
    });
  };
}));
