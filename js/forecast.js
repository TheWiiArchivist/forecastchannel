function homepage() {
    var glb = new Audio("/forecastchannel/sound/forecast_back.wav");
    glb.play();
    document.getElementById("mainpg").style.backgroundColor="black";
    document.getElementById("mainpg").style.opacity="0%";
    document.getElementById("mainpg").style.overflow="hidden";
    setTimeout(redirhome,900);
}
function redirhome() {
    window.location.href="https://chrisplayzyt.github.io";
}

function globetransform() {
    var glb = new Audio("/forecastchannel/sound/globeopen.wav");
    glb.play();
    document.getElementById("mainpg").style.backgroundColor="black";
    document.getElementById("mainpg").style.Color="white";
    document.getElementById("main-screen").style.display="none";
    document.getElementById("mainpg").style.overflow="hidden";
    document.getElementById("globetrans").style.display="block";
    setTimeout(globeopen,900);
}
function globeopen() {
    window.location.href="globe.html";
}


function hovr() {
    var hoverfore = new Audio("/forecastchannel/sound/forecast_hover.wav");
    hoverfore.play();
}


function clik() {
    var clk = new Audio("/forecastchannel/sound/WTR_SE_TENKI.wav");
    clk.play();
}


var chooselocationmusic = new Audio("/forecastchannel/bgm/settings.mp3");
var loadingfore = new Audio("/forecastchannel/bgm/loading.wav");
var foreerror = new Audio("/forecastchannel/sound/forecast_error.wav");
var closerror = new Audio("/forecastchannel/sound/clickerror.wav");
var loadingfinished = new Audio("/forecastchannel/sound/forecast_enter.wav");
var forecastbgm = new Audio("/forecastchannel/bgm/bgm_night.mp3");
chooselocationmusic.loop = true;
loadingfore.loop = true;
forecastbgm.loop = true;

function chooseregion() {
    showregions();
    chooselocationmusic.play();
    document.getElementById("main-screen").style.display="none";
    document.getElementById("loading-screen").style.display="none";
    document.getElementById("error-screen").style.display="none";
    document.getElementById("choose-screen").style.display="block";
    document.getElementById("choose-screen").style.opacity="100%";
}

function showregions() {
   document.getElementById("boxcontainerpickregionorlocationtxt").innerText="Choose the region closest to where you live.";
   document.getElementById("pickaregion").style.display="block";
   document.getElementById("pickalocation").style.display="none";
}

function showlocations() {
    notdone();
    document.getElementById("boxcontainerpickregionorlocationtxt").innerText="Choose the location closest to where you live.";
    document.getElementById("pickaregion").style.display="none";
    document.getElementById("pickalocation").style.display="block";
 }

 function choosefromlocations() {
    clik();
    showlocations();
}

function choosefromregions() {
    clik();
    showregions();
}



let settingweath;

function showLoadingScreen() {
    chooselocationmusic.pause();
    document.getElementById("choose-screen").style.display="none";
    document.getElementById("mainpg").style.backgroundColor="black";
    loadingfore.play();

    document.getElementById("main-screen").style.display="none";
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'block';
    loadingScreen.style.opacity = '100%';

   settingweath = setTimeout(finishloading, 2585);
}
function finishloading() {
    loadingfore.pause();
    document.getElementById("choose-screen").style.display="none";
    document.getElementById('loading-screen').style.display="none";
    document.getElementById("main-screen").style.display="block";
    showscreen01();
}

function forecastchannelunabletoreachinfo() {
    loadingfore.pause();
    loadingfinished.pause();
    forecastbgm.pause();

    document.getElementById("mainpg").style.backgroundColor="black";
    document.getElementById("main-screen").style.display="none";
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0%';
    document.getElementById("error-screen").style.display="block";
    document.getElementById("error-screen").style.opacity="100%";
    foreerror.play();

}

function closeerror() {
    document.getElementById("mainpg").style.backgroundColor="black";
    closerror.play();
    document.getElementById("error-screen").style.opacity="0%";
    document.getElementById("error-screen").style.overflow="hidden";
    setTimeout(redirhome,900);
}

// weather API stuff, thx to radical

function getWeatherAPI(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=f500f3df2d2d4047811133430231605&q=${city}`)
    .then(response => response.json())
        .then(data => {
            loadingfinished.play();
            forecastbgm.pause();

            // thx to larsens bgm code from globe.larsenv.xyz (his project i helped with), it plays local day if day and local night if night xD
            const weather1 = document.getElementById('namee');
            weather1.textContent = `Region: ${data.location.region}`;

            const weather2 = document.getElementById('ctry');
            weather2.textContent = `Country: ${data.current.country}`;

            const weather3 = document.getElementById('temperature');
            weather3.textContent = `Temperature: ${data.current.temp_f}°F`;

            const weather4 = document.getElementById('typee');
            weather4.textContent = `Current: ${data.current.condition.text}`;

            const weather5 = document.getElementById('lastupd');
            weather5.textContent = `Last Updated: ${data.current.last_updated}`;

            const weather6 = document.getElementById('UVVVV');
            weather6.textContent = `UV: ${data.current.uv}`;
            
        

 // thx to larsens bgm code from globe.larsenv.xyz, it plays local day if day and local night if night xD
            const currentHour = new Date().getHours();
            if (currentHour >= 5 && currentHour < 18) {
                forecastbgm = new Audio("/forecastchannel/bgm/bgm_night.mp3");
            } else {
                forecastbgm = new Audio("/forecastchannel/bgm/bgm_day.mp3");
            }
              // thx to larsens bgm code from globe.larsenv.xyz (his project i helped with), it plays local day if day and local night if night xD

            forecastbgm.play();
            forecastbgm.loop= true;
            clearTimeout(settingweath);
            finishloading();
        })
        .catch(err => {
            clearTimeout(settingweath);
            forecastchannelunabletoreachinfo();
        });
}


//getWeatherAPI('hmm');

function showscreen01() {
    document.getElementById("uv-index-screen").style.display="block";
    document.getElementById("topbtn01").innerHTML="____";
    document.getElementById("topbtn01").style.color="transparent";
   document.getElementById("topbtn01").onclick = function() {
    showscreen02();
    };

}

function SETTINGS() {
    clik();
    setTimeout(changeregionagain,300);
}

function changeregionagain() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const cookieName = cookie.split("=")[0];
        document.cookie = `${cookieName}=; path=/; expires=2006;`;
            
            window.location.reload();
            }};