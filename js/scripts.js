$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const userYear = parseInt($("#year").val());

    isLeapYear(1993)
    function isLeapYear(year){
      return false;
    }
  });
});