// User interface logic
$(document).ready(function(){
  $("#user-number").submit(function(event){
    event.preventDefault();
    var input = $("input#number").val();
    console.log();
    $("#output").append(result);
  })

});

function beepBoop (number) {
  result = [];
  for (var i = 0; i <=number; i++) {
    if (i % 3 === 0) {
    result.push ("Sorry, You got Busted!");

  } else if (i % 2 === 0) {
    result.push ("Boop!");

  } else if (i % 1 === 0) {
    result.push ("Beep");
  }
};
return result;

};
