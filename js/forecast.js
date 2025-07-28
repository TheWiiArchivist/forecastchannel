
var chooselocationmusic = new Audio("/forecastchannel/bgm/settings.mp3");
var loadingfore = new Audio("/forecastchannel/bgm/loading.wav");
var foreerror = new Audio("/forecastchannel/sound/forecast_error.wav");
var closerror = new Audio("/forecastchannel/sound/clickerror.wav");
var loadingfinished = new Audio("/forecastchannel/sound/forecast_enter.wav");
var forecastbgm = new Audio("");
var forecastsettings = new Audio("/forecastchannel/bgm/settings.mp3");
chooselocationmusic.loop = true;
loadingfore.loop = true;
forecastbgm.loop = true;
forecastsettings.loop = true;


function homepage() {
/*
    var glb = new Audio("/forecastchannel/sound/forecast_back.wav");
    glb.play();
*/
    closerror.play();
    document.getElementById("error-screen").style.backgroundColor="black";
    document.getElementById("error-screen").style.opacity="0%";
    setTimeout(redirhome,900);
}
function redirhome() {
    window.location.href="https://thewiiarchivist.github.io";
}
function hovr() {
    var hoverfore = new Audio("/forecastchannel/sound/forecast_hover.wav");
    hoverfore.play();
}


function clik() {
    var clk = new Audio("/forecastchannel/sound/WTR_SE_TENKI.wav");
    clk.play();
}
