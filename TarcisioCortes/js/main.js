///// Smooth scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    var navbarOffset = 45;
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - navbarOffset
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          // OBS: commented lines below in order to ensure offset is respected
          var $target = $(target);
//          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
//            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//            $target.focus(); // Set focus again
          };
        });
      }
    }
  });





///// Fixing chapter title on scroll

var tes = function(){
    
   console.log('Event Fired');
    
};

var execScroll = function() {
    
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    if (w > 767)
    {
        var title = $("#chapter-title-resume");
        var content = $("#chapter-content-resume");

        var titleHeight = title.outerHeight(),
            contentHeight = content.outerHeight(),
            contentOffsetTop = content.offset().top,
            currPos = window.pageYOffset;

        if (currPos <= contentOffsetTop - 45)
        {
            title.removeClass("title-fixed");
            content.removeClass("left-side");
            title.css("top", 0);
        }
        else if (currPos > (contentOffsetTop - 45 + contentHeight - titleHeight))
        {
            title.removeClass("title-fixed");
            content.removeClass("left-side");
            title.css("top", contentHeight - titleHeight);
        }
        else
        {
            title.css("top", 45);
            title.addClass("title-fixed");
            content.addClass("left-side");
        }
    }
};

$(document).on( 'scroll', execScroll);
$(document).on( 'resize', execScroll);