// Set the target time (next Sunday at midnight)
function getNextSunday() {
    const now = new Date();
    const nextSunday = new Date();

    // Set to next Sunday
    nextSunday.setDate(now.getDate() + (7 - now.getDay()));
    nextSunday.setHours(0, 0, 0, 0);

    // If today is Sunday, set to next week
    if (now.getDay() === 0 && now.getHours() >= 0) {
        nextSunday.setDate(nextSunday.getDate() + 7);
    }

    return nextSunday;
}

let targetDate = getNextSunday();

// Update the timer every second
function updateTimer() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        // Timer reached zero, reset to next week
        targetDate = getNextSunday();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update each digit separately
    updateDigitBox('days-box', days);
    updateDigitBox('hours-box', hours);
    updateDigitBox('minutes-box', minutes);
    updateDigitBox('seconds-box', seconds);
}

function updateDigitBox(boxId, value) {
    const digits = value.toString().padStart(2, '0').split('');
    const box = document.getElementById(boxId);
    box.children[0].textContent = digits[0];
    box.children[1].textContent = digits[1];
}

// Initial call and set interval
updateTimer();
setInterval(updateTimer, 1000);