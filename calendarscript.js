"use strict";

const datetxtEl = document.querySelector(".datetxt");
const datesEl = document.querySelector(".dates");
const btnEl = document.querySelectorAll(".calendar_headings .fa-solid");
const monthYearEl = document.querySelector(".month_year");
let dmObj = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months: [
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
  ],
};

let dateObj = new Date();
let dayName = dmObj.days[dateObj.getDay()];
let month = dateObj.getMonth(); 
let year = dateObj.getFullYear();
let date = dateObj.getDate();

datetxtEl.innerHTML = `${dayName},${date}, ${dmObj.months[month]}, ${year}`;
const displayCalendar = () =>{
  let firtDayOfMonth = new Date(year, month, 1).getDay(); 
  let lastDateofMonth = new Date(year, month + 1, 0).getDate(); 
  let lastDayofMonth = new Date(year, month, lastDateofMonth).getDay(); 
  let lastDateofLastMonth = new Date(year, month, 0).getDate();
  let days = "";

  for (let i = firtDayOfMonth; i > 0; i--) {
    days += `<li class="dummy">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let checkToday =
      i === dateObj.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    days += `<li class="${checkToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    days += `<li class="dummy">${i - lastDayofMonth + 1}</li>`;
  }
  
  datesEl.innerHTML = days;
  monthYearEl.innerHTML = `${dmObj.months[month]}, ${year}`;

};
displayCalendar();

btnEl.forEach((btns) => {
  btns.addEventListener("click", () => {
    month = btns.id === "prev" ? month - 1 : month + 1;
    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    displayCalendar();
  });
});