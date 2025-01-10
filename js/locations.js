var foreerror = new Audio("/forecastchannel/sound/forecast_error.wav");
var closerror2 = new Audio("/forecastchannel/sound/forecast_back.wav");

function notdone() {
    foreerror.play();
    foreerror.currentTime=0;
    showcontrols2();
}

function showcontrols2() {
    document.getElementById("locationerror").style.opacity="100%";
    document.getElementById("locationerror").style.backgroundSize="680px";
    document.getElementById("locationerror").style.visibility="visible";
}
function hidecontrols2() {
    closerror2.play();
    document.getElementById("locationerror").style.opacity="0%";
    document.getElementById("locationerror").style.backgroundSize="150px";
    document.getElementById("locationerror").style.visibility="hidden";
}



// choose da location:
function chooselocation1() {
    clik();
  //  showLoadingScreen();
   // setTimeout(location01, 2300);
}


// locations

function location01() {
  //  getWeatherAPI('District of Columbia');
}
