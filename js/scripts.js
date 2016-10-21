var result;

var trackSuggester = function(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection) {

  if (q1Selection === "Yes") {
  return "net";
}

else if (q3Selection === "No") {
  return "java"
}


else {
  return "css";
}
}

//Everything below is logic, everything above is business.

$(document).ready(function() {

$("form").submit(function(event) {


 var q1Selection = $("select#q1").val();
 var q2Selection = $("select#q2").val();
 var q3Selection = $("select#q3").val();
 var q4Selection = $("select#q4").val();
 var q5Selection = $("select#q5").val();

     $("#" + result).hide();

     result = trackSuggester(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection);

     $("#" + result).fadeIn(800);


  event.preventDefault();
});

});
