var result;

var trackSuggester = function(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection) {

  if (q5Selection === "Yes") {
  return "java";
}

else if (q1Selection === "Yes" && q2Selection === "Yes") {
  return "net";
}

else if (q3Selection === "Yes") {
  return "css";
}

else if (q2Selection === "Yes" && q4Selection === "Yes") {
  return "ruby";
}

else {
  return "php";
}
}



$(document).ready(function() {

$("form#survey").submit(function(event) {

  $("form#survey").fadeOut();

  var q1Selection = $("select#q1").val();
  var q2Selection = $("select#q2").val();
  var q3Selection = $("select#q3").val();
  var q4Selection = $("select#q4").val();
  var q5Selection = $("select#q5").val();

  $("#" + result).hide();

  result = trackSuggester(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection);

  $("#" + result).delay(400).fadeIn(700);

event.preventDefault();

});

});
