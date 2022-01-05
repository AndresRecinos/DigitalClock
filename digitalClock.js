
function clockObj() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = "AM";

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  document.getElementById('clock').innerText = time;
  setTimeout(clockObj, 1000);

}

clockObj();


function dateObj() {
  let date = new Date();
  //let weekDay = date.getDay();
  //let month = date.getMonth();
  let year = date.getFullYear();
  let day = date.getDate();

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let d = days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + day + ' ' + year;

  document.getElementById('date').innerText = d;
  setTimeout(clockObj, 1000);

}

dateObj();