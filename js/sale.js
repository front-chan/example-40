let saleNow = new Date();
let year = saleNow.setFullYear(2022);
let month = saleNow.setMonth(10); //11
let date = saleNow.setDate(30); //30
let hours = saleNow.setHours(11); //11
let minutes = saleNow.setMinutes(30); //30

let getYear = saleNow.getFullYear();
let getMonth = saleNow.getMonth();
let getDate = saleNow.getDate();
let getDay = saleNow.getDay();
let getHours = saleNow.getHours();
let getMinutes = saleNow.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const endTime = document.querySelector(".end-time");
const saleTime = `${days[getDay]}, ${getDate} ${months[getMonth]} ${getYear} ${getHours}:${getMinutes} AM`;

endTime.innerText = saleTime;

// 세일 끝 기간 지정
/*
console.log(
  `${days[getDay]}, ${getDate} ${
    months[getMonth - 1]
  } ${getYear} ${getHours}:${getMinutes} AM`
);
*/

const countDown = function () {
  let saleDate = new Date(saleNow); // saleTime

  let calSecond = 1000;
  let calMinute = calSecond * 60;
  let calHour = calMinute * 60;
  let calDay = calHour * 24;
  let countTimer;

  function showTime() {
    let now = new Date();
    let saleEnd = saleDate - now;

    let textDays = document.querySelector(".days");
    let textHours = document.querySelector(".hours");
    let textMins = document.querySelector(".mins");
    let textSecs = document.querySelector(".secs");

    let days = Math.floor(saleEnd / calDay);
    let hours = Math.floor((saleEnd % calDay) / calHour);
    let minutes = Math.floor((saleEnd % calHour) / calMinute);
    let seconds = Math.floor((saleEnd % calMinute) / calSecond);

    if (saleEnd < 0) {
      clearInterval(countTimer);
      // modal 창 구현 예정

      textDays.textContent = 0;
      textHours.textContent = 0;
      textMins.textContent = 0;
      textSecs.textContent = 0;
    } else {
      textDays.textContent = days;
      textHours.textContent = hours;
      textMins.textContent = minutes;
      textSecs.textContent = seconds;
    }

    // console.log(saleEnd);

    // let seconds = String(Math.floor((saleEnd % calMinute) / calSecond)).padStart(2, "0");
  }

  countTimer = setInterval(showTime, 1000);
};

countDown();
