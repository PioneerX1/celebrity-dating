$(document).ready(function() {
  $("#user-input").submit(function() {
    var inputAge = parseInt($("input#age").val());
    var inputGender = $("select#gender").val();

    $('.results').show();
    if (inputAge < 18 && inputGender === "male") {
        $("#celebrity").text("Madonna");
    }
    if (inputAge < 18 && inputGender === "female") {
      $("#celebrity").text("Minnie");
    }
    if (inputAge >= 18 && inputGender === "male") {
      $("#celebrity").text("Mickey");
    }
    if (inputAge >= 18 && inputGender === "female") {
      $("#celebrity").text("Mamma");
    }
    event.preventDefault();
  });
});
