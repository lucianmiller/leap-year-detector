$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const userYear = parseInt($("#year").val());

    isLeapYear(userYear);
    function isLeapYear(year) {
      if ((year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    };
  });
});