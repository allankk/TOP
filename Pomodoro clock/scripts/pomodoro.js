// let sessionAmount;
// let sessionLength;
// let breakLength;
let isTimerCounting = false;
let isSession = true;
let counter;

// GET SLIDER ELEMENTS
const sessionAmountSlider = document.getElementById("sessionAmount");
const sessionLengthSlider = document.getElementById("sessionLength");
const breakLengthSlider = document.getElementById("breakLength");

// GET SESSION TIME AND AMOUNT
const sessionAmount = document.getElementById("session-number");
const sessionmm = document.getElementById("sessionmm");
const sessionss = document.getElementById("sessionss");
const breakmm = document.getElementById("breakmm");
const breakss = document.getElementById("breakss");

// GET BUTTON ELEMENTS
const resumeBtn = document.getElementById("resume");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

// HELPER FORMATTING FUNCTION - PUTS 0 IN FRONT IF THE VALUE LENGTH IS 1
function formatNumber(number) {
    number = '' + number;
    if (number.length == 1) {
        number = '0' + number;
    }
    return number;
}

function timer() {
    let timermm;
    let timerss;
     if (isSession) {
         timermm = sessionmm;
         timerss = sessionss;
     } else {
         timermm = breakmm;
         timerss = breakss;
    }

    counter = setInterval(function() {
        minutesRemaining = parseInt(timermm.innerHTML);
        secondsRemaining = parseInt(timerss.innerHTML);

        if (minutesRemaining <= 0 && secondsRemaining <= 0) {
            if (!isSession) {
                sessionAmount.innerHTML = parseInt(sessionAmount.innerHTML) - 1;
                if (parseInt(sessionAmount.innerHTML) <= 0) {
                    stopBtn.click();
                    clearInterval(counter);
                    return;
                }
            }

            isSession = !isSession;
            resetTimer();
            clearInterval(counter);
            timer();
        } else if (secondsRemaining <= 0) {
            timermm.innerHTML = formatNumber(minutesRemaining - 1);
            timerss.innerHTML = '59';
        } else {
            timerss.innerHTML = formatNumber(secondsRemaining - 1);
        }
    }, 1000)

    // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // let seconds = Math.floor((distance % (1000 * 60)) / 1000);
}


// RESETS THE TIMERS
function resetTimer() {
    if (isSession) {
        breakmm.innerHTML = breakLengthSlider.value;
        breakss.innerHTML = '00';
    } else {
        sessionmm.innerHTML = sessionLengthSlider.value;
        sessionss.innerHTML = '00';
    }
}

// ADDS EVENT LISTENERS FOR THE SLIDERS.
function addResponsiveSliderTexts() {
    sessionAmountSlider.addEventListener('input', function() {
        sessionAmount.innerHTML = sessionAmountSlider.value;
    });

    sessionLengthSlider.addEventListener('input', function() {
        sessionmm.innerHTML = formatNumber(this.value);
    });

    breakLengthSlider.addEventListener('input', function() {
        breakmm.innerHTML = formatNumber(this.value);
    });
}

// ADDS BUTTON EVENTS
function addButtonEvents() {
    resumeBtn.addEventListener('click', function() {
        if (isTimerCounting) return; 
        timer();
        isTimerCounting = true;
        enableDisableButtons();
    });

    pauseBtn.addEventListener('click', function(){
        if (!isTimerCounting) return;
        clearInterval(counter);
        isTimerCounting = false;
    });

    stopBtn.addEventListener('click', function(){
        console.log("here i am")
        clearInterval(counter);
        sessionAmountSlider.innerHTML = sessionAmountSlider.value;
        sessionmm.innerHTML = formatNumber(sessionLengthSlider.value);
        sessionss.innerHTML = '00';
        breakmm.innerHTML = formatNumber(breakLengthSlider.value);
        breakss.innerHTML = '00';
        isSession = true;
        isTimerCounting = false;
        enableDisableButtons();
    });
}


// DISABLES SLIDERS IF THE TIMER IS ON
function enableDisableButtons() {
    if (isTimerCounting) {
        sessionAmountSlider.disabled = true;
        sessionLengthSlider.disabled = true;
        breakLengthSlider.disabled = true;
    } else {
        sessionAmountSlider.disabled = false;
        sessionLengthSlider.disabled = false;
        breakLengthSlider.disabled = false;
    }
}

addResponsiveSliderTexts();
addButtonEvents();
enableDisableButtons();