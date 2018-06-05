/////
var d = new Date();
$("#currYear").text(d.getFullYear());


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
var execScroll = function() {
    
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    if (w > 767)
    {
        fixTitle("chapter-title-profile", "chapter-content-profile");
        fixTitle("chapter-title-resume", "chapter-content-resume");
        fixTitle("chapter-title-contact", "chapter-content-contact");
    }
    fixArrows();
};

function fixTitle(titleId, contentId) {
    var navbarOffset = 45;
    
    var titleRef = "#" + titleId;
    var contentRef = "#" + contentId;
    
    var title = $(titleRef);
    var content = $(contentRef);

    var titleHeight = title.outerHeight(),
        contentHeight = content.outerHeight(),
        contentOffsetTop = content.offset().top,
        currPos = window.pageYOffset;

    if (currPos <= contentOffsetTop - navbarOffset)
    {
        title.removeClass("title-fixed");
        content.removeClass("left-side");
        title.css("top", 0);
    }
    else if (currPos > (contentOffsetTop - navbarOffset + contentHeight - titleHeight))
    {
        title.removeClass("title-fixed");
        content.removeClass("left-side");
        title.css("top", contentHeight - titleHeight);
    }
    else
    {
        title.css("top", navbarOffset);
        title.addClass("title-fixed");
        content.addClass("left-side");
    }
}

function fixArrows() {
    var navbarOffset = 45;
    var viewHeight = $(window).height();
    
    var arrowLeftId = "#arrow-left-side";
    var arrowRightId = "#arrow-right-side";
    var titleRef = "#chapter-title-resume";
    var contentRef = "#chapter-content-resume";
    
    var arrowLeft = $(arrowLeftId);
    var arrowRight = $(arrowRightId);
    var title = $(titleRef);
    var content = $(contentRef);
    

    var titleHeight = title.outerHeight(),
        contentHeight = content.outerHeight(),
        contentOffsetTop = content.offset().top,
        currPos = window.pageYOffset;

    if (currPos <= contentOffsetTop - navbarOffset)
    {
        arrowLeft.removeClass("arrow-fixed arrow-fixed-left");
        arrowLeft.css("top", "");
        arrowRight.removeClass("arrow-fixed arrow-fixed-right");
        arrowRight.css("top", "");
    }
    else if (currPos > (contentOffsetTop - navbarOffset + contentHeight - titleHeight))
    {
        arrowLeft.removeClass("arrow-fixed arrow-fixed-left");
        arrowLeft.css("top", contentHeight - viewHeight/2 + 6);
        arrowRight.removeClass("arrow-fixed arrow-fixed-right");
        arrowRight.css("top", contentHeight - viewHeight/2 + 6);
    }
    else
    {
        arrowLeft.addClass("arrow-fixed arrow-fixed-left");
        arrowLeft.css("top", "");
        arrowRight.addClass("arrow-fixed arrow-fixed-right");
        arrowRight.css("top", "");
    }
}

$(document).on( 'scroll', execScroll);
$(window).on( 'resize', execScroll);


///// Animate timeline
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}








///// Expanding timeline details
updateButtons();




function updateButtons() {
    $(".expand-left-side").click(expandLeftSide);
    $(".expand-right-side").click(expandRightSide);
    $(".collapse-right-side").click(collapseRightSide);
    $(".collapse-left-side").click(collapseLeftSide);
};



///// Collapsing timeline details
function collapseLeftSide() {
    
    // Modify right arrow action
    $("#arrow-right-side").removeClass("collapse-left-side");
    $("#arrow-right-side").addClass("expand-right-side");
    $("#arrow-right-side").off("click");
    
    // Hides divider
    $(".item-details").removeClass("timeline-details-divider");
    
    setTimeout(function(){
        // Hides details for each item
        $(".item-details").removeClass("timeline-details-expand");
        
        
        setTimeout(function(){
            // Collapses container from the left side
            $(".timeline-container").removeClass("timeline-width-100");
            $(".container-left").removeClass("timeline-width-100");
            
            // Adds container from the right side to normal flow
            $(".container-right").removeClass("timeline-absolute");

        
            setTimeout(function(){
                
                // Displays left arrow
                $("#arrow-left-side").removeClass("timeline-hidden");
                
                // Displays container from the right side
                $(".timeline-item-content").removeClass("timeline-max-none");
                $(".container-right").removeClass("timeline-hidden");
                
                updateButtons();
                
            }, 500);
            
        }, 500);
        
    }, 500);
    
};

function collapseRightSide() {
    
    // Modify right arrow action
    $("#arrow-left-side").removeClass("collapse-right-side");
    $("#arrow-left-side").addClass("expand-left-side");
    $("#arrow-left-side").off("click");
    
    // Hides divider
    $(".item-details").removeClass("timeline-details-divider");
    
    setTimeout(function(){
        // Hides details for each item
        $(".item-details").removeClass("timeline-details-expand");
        
        
        setTimeout(function(){
            // Collapses container from the left side
            $(".timeline-container").removeClass("timeline-width-100");
            $(".container-right").removeClass("timeline-width-100");
            
            setTimeout(function(){
                
                // Adds container from the right side to normal flow
                $(".container-left").removeClass("timeline-absolute");
                
                // Displays left arrow
                $("#arrow-right-side").removeClass("timeline-hidden");
                
                // Displays container from the right side
                $(".timeline-item-content").removeClass("timeline-max-none");
                $(".container-left").removeClass("timeline-hidden");
                
                updateButtons();
                
            }, 500);
            
        }, 500);
        
    }, 500);
    
};


//Expanding timeline details
function expandRightSide() {
    
    // Hides container from the left side
    $(".container-left").addClass("timeline-hidden");
    
    // Hides right arrow
    $("#arrow-right-side").addClass("timeline-hidden");
    
    // Modify left arrow action
    $("#arrow-left-side").removeClass("expand-left-side");
    $("#arrow-left-side").addClass("collapse-right-side");
    $("#arrow-left-side").off("click");
    
    setTimeout(function(){
        
        $(".timeline-container").addClass("timeline-width-100");
        
        // Removes container from the left side from normal flow
        $(".container-left").addClass("timeline-absolute");
        $(".container-right").css("margin-left", "auto");
        $(".container-right").css("margin-right", 0);
        
        setTimeout(function() {
        
            $(".timeline-item-content").addClass("timeline-max-none");

            // Expands container from the right side
            $(".container-right").addClass("timeline-width-100");

            setTimeout(function(){
                // Displays details for each item
                $(".item-details").addClass("timeline-details-expand");

                // Displays divider
                $(".item-details").addClass("timeline-details-divider");

                updateButtons();

            }, 500);
        }, 500);
        
    }, 500);
    
};

function expandLeftSide() {
    
    // Hides container from the right side
    $(".container-right").addClass("timeline-hidden");
    
    // Hides left arrow
    $("#arrow-left-side").addClass("timeline-hidden");
    
    // Modify right arrow action
    $("#arrow-right-side").removeClass("expand-right-side");
    $("#arrow-right-side").addClass("collapse-left-side");
    $("#arrow-right-side").off("click");
    
    setTimeout(function(){
        // Removes container from the right side from normal flow
        $(".container-right").addClass("timeline-absolute");
    
        // Expands container from the left side
        $(".container-left").addClass("timeline-width-100");
        $(".timeline-container").addClass("timeline-width-100");
        $(".timeline-item-content").addClass("timeline-max-none");
        
        setTimeout(function(){
            // Displays details for each item
            $(".item-details").addClass("timeline-details-expand");
            
            // Displays divider
            $(".item-details").addClass("timeline-details-divider");
            
            updateButtons();
            
        }, 500);
        
    }, 500);
    
};