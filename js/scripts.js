var result;

var trackSuggester = function(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection) {
        if (q1Selection === "yes") {
          return "ruby";
      }
      else if (q1selection === "no" && q5Selection === "yes") {
        return "php";

      }
      else if (q3Selection) {
        return "java";

      }
      else if (q5Selection === "no") {
        return "css";

      }
      else {
        return "net";
      }






}







$(document).ready(function() {

  $("form").submit(function(event) {
    var q1Selection = $("select#q1").val()
    var q2Selection = $("select#q2").val()
    var q3Selection = $("select#q3").val()
    var q4Selection = $("select#q4").val()
    var q5Selection = $("select#q5").val()

    $("#" + result).hide();

    var result = trackSuggester(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection);


       $("#" + result).fadeIn();


    event.preventDefault();
  });

//user later to click next hide?
//   $("#next").click(function(){
//     var current = $(".name:visible");
//     current.hide();
//     current.next().show();
// });

});
