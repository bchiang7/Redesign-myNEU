$( document ).ready( function() {
  // on click: if dropdown doesn't have class of active, show options
  // $('.top-bar .dropdown').on( "click", function() {
  //   $('.dropdown-options').toggleClass('active');
  // });

  // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('.accordion a').click(function(ev) {
    const _this = $(this);

    const dropDown = _this.closest('li').find('.detail-container');
    const notDropDown = _this.closest('.accordion').find('.detail-container').not(dropDown);

    notDropDown.slideUp();

    if (_this.hasClass('active')) {
      _this.removeClass('active');
    } else {
      _this.closest('.accordion').find('a.active').removeClass('active');
      _this.addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    ev.preventDefault();
  });





  var $container = $('.dropdown-menu'),
  $list = $('.dropdown-menu ul'),
  listItem = $list.find('li');

  $(".dropdown .title").click(function () {
    if( $container.height() > 0) {
      closeMenu(this);
    } else {
      openMenu(this);
    }
  });

  $(".dropdown-menu li").click(function () {
    closeMenu(this);
  });

  function closeMenu(el) {
    $(el).closest('.dropdown').toggleClass("closed").find(".title").text($(el).text());
    $container.css("height", 0);
    $list.css( "top", 0 );
  }

  function openMenu(el) {
    $(el).parent().toggleClass("closed");

    $container.css({
      height: 200
    })
    .mousemove(function(e) {
      var heightDiff = $list.height() / $container.height(),
      offset = $container.offset(),
      relativeY = (e.pageY - offset.top),
      top = relativeY*heightDiff > $list.height()-$container.height() ?
      $list.height()-$container.height() : relativeY*heightDiff;

      $list.css("top", -top);
    });
  }

});
