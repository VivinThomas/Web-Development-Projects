setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

},);
setInterval(() => {
    const time = document.querySelector('#Time');
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day_night ="AM";
    if(hours > 12){
        day_night = "PM";
    }
    if(hours > 12){
        hours=hours-12;
        // for 12-hour clock and removing this will make it 24-hour clock
    }
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    Time.textContent = hours + ":" + minute + ":" + second +" " +day_night; 
},);
// note to be remebered always remove "interval" written at the bottom of the setInterval Function to bring the function into working