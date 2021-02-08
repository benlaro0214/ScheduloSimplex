//INPUT AND OUTPUT

$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  
 // load any saved data from localStorage
    $("#t-900 .description").val(localStorage.getItem("t-900"));
    $("#t-1000 .description").val(localStorage.getItem("t-1000"));
    $("#t-1100 .description").val(localStorage.getItem("t-1100"));
    $("#t-1200 .description").val(localStorage.getItem("t-1200"));
    $("#t-1300 .description").val(localStorage.getItem("t-1300"));
    $("#t-1400 .description").val(localStorage.getItem("t-1400"));
    $("#t-1500 .description").val(localStorage.getItem("t-1500"));
    $("#t-1600 .description").val(localStorage.getItem("t-1600"));
    $("#t-1700 .description").val(localStorage.getItem("t-1700"));

//TIME PIECE

 // Show Time.
 $("#currentDay").text(moment().format("dddd, MMMM Do"));

// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
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

  hourUpdater();
  });

