$(document).ready(function(){function e(){$(".Prajna").prepend('<span class="color pink"></span>'),$(".Aileen").prepend('<span class="color yellow"></span>')}$("input").val(""),$(".modal .close").click(function(){$(".modal").fadeOut()}),$("#login-btn").click(function(){const e=""!==$("#login .username").val(),t=""!==$("#login .password").val();e&&t&&$(this).attr("href","/dashboard")}),$(".top-bar .dropdown").on("click",function(e){$(".dropdown-options").slideToggle(),e.preventDefault()}),$("#degree-audit .accordion a").click(function(e){const t=$(this),a=t.closest("li").find(".detail-container"),n=t.closest(".accordion").find(".detail-container").not(a);n.slideUp(),t.hasClass("active")?t.removeClass("active"):(t.closest(".accordion").find("a.active").removeClass("active"),t.addClass("active")),a.stop(!1,!0).slideToggle(),e.preventDefault()}),$("#schedule .accordion .class").click(function(e){const t=$(this),a=t.next(".detail-container");t.hasClass("active")?t.removeClass("active"):t.addClass("active"),a.stop(!1,!0).slideToggle(),e.preventDefault()}),$("#schedule select").change(function(){const e=null!==$(".select-wrapper.semester select").val(),t=null!==$(".select-wrapper.subject select").val();e&&t&&($("#view-classes").prop("disabled",!1),$("#view-classes").addClass("red"))}),$("#view-classes").click(function(){const e=null!==$(".select-wrapper.semester select").val(),t=null!==$(".select-wrapper.subject select").val(),a=e&&t;a&&$(this).hasClass("red")&&($("#schedule .modal.prompt").fadeOut(),$("#schedule .container").removeClass("blur"))}),$(".saved-button").click(function(){$(".modal.saved-courses").fadeIn()}),$(".course-section .button.save").click(function(){var e=$(".saved-button .saved").text(),t=(parseInt(e)+1).toString();$(".saved-button .saved").addClass("not-zero").text(t),$(".saved-button").addClass("active"),setTimeout(function(){$(".saved-button").removeClass("active")},3e3)}),$("#register #register-button").click(function(){$("#register .container").addClass("blur"),$("#register .success-modal").fadeIn(),setTimeout(function(){window.location.href="/dashboard"},3e3)}),$("#calendar").fullCalendar({weekends:!1,defaultView:"agendaWeek",height:590,allDaySlot:!1,nowIndicator:!0,scrollTime:"08:00:00",events:[{title:"Student Appointments: Aileen Yates",start:"2017-03-31T09:00:00",end:"2017-03-31T12:00:00",url:"#",className:"Aileen"},{title:"Student Appointments: Prajna Kulkarni",start:"2017-03-28T13:00:00",end:"2017-03-28T15:00:00",url:"#",className:"Prajna"},{title:"Student Appointments: Prajna Kulkarni",start:"2017-04-04T09:00:00",end:"2017-04-04T11:00:00",url:"#",className:"Prajna"},{title:"Student Appointments: Aileen Yates",start:"2017-04-07T13:00:00",end:"2017-04-07T15:00:00",url:"#",className:"Aileen"}]}),$(".fc-event").click(function(){$(".modal.appt").fadeIn()}),e(),$(".fc-button").click(function(){e()}),$("#appointment-calendar #request-appt").click(function(){$("#appointment-calendar .container").addClass("blur"),$(".modal.appt").fadeOut(),$("#appointment-calendar .success-modal").fadeIn(),setTimeout(function(){$("#appointment-calendar .success-modal").fadeOut(),$("#appointment-calendar .container").removeClass("blur")},3e3)})});