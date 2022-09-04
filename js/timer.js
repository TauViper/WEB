let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");

buttonRun.addEventListener("click", function () {
  setTime = parseInt(timerInput.value) * 60;
});

timer = setInterval(function () {
  seconds = setTime % 60;
  minutes = (setTime / 60) % 60;
  hour = (setTime / 60 / 60) % 60;
  if (setTime <= 0) {
    clearInterval(timer);
    alert("Время закончилось");
  } else {
    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
    timerShow.innerHTML = strTimer;
  }
  --setTime;
}, 1000);
z;
