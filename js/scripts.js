var result;

var trackSugguester = function(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection) {







}







$(document).ready(function() {

  $("form#survey").submit(function(event) {
    var q1Selection = $("input:radio[name=option]:checked").val()
    var q2Selection = $("input:radio[name=option]:checked").val()
    var q3Selection = $("input:radio[name=option]:checked").val()
    var q4Selection = $("input:radio[name=option]:checked").val()
    var q5Selection = $("input:radio[name=option]:checked").val()

    $("#" + result).hide();

    var result = trackSugguester(q1Selection, q2Selection, q3Selection, q4Selection, q5Selection);

    $("#" + result).show();


    event.preventDefualt();
  });

//user later to click next hide?
//   $("#next").click(function(){
//     var current = $(".name:visible");
//     current.hide();
//     current.next().show();
// });

});
