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


  $('#schedule .accordion .single-course').click(function(ev) {
    const _this = $(this);
    const dropDown = _this.closest('.single-course').find('.detail-container');
    const notDropDown = _this.closest('.accordion').find('.detail-container').not(dropDown);
    const rightTarget = _this.hasClass('single-course');

    console.log(ev.currentTarget);

    // notDropDown.slideUp();

    if (rightTarget) {
      if (_this.hasClass('active')) {
        _this.removeClass('active');
      } else {
        _this.closest('.accordion').find('a.active').removeClass('active');
        _this.addClass('active');
      }

      dropDown.stop(false, true).slideToggle();
      // ev.preventDefault();
    }

  });



  $('#schedule select').change(function() {
    const selectVal1 = $('.select-wrapper.semester select').val() !== null;
    const selectVal2 = $('.select-wrapper.subject select').val() !== null;
    const completeVals = selectVal1 && selectVal2;
    if (selectVal1 && selectVal2) {
      console.log('in');
      $('#view-classes').prop("disabled", false);
      $('#view-classes').addClass('red')
    }
  });

  $('#view-classes').click(function() {
    const selectVal1 = $('.select-wrapper.semester select').val() !== null;
    const selectVal2 = $('.select-wrapper.subject select').val() !== null;
    const completeVals = selectVal1 && selectVal2;
    if (completeVals && $(this).hasClass('red')) {
      console.log('close');
      $('#schedule .modal').fadeOut();
      $('#schedule .container').removeClass('blur');
    }
  });


});
