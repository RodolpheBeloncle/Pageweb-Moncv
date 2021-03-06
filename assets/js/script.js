$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
            if($(this).hasClass('act')) {
                $('.main-menu').addClass('act');
            }
            else {
                $('.main-menu').removeClass('act');
            }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });

	/* Progress bar */
    var $section = $('.section-skills');
    function loadDaBars() {
	    $('.progress .progress-bar').progressbar({
	        transition_delay: 500
	    });
    }
    
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    /* Counters  */
    if ($(".section-counters .start").length>0) {
        $(".section-counters .start").each(function() {
            var stat_item = $(this),
            offset = stat_item.offset().top;
            $(window).scroll(function() {
                if($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                    stat_item.addClass('counting');
                    stat_item.countTo();
                }
            });
        });
    };

	// another custom callback for counting to infinity
	$('#infinity').data('countToOptions', {
		onComplete: function (value) {
		  count.call(this, {
		    from: value,
		    to: value + 1
		  });
		}
	});

	$('#infinity').each(count);

	function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

    // Navigation overlay
    var s = skrollr.init({
            forceHeight: false,
            smoothScrolling: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
    });
    
});

// formulaire d'envoi

window.addEventListener("load", function () {
    function sendData() {
      var XHR = new XMLHttpRequest();
  
      // Liez l'objet FormData et l'??l??ment form
      var FD = new FormData(form);
  
      // D??finissez ce qui se passe si la soumission s'est op??r??e avec succ??s
      XHR.addEventListener("load", function(event) {
        alert(event.target.responseText);
      });
  
      // Definissez ce qui se passe en cas d'erreur
      XHR.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal pass??.');
      });
  
      // Configurez la requ??te
      XHR.open("POST","rbeloncle@gmail.com");
  
      // Les donn??es envoy??es sont ce que l'utilisateur a mis dans le formulaire
      XHR.send(FD);
    }
  
    // Acc??dez ?? l'??l??ment form ???
    var form = document.getElementById("myForm");
  
    // ??? et prenez en charge l'??v??nement submit.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      sendData();
    });
  });