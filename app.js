// function to rotate the hands
function moveHands() {
    with (new Date()) {
    h = 30 *(getHours() % 12 + getMinutes() / 60) //30 degrees hour
    m = 6 * getMinutes() //6 degrees per minute
    s = 6 * getSeconds() //6 degree per second
    
    // setting the rotate css attribute to those degree values
    document.getElementById("hours").style.cssText = "-webkit-transform:rotate(" + h + "deg);";
    document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";

    setTimeout(moveHands, 1000);  //calling the function every second

}

}
window.onload = moveHands

// digital watch function
function digitalWatch() {
    // function to update the time every second
    function watchUpdate() {
        let now = new Date();
        let h = now.getHours() % 12; //getting the current hour
        let m = now.getMinutes() //getting the current minute
        let s = now.getSeconds() //getting the current second
        // concatenating 0
        function addingZeroForH() {
            return 
        }
        document.getElementById("watch").innerHTML = `${h < 10? '0' + h:h}:${m < 10? '0' + m:m}:${s < 10? '0' + s:s} `
    }
    watchUpdate()
    setInterval(watchUpdate,1000)
}
digitalWatch()