// For Digital clock and Calender
let digitalClock = () => {
       
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthDays = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let date = new Date();

    var day = date.getDay();
    var date1 = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day_night = "AM";
    if (hours >= 12) {
      day_night = "PM";
      hours = hours - 12;
      // hours = hours % 12 || 12;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = day_night;

    document.getElementById("day").innerHTML = weekDays[day];
    document.getElementById("date1").innerHTML = date1;
    document.getElementById("month").innerHTML = monthDays[day];
    document.getElementById("year").innerHTML = year;
    
    setTimeout(digitalClock, 500);
    
  } 
  digitalClock();
  
//   For Analog Clock 
  setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;
}, 1000);

