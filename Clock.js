
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 18) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "18"  : hour;
    min = min < 10 ? "0" + min : min;
   

    let currentTime = hour + ":"
        + min + ""

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();