//INPUT AND OUTPUT
//THE FOLLOWING SERVE AT WAITING FOR ENTRIES TO BE PUT INTO LOCAL STORAGE.
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
  
    $("#t-900 .description").val(localStorage.getItem("t-900"));
    $("#t-1000 .description").val(localStorage.getItem("t-1000"));
    $("#t-1100 .description").val(localStorage.getItem("t-1100"));
    $("#t-1200 .description").val(localStorage.getItem("t-1200"));
    $("#t-1300 .description").val(localStorage.getItem("t-1300"));
    $("#t-1400 .description").val(localStorage.getItem("t-1400"));
    $("#t-1500 .description").val(localStorage.getItem("t-1500"));
    $("#t-1600 .description").val(localStorage.getItem("t-1600"));
    $("#t-1700 .description").val(localStorage.getItem("t-1700"));

//TIME PIECE: Where all the clocky-like things happen.

 $("#currentDay").text(moment().format("dddd, MMMM Do"));


var interval = setInterval(timeCheck, 15000);

function timeCheck() {

    var whatTime = moment().hours();

    $(".time-block").each(function() {
      var timeslot = parseInt($(this).attr("id").split("-")[1]);


      if (timeslot < whatTime) {
        $(this).addClass("past");
      } 
      else if (timeslot === whatTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  timeCheck();
  });

