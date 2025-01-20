function showcontrols() {
    document.getElementById("controlsmenu").style.opacity="100%";
    document.getElementById("controlsmenu").style.backgroundSize="680px";
    document.getElementById("controlsmenu").style.visibility="visible";
}
function hidecontrols() {
    document.getElementById("controlsmenu").style.opacity="0%";
    document.getElementById("controlsmenu").style.backgroundSize="150px";
    document.getElementById("controlsmenu").style.visibility="hidden";
}

function hovr() {
    var hoverfore = new Audio("/forecastchannel/sound/forecast_hover.wav");
    hoverfore.play();
}


function clik() {
    var clk = new Audio("/forecastchannel/sound/WTR_SE_TENKI.wav");
    clk.play();
}



// more code in in globe.larsenv.xyz, i removed all of the code here to clean it xD