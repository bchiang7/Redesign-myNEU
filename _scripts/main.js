$( document ).ready( function() {

  // clear all inputs
  $('input').val('');

  // only direct to dashboard if username and pwd are populated
  $('#login-btn').click(function() {
    const val1 = $('#login .username').val() !== '';
    const val2 = $('#login .password').val() !== '';
    if (val1 && val2) {
      $(this).attr("href", "/dashboard");
    }
  });


  // on click: if dropdown doesn't have class of active, show options
  // $('.top-bar .dropdown').on( "click", function() {
  //   $('.dropdown-options').toggleClass('active');
  // });

  // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('#degree-audit .accordion a').click(function(ev) {
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


  $('#schedule .accordion .class').click(function(ev) {
    const _this = $(this);
    const dropDown = _this.next('.detail-container');

    if (_this.hasClass('active')) {
      _this.removeClass('active');
    } else {
      _this.addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    ev.preventDefault();

  });



  $('#schedule select').change(function() {
    const selectVal1 = $('.select-wrapper.semester select').val() !== null;
    const selectVal2 = $('.select-wrapper.subject select').val() !== null;
    const completeVals = selectVal1 && selectVal2;
    if (selectVal1 && selectVal2) {
      $('#view-classes').prop("disabled", false);
      $('#view-classes').addClass('red')
    }
  });

  $('#view-classes').click(function() {
    const selectVal1 = $('.select-wrapper.semester select').val() !== null;
    const selectVal2 = $('.select-wrapper.subject select').val() !== null;
    const completeVals = selectVal1 && selectVal2;
    if (completeVals && $(this).hasClass('red')) {
      $('#schedule .modal.prompt').fadeOut();
      $('#schedule .container').removeClass('blur');
    }
  });

  $('.saved-button').click(function() {
    $('.modal.saved-courses').fadeIn();
  });

  $('.modal.saved-courses .close').click(function() {
    $('.modal.saved-courses').fadeOut();
  });

  $('.course-section .button.save').click(function() {
    var savedVal = $('.saved-button .saved').text();
    var newVal = (parseInt(savedVal) + 1).toString();
    $('.saved-button .saved').addClass('not-zero').text(newVal);
    $('.saved-button').addClass('active');
    setTimeout(function() {
      $('.saved-button').removeClass('active');
    }, 3000);

  });

  $('#register #register-button').click(function() {
    $('#register .container').addClass('blur');
    $('#register .success-modal').fadeIn();
    setTimeout(function(){ window.location.href = "/dashboard"; }, 3000);
  });


});
