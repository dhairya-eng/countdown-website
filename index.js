let a ;
let days;
let hour;
let minute;
let seconds;
setInterval(() => {
    a=new Date();
    days=a.getDay();
    hour=a.getHours();
    minute=a.getMinutes();
    seconds=a.getSeconds();
    document.getElementById("days").innerHTML=days;
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("second").innerHTML=seconds;
}, 1000);