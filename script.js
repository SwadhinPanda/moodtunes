const checkbox = document.getElementById("nightModeCheckbox");
const body = document.body;

checkbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("night-mode");
  } else {
    body.classList.remove("night-mode");
  }
});

// const audio1 = document.querySelectorAll('audio');
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("rain-audio");
const audio3 = document.getElementById("water-audio");
const audio4 = document.getElementById("fire-audio");
const audio5 = document.getElementById("bird-audio");
const audio6 = document.getElementById("forest-audio");

let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function playBtn() {
  if (isRunning) {
    clearInterval(interval);
    document.getElementById("playBtn").textContent = "Start";
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
  } else {
    interval = setInterval(updateStopwatch, 1000);
    document.getElementById("playBtn").textContent = "Stop";
    audio1.play();
    audio2.play();
    audio3.play();
    audio4.play();
    audio5.play();
    audio6.play();
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(interval);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
  document.getElementById("playBtn").textContent = "Start";
}
function reset() {
  clearInterval(interval);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
  document.getElementById("playBtn").checked = false;
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
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
  const timeString = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("stopwatch").textContent = timeString;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}

// Get all the volume sliders and volume fill elements
const volumeSliders = document.querySelectorAll(".volume-slider");
const volumeFills = document.querySelectorAll(".volume-fill");

// Add event listeners to update volume and volume bars when sliders change
volumeSliders.forEach((slider, index) => {
  const audioElement = slider.parentElement.nextElementSibling;
  const volumeFill = volumeFills[index];

  // Set the initial volume and volume fill width
  const initialVolume = slider.value / 100;
  audioElement.volume = initialVolume;
  volumeFill.style.width = `${initialVolume * 100}%`;

  slider.addEventListener("input", () => {
    const volume = slider.value / 100;
    audioElement.volume = volume;
    volumeFill.style.width = `${volume * 100}%`;
  });
});
