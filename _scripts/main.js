// The code in here will run on every page.
$( document ).ready( function() {
  // on click: if dropdown doesn't have class of active, show options
  $('.top-bar .dropdown').on( "click", function() {
    $('.dropdown-options').toggleClass('active');
  });
});
