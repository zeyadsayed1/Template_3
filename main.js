// The end of the Year
let countDown = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let DateNow = new Date().getTime();
  let diff = countDown - DateNow;
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  if (diff < 0) {
    clearInterval(counter);
  }
}, 1000);

//Increase Numbers On Scrolling
let nums = document.querySelectorAll(".number");
console.log(nums)
let section = document.getElementById("stats");
console.log(section)
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.scrollTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//Increase Skills Progress On Scrolling
let skillsSec = document.querySelector(".skills");
let spans = document.querySelectorAll(".the-progress span");

if (window.scrollY >= skillsSec.scrollTop) {
    console.log("reach")
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }


