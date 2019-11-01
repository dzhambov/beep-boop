
// User interface logic
$(document).ready(function(){
  $("#user-number").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    console.log();
    $("#result").text(result);
  });

});
// Business logic
var beepBoop = function (number) {

  for (var i = 0; i <= number; i++);
    if (i % 3 === 0) {
    return ("Sorry, You got Busted!");

  } else if (i % 2 === 0) {
    return ("Boop!");

  } else if (i % 1 === 0) {
    return ("Beep");

  }
};
