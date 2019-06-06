$(document).ready(function() {
  var list = prompt("What kind of animals do you like? Dogs? Cats? Wild cats maybe?");
 list= list.toUpperCase();
  if (list === "DOG" || list === "DOGS") {
    $('#dogs').show();
  }else if (list === "CAT" || list === "CATS") {
    $('#cats').show();
  }else{
    $('#wildcats').show();
  }

  $('#something').click(function() {
    location.reload();
  });
  $('#something2').click(function() {
    location.reload();
  });
  $('#something3').click(function() {
    location.reload();
  });

});
