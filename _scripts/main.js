$(document).ready(function() {

  // clear all inputs
  $('input').val('');

  $('.modal .close').click(function() {
    $('.modal').fadeOut();
  });

  $('#login .password').on('keyup', function(e) {
    if (e.keyCode == 13) {
      $('#login-btn').click();
    }
  });

  // only direct to dashboard if username and pwd are populated
  $('#login-btn').click(function() {
    login(1, false);
  });

  function login() {
    const val1 = $('#login .username').val() !== '';
    const val2 = $('#login .password').val() !== '';
    console.log(val1, val2);
    if (val1 && val2) {
      if (window.location.href.indexOf("localhost") > -1) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "http://brittanychiang.com/Redesign-myNEU/dashboard";
      }
    }
  }


  $('.top-bar .dropdown').on( "click", function(ev) {
    $('.dropdown-options').slideToggle();
    ev.preventDefault();
  });

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

  var saved_counter = 0;
  $('.course-section .button.save').click(function() {
    const savedVal = $('.saved-button .saved').text();
    const newVal = (parseInt(savedVal) + 1).toString();

    $('.saved-button .saved').addClass('not-zero').text(newVal);
    $('.saved-button').addClass('active');
    saved_counter++;
    console.log(saved_counter);
    localStorage.setItem('saved_counter', saved_counter);

    setTimeout(function() {
      $('.saved-button').removeClass('active');
    }, 3000);
  });

  function checkCounter() {
    const register = window.location.href.indexOf("register") > -1;
    const schedule = window.location.href.indexOf("schedule") > -1;

    if (register || schedule) {
      if (localStorage.getItem("saved_counter") !== null) {
        $('.type1').show();
      } else {
        $('.type1').hide();
      }
    }
  }

  // call checkCounter on every page
  checkCounter();

  $('.delete').click(function() {
    $('.type1').hide();
    localStorage.removeItem('saved_counter');
  });


  $('#register #register-button').click(function() {
    $('#register .container').addClass('blur');
    $('#register .success-modal').fadeIn();
    setTimeout(function(){
      if (window.location.href.indexOf("localhost") > -1) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "http://brittanychiang.com/Redesign-myNEU/dashboard";
      }
    }, 3000);
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
      className: 'aileen'
    },
    {
      title  : 'Student Appointments: Prajna Kulkarni',
      start  : '2017-03-28T13:00:00',
      end    : '2017-03-28T15:00:00',
      url    : '#',
      className: 'prajna'
    },
    {
      title  : 'Student Appointments: Prajna Kulkarni',
      start  : '2017-04-04T09:00:00',
      end    : '2017-04-04T11:00:00',
      url    : '#',
      className: 'prajna'
    },
    {
      title  : 'Student Appointments: Aileen Yates',
      start  : '2017-04-07T13:00:00',
      end    : '2017-04-07T15:00:00',
      url    : '#',
      className: 'aileen'
    }
    ]
  });

  $('.fc-event.aileen').click(function() {
    $('.modal.appt').addClass('aileen-modal').removeClass('prajna-modal').fadeIn();
  });

  $('.fc-event.prajna').click(function() {
    $('.modal.appt').addClass('prajna-modal').removeClass('aileen-modal').fadeIn();
  });

  function setColor() {
    $('.prajna').prepend('<span class="color pink"></span>');
    $('.aileen').prepend('<span class="color yellow"></span>');
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
