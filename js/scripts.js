$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const userYear = parseInt($("#year").val());

    isLeapYear();
    function isLeapYear(year) {
      if (year % 100 === 0) {
        return false;
      } else if (year % 4 === 0) {
        return true;
      } else {
        return false;
      }
    };
  });
});