$( document ).ready( function() {

  // clear all inputs
  $('input').val('');

  $('.modal .close').click(function() {
    $('.modal').fadeOut();
  });

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



  $('#calendar').fullCalendar({
    weekends: false,
    defaultView: 'agendaWeek',
    height: 590,
    allDaySlot: false,
    nowIndicator: true,
    scrollTime: '08:00:00',
    events: [
    {
      title  : 'Student Appointments: Aileen Yates',
      start  : '2017-03-31T09:00:00',
      end    : '2017-03-31T12:00:00',
      url    : '#',
      className: 'Aileen'
    },
    {
      title  : 'Student Appointments: Prajna Kulkarni',
      start  : '2017-03-28T13:00:00',
      end    : '2017-03-28T15:00:00',
      url    : '#',
      className: 'Prajna'
    },
    {
      title  : 'Student Appointments: Prajna Kulkarni',
      start  : '2017-04-04T09:00:00',
      end    : '2017-04-04T11:00:00',
      url    : '#',
      className: 'Prajna'
    },
    {
      title  : 'Student Appointments: Aileen Yates',
      start  : '2017-04-07T13:00:00',
      end    : '2017-04-07T15:00:00',
      url    : '#',
      className: 'Aileen'
    }
    ]
  });

  $('.fc-event').click(function() {
    $('.modal.appt').fadeIn();
  });

  function setColor() {
    $('.Prajna').prepend('<span class="color pink"></span>');
    $('.Aileen').prepend('<span class="color yellow"></span>');
  }
  setColor();

  $('.fc-button').click(function() { setColor() });

  $('#appointment-calendar #request-appt').click(function() {
    $('#appointment-calendar .container').addClass('blur');
    $('.modal.appt').fadeOut();
    $('#appointment-calendar .success-modal').fadeIn();

    setTimeout(function(){
      $('#appointment-calendar .success-modal').fadeOut();
      $('#appointment-calendar .container').removeClass('blur');
    }, 3000);
  });

});
