
// User interface logic
$(document).ready(function() {
  $("#user-number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);
    console.log();
    $("#result").text(result);
  });
});


// Business logic
var beepBoop = function (number)  {
  for (var i = 0; i < number; i+=1);{

    if (i === 3) {
    return ("Sorry, You got Busted!");

  } else if (i === 2) {
    return ("I say Boop!");

  } else if (i === 1) {
    return ("You say Beep!");

  }else if (i === number) {
    return number + " Oops, try again! ";

  }

  }
return result;
};
