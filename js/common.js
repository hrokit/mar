// MixItUp is a jQuery plugin providing animated filtering and sorting.
// https://mixitup.kunkalabs.com/
$(function(){
  $('#portfolio-img').mixItUp();
});

//////////////////////////////////////////////////////////////

// Send mail from form
$(document).ready(function() {

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Thank you for your application! Soon we will contact you.");
      $("#form").trigger("reset");
    });
    return false;
  });

  $('.fancybox').fancybox({
      padding : 0,
      openEffect  : 'elastic'
  });

});

//////////////////////////////////////////////////////////////////
