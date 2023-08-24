const checkbox = document.getElementById('nightModeCheckbox');
const body = document.body;

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('night-mode');
  } else {
    body.classList.remove('night-mode');
  }
});

// const audio1 = document.querySelectorAll('audio');
const audio1 = document.getElementById('audio1');

let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function playBtn() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById('playBtn').textContent = 'Start';
        // audio1.pause();
    } else {
        interval = setInterval(updateStopwatch, 1000);
        document.getElementById('playBtn').textContent = 'Stop';
        // audio1.play();
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
    document.getElementById('playBtn').textContent = 'Start';
}
function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('stopwatch').textContent = '00:00:00';
    document.getElementById('playBtn').checked = false;
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('stopwatch').textContent = timeString;
}

function pad(num) {
    return (num < 10) ? '0' + num : num;
}

var volumeSliders = document.querySelectorAll(".volume-slider");

volumeSliders.forEach(function(slider) {
    slider.addEventListener("input", function() {
        var audioId = this.getAttribute("data-audio")
        var audio = document.getElementById(audioId);
        audio.volume = this.value;
    });
});