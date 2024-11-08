// Countdown timer script
const countDownDate = new Date("Nov 30, 2024 00:00:00").getTime();

const timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If countdown ends
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Event Started!";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const speakerCarousel = document.querySelector(".speaker-carousel");
    let scrollAmount = 0;

    function scrollCarousel() {
        scrollAmount += 1;
        if (scrollAmount >= speakerCarousel.scrollWidth / 2) {
            scrollAmount = 0;
        }
        speakerCarousel.scrollLeft = scrollAmount;
    }

    setInterval(scrollCarousel, 30);
});



