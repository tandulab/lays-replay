$(function () {
  if (document.querySelector("#main-header")) {
    document.querySelector("#main-header").classList.add("pack-transform");
  }

  if (document.getElementById("countDown")) {
    // Set the date we're counting down to
    var countDownDate = new Date("May 19, 2022 16:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var html =
        "<div class='days'><div>" +
        days +
        "</div><p>giorni</p></div>" +
        "<div class='hours'><div>" +
        hours +
        "</div><p>ore</p></div>" +
        "<div class='minutes'><div>" +
        minutes +
        "</div><p>minuti</p></div>" +
        "<div class='seconds'><div>" +
        seconds +
        "</div><p>secondi</p></div>";

      document.getElementById("countDown").innerHTML = html;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

  $("#link-il-progetto").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $("#progetto").offset().top,
      },
      1000
    );
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
