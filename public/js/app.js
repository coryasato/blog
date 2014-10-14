(function($) {

  // jQuery ready
  $(function() {
    // Rotation animation helper
    $.fn.animateRotate = function(angle, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if(step) { return step.apply(this, arguments);  }
        };
        $({deg: 0}).animate({deg: angle}, args);
      });
    };

    var $nav = $('ul.nav.navbar-nav');
    var $navContainer = $('.nav-container');
    
    // Toggle navbar
    $navContainer.on('click', function(e) {
      e.preventDefault();
      var $self = $(this);

      if($nav.css('visibility') === 'hidden') {
        $self.animateRotate(360, 500, 'linear');
        $nav.css({visibility: 'visible'}).removeClass('fadeOutLeft').addClass('fadeInLeft');
      } else if ($nav.css('visibility') === 'visible') {
        $self.animateRotate(-360, 500, 'linear');
        $nav.removeClass('fadeInLeft').addClass('fadeOutLeft');
        setTimeout(function() {
          $nav.css({visibility: 'hidden'});
        }, 300);
      }
    });

  });

} (jQuery));