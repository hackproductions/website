function calcSpeed(speed) {
    // Time = Distance/Speed
    var spanSelector = document.querySelector('.marquee-content');
    var spanLength = spanSelector.offsetWidth;
    var timeTaken = spanLength / speed;
    spanSelector.style.animationDuration = timeTaken + "s";
}
calcSpeed(150);