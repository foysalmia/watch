function currentTime(){
    var time = new Date();

    var hour = time.getHours();
    var minuite = time.getMinutes();
    var second = time.getSeconds();

    hour = updateTime(hour);
    minuite = updateTime(minuite);
    second = updateTime(second);

    var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    document.getElementById('watch').innerHTML = hour + ' : ' + minuite + ' : ' + second + ' ' + midday;

    var t = setTimeout(function(){
        currentTime()
    }, 1000);
}

function updateTime(k){
    if(k < 10){
        return '0' + k;
    }
    else{
        return k;
    }
}

currentTime();