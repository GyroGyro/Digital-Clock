function showTime() {
    var date = new Date();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // document.getElementById('Clock').innerHTML = hours + ":" + minutes + ":" + seconds;
    // document.getElementById('Clock').innerHTML = 
    // date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    document.getElementById('Clock').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    setInterval(showTime, 500);
}

showTime()