$(function() {
    const d = new Date();
    const hours = d.getHours();
    const night = (hours >= 19) || (hours <= 7); // between 7pm and 7am
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const input = document.getElementById('switch');

    if (night) {
        input.checked = true;
        body.classList.add('night');
    }

    toggle.addEventListener('click', function() {
        const isChecked = input.checked;
        if (isChecked) {
            body.classList.remove('night');
        } else {
            body.classList.add('night');
        }
    });
});


jQuery(document).ready(function($) {
  var contentSections = $(".cd-section"),
    navigationItems = $("#cd-vertical-nav a");

  updateNavigation();
  $(window).on("scroll", function() {
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on("click", function(event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });
  //smooth scroll to second section
  $(".cd-scroll-down").on("click", function(event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  //open-close navigation on touch devices
  $(".touch .cd-nav-trigger").on("click", function() {
    $(".touch #cd-vertical-nav").toggleClass("open");
  });
  //close navigation on touch devices when selectin an element from the list
  $(".touch #cd-vertical-nav a").on("click", function() {
    $(".touch #cd-vertical-nav").removeClass("open");
  });

  function updateNavigation() {
    contentSections.each(function() {
      $this = $(this);
      var activeSection =
        $('#cd-vertical-nav a[href="#' + $this.attr("id") + '"]').data(
          "number"
        ) - 1;
      if (
        $this.offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $this.offset().top + $this.height() - $(window).height() / 2 >
          $(window).scrollTop()
      ) {
        navigationItems.eq(activeSection).addClass("is-selected");
      } else {
        navigationItems.eq(activeSection).removeClass("is-selected");
      }
    });
  }

  function smoothScroll(target) {
    $("body,html").animate({ scrollTop: target.offset().top }, 600);
  }
});
