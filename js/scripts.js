$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const userYear = parseInt($("#year").val());
  });
});