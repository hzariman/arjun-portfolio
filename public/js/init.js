/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/
var words = ['Cringe', 'Simping', 'being thicc'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 50,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

function createTextSlideAnimation(sentences, timer = 5000) {
   console.log("Initializing text slide animation...");
 
   // Ensure the box exists. PROBLEM HERE TODO MAYBE TRY WITHOUT JQUERY
   const $box = $('#box');
   if ($box.length === 0) {
     console.error("Error: The container with id 'box' was not found in the DOM.");
     return;
   }
 
   // Append the text slides to the container
   var total = sentences.length - 1;
   console.log("Total number of sentences:", total + 1);
 
   for (var i = 0; i <= total; i++) {
     console.log(`Creating slide for sentence ${i + 1}:`, sentences[i]);
     $box.append('<p class="text-slide" id="textSlide'+i+'"></p>');
      
     var max = sentences[i].length - 1;
     console.log(`Number of characters in sentence ${i + 1}:`, max + 1);
 
     for (var j = 0; j <= max; j++) {
       var char = sentences[i].charAt(j);
       var transitionTime = Math.random() * 3;
       var transitionDelay = Math.random();
       console.log(`Appending character '${char}' with transition time: ${transitionTime}s and delay: ${transitionDelay}s`);
       $('#textSlide'+i).append('<span class="animated-letter" style="transition: ' + transitionTime +'s; transition-delay: ' + transitionDelay +'s;">' + char + '</span>'); 
     }
   } 
 
   var maxSlideIndex = $box.find('p').length;
   console.log("Total number of slides created:", maxSlideIndex);
 
   if (maxSlideIndex === 0) {
     console.error("Error: No slides were created. Check if the box element is being correctly selected and if sentences are not empty.");
     return;
   }
 
   var r = 0;
   console.log("Starting animation with first slide active.");
 
   $('#textSlide' + r).addClass('active-slide');
 
   setInterval(function(){ 
     console.log("Removing active class from slide:", r);
     $('#textSlide' + r).removeClass('active-slide');
 
     r++;
 
     if (r == maxSlideIndex) {
       console.log("Last slide reached, looping back to the first slide.");
       r = 0;
     }
 
     setTimeout(function(){ 
       console.log("Adding active class to slide:", r);
       $('#textSlide' + r).addClass('active-slide');
     }, 2000);
 
   }, timer);
 }
 
(function($) {

   /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */
 
   $.fn.visible = function(partial) {
     
       var $t            = $(this),
           $w            = $(window),
           viewTop       = $w.scrollTop(),
           viewBottom    = viewTop + $w.height(),
           _top          = $t.offset().top,
           _bottom       = _top + $t.height(),
           compareTop    = partial === true ? _bottom : _top,
           compareBottom = partial === true ? _top : _bottom;
     
     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
 
   };
     
 })(jQuery);

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

   if (window.location.pathname === '/') {

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);
    

    
/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
   // DEPRECRATED - using react-scroll instead
   $('.smoothscroll').live('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $('section');
	var navigation_links = $("#nav-wrap a");



/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

      // OFFSET set by smoothscroll offset in header component
      var offset = -70;

		var header = $('header').height();
      var work = $('section#work').outerHeight() + header + offset;
      var research = $('section#research').outerHeight() + work + offset;
      var projects = $('section#projects').outerHeight() + research + offset;

		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');
      var navigation_links = $("#nav-wrap a");

      // console.log("y: " + y + " header: " + header + " about: " + about + " resume: " + resume + " portfolio: " + portfolio + " contact: " + contact);
      // console.log("y: " + y + " header: " + header + " work: " + work + " research: " + research + " projects: " + projects);

	   if ( (y > header*.20) && (y < header) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < header*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');

         }
      }

      // if ( (y > about*.20) && (y < about) && ($(window).outerWidth() > 768 ) ) {
      //    navigation_links.parent().removeClass("current");
      //    $("#nav-wrap a[href='#about']").parent().addClass("current");
      // } else {
      //    if (y < about*.20) {
      //       navigation_links.parent().removeClass("current");
      //       $("#nav-wrap a[href='#home']").parent().addClass("current");
      //    }
      // }


      
      // var cond = (y > header) && (y < about);
      // console.log("y: " + y + " header: " + header + " about: " + about + " cond: " + cond);
   
      switch (true) {
         case (y >= header) && (y < work):
            navigation_links.parent().removeClass("current");
            $("#nav-wrap li.work").addClass("current");
            break;

         case (y >= work) && (y < research):
            navigation_links.parent().removeClass("current");
            $("#nav-wrap li.research").addClass("current");
            break;

         case (y >= research) && (y < projects):
            navigation_links.parent().removeClass("current");
            $("#nav-wrap li.projects").addClass("current");
            break;

         default:
            navigation_links.parent().removeClass("current");
            $("#nav-wrap li.home").addClass("current");
            // console.log("DEFAULT REACHED");
      }

      $(".item").each(function(i, el) {
         var el = $(el);
         if (el.visible(true)) {
           el.removeClass("hidden");
           el.addClass("come-in"); 
         } 
       }
       
       );

       $(".row.about").each(function(i, el) {
         var el = $(el);
         if (el.visible(true)) {
             el.removeClass("hidden");
           el.addClass("fadeIn"); 
         } 
       }
       
       );

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    // $('.item-wrap a').magnificPopup({

    //    type:'inline',
    //    fixedContentPos: false,
    //    removalDelay: 200,
    //    showCloseBtn: false,
    //    mainClass: 'mfp-fade'

    // });

    // $(document).on('click', '.popup-modal-dismiss', function (e) {
    // 		e.preventDefault();
    // 		$.magnificPopup.close();
    // });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });

   // wordflick();
   console.log($('#box'));
   createTextSlideAnimation(['Cringe', 'Simping', 'being thicc'], 5000);


}});








