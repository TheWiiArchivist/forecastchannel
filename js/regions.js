// thx to radical for the weatherapi btw

let chosenaregionorlocation = document.cookie;
const valueOcookie = `; ${document.cookie}`;

function getCookie(name) {
    const parts = valueOcookie.split(`; ${name}=`);
    if (parts.length === 2) 
        return parts.pop();
}

function chooseRegion(regionId) {
    showLoadingScreen();

    const weatherapiregions = {
        // OML THE FORECAST CHANNEL HAS SO MANY REGIONS, I TOOK THEM FROM THIS VIDEO: https://www.youtube.com/watch?v=PQ38oFxXl84, I BET THERE IS PROBABLY EVEN MORE BUT IDK.. locations arent done cuz im not sure how todo url prams, i just barley learned const and cookies recently xD, so location NEVER :pray:
        1: "District of Columbia",
        2: "Alabama",
        3: "Alaska",
        4: "Arizona",
        5: "California",
        6: "Colorado",
        7: "Connecticut",
        8: "Delaware",
        9: "Florida",
        10: "Georgia",
        11: "Hawaii",
        12: "Idaho",
        13: "Illinois",
        14: "Indiana",
        15: "Iowa",
        16: "Kansas",
        17: "Kentucky",
        18: "Louisiana",
        19: "Maine",
        20: "Michigan",
        21: "Minnesota",
        22: "Mississippi",
        23: "Missouri",
        24: "Montana",
        25: "Nebraska",
        26: "Nevada",
        27: "New Hampshire",
        28: "New Jersey",
        29: "New Mexico",
        30: "New York",
        31: "North Carolina",
        32: "North Dakota", // Dakota, DAKOTATH?!, THE ONE REE SHOP GUY??!?!?!?
        33: "Ohio", //https://en.wikipedia.org/wiki/Ohio_(meme)
        34: "Oklahoma",
        35: "Oregon",
        36: "Pennsylvania",
        37: "Rhode Island",
        38: "South Carolina",
        39: "South Dakota",
        40: "Tennessee",
        41: "Texas",
        42: "Utah",
        43: "Vermont",
        44: "Virginia",
        45: "Washington",
        46: "West Virginia",
        47: "Wisconsin",
        48: "Wyoming",
        49: "Puerto Rico"
    };

    setTimeout(() => {
        const regionName = weatherapiregions[regionId];
        if (regionName) {
            document.cookie = `chosenRegion=${regionId}; path=/; max-age=2006`; 
            getWeatherAPI(regionName);
        } else {
            chooseregion();
        }
    }, 2300);
}

function initializeRegion() {
    const chosenRegion = getCookie('chosenRegion');
          if (chosenRegion) {
     chooseRegion(chosenRegion);
    } else { chooseregion();// lil bro thinks he can get in without choosing a region, idito..
    }
};//_)


