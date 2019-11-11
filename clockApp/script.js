
function clock() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var min = fullDate.getMinutes();
    var sec = fullDate.getSeconds();
    
    //asign variables to get the times
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    //allows the time to be set to two decimals 

    document.getElementById('hour').innerHTML = hours + " : ";
    document.getElementById('minute').innerHTML =  min + " : ";
    document.getElementById('second').innerHTML = sec;
    
    //replaces the info in the html span tags
}

setInterval(clock, 1000);
//allows the clock to actually change