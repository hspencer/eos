// *********************************
//
//   Colorplane - by Daniel Zarick
//   for more: http://33cc77.com
//
// *********************************

(function($){
  var ColorPlane = function(element, options) {
    this.$el            = $(element || '<div />').addClass('colorplane');
    this.$instructions  = $('<div class="colorplane-selected-color"><div class="colorplane-instructions">Click to select a color</div></div>')
    this.$canvas        = $('<canvas />');
    this.$color         = this.$canvas.css("background");
    this.context        = this.$canvas[0].getContext('2d');
    this.options        = options || {};

    this.render();
  };

  ColorPlane.fn = ColorPlane.prototype;

  ColorPlane.fn.render = function(){
    this.$el.html(this.$canvas);
    this.$el.prepend(this.$instructions);
    this.context.fillStyle = this.$color;
    this.addListeners();
  };

  ColorPlane.fn.addListeners = function() {
    this.$canvas.bind('touchmove', function(e) {
      e.preventDefault();
      var touch    = e.originalEvent.changedTouches[0];
      var hexColor = this.getHexColor(touch);
      this.showColor(hexColor);

      this.$canvas.one('touchend', function() {
        this.saveCurrentColor(hexColor);
      }.bind(this));
    }.bind(this));

    this.$canvas.bind('mousemove', function(e) {
      var hexColor = this.getHexColor(e);
      this.showColor(hexColor);

      this.$canvas.one('click', function() {
        this.saveCurrentColor(hexColor);
      }.bind(this));
    }.bind(this));
  };

  ColorPlane.fn.getHexColor = function(e) {
    var canvasOffset = this.$canvas.offset();
    var canvasX = e.pageX - canvasOffset.left;
    var canvasY = e.pageY - canvasOffset.top;
    var yPosition = (this.$canvas.height() - canvasY) / this.$canvas.height()  * 100;

    var hue = Math.round((this.$canvas.width() - canvasX) / this.$canvas.width() * 100);
    var lightness = Math.round(yPosition / 3 + 35);
    var saturation = Math.round(100 - (yPosition / 3 + 30));

    var HSL = tinycolor("hsl("+hue+"%,"+saturation+"%,"+lightness+"%)");
    $('#colorplane-current-hue').html(hue + "%");
    $('#colorplane-current-satur').html(saturation + "%");
    $('#colorplane-current-light').html(lightness + "%");
    var HEX = HSL.toHexString();
    return HEX;
  };

  ColorPlane.fn.showColor = function(hexColor) {
    this.context.fillStyle = hexColor;
    this.context.fillRect(0,0, this.$canvas.width(), this.$canvas.height());

    $('#colorplane-current-hex').html(hexColor);
    $('#colorplane-current-hex').css("color", hexColor);
    $('[id*="colorplane-current"]').css("color", hexColor);
  };

  ColorPlane.fn.saveCurrentColor = function(hexColor) {
    this.$el.trigger('change', hexColor);

    $('#colorplane-selected-hex').html(hexColor);
    $('#colorplane-selected-hex').css("color", hexColor);
    $('.colorplane-selected-color').css("background", hexColor);
  };

  $.fn.colorplane = function(options){
    return $(this).each(function(){
      $(this).data('colorplane', new ColorPlane(this, options));
    });
  };
})(jQuery);

jQuery(function($){
  $('.colorplane').colorplane()
});
