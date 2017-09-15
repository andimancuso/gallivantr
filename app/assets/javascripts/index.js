// Foursquare API Info
const clientId = 'MLBEDKSFHOZLTD3Q4XPD03DRXK20KAAHDT2SBJLL4ZFFX0WH';
const clientSecret = '04DFXWA5BTEEBPGAEZDV0GBH53XY4R4XJ2O53MNVIL0MH3IE';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imgPrefix = 'https://igx.4sqi.net/img/general/150x200';

// APIXU Info
const apiKey = 'ba1d09cb3b2c435f901235817171309';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

// all above API keys are for use during development only
// they'll be regenerated & secured for public deployment

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Date string
const date = new Date();
let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();

function leadingZero(timeDate) {
  if (timeDate <= 9) { return timeDate = "0" + timeDate } else { return timeDate };
};

let todaysDate = year + leadingZero(month) + leadingZero(day);

// AJAX functions
async function getVenues() {
  const cityToLand = $input.val();
  const urlToFetch = url + cityToLand + '&venuePhotos=1&limit=10&client_id=' +
    clientId + '&client_secret=' + clientSecret + '&v=' + todaysDate;

  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      let venues = jsonResponse.response.groups[0].items.map(spot => spot.venue);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  const urlToFetch = forecastUrl + apiKey + '&q=' + $input.val() + '&days=4&hour=11';

  try {
    let response = await fetch(urlToFetch);
    if (response.ok) {
      let jsonResponse = await response.json();
      let days = jsonResponse.forecast.forecastday;
      return days;
    }
  } catch (error) {
    console.log(error);
  }
}

// Render functions
function renderVenues(venues) {
  $venueDivs.forEach(($venue) => {
    let randNum = Math.floor(Math.random() * 9);
    let formattedAddress = venues[randNum].name + " " + venues[randNum].location.address + " " + venues[randNum].location.city;
    let urlAddress = formattedAddress.replace(/ /g, "+");
    let venueContent =
      '<h2>' + venues[randNum].name + '</h2>' +
      '<img class="venueimage" src="' + imgPrefix +
      venues[randNum].photos.groups[0].items[0].suffix + '"/>' +
      '<h3><br />Address:</h3>' +
          '<a href="https://google.com/maps/place/' + urlAddress + '" target="_blank">' +
      '<p>' + venues[randNum].location.address + '</p>' +
      '<p>' + venues[randNum].location.city + '</p>' +
      '<p>' + venues[randNum].location.country + '</p>' +
          '</a>';

    $venue.append(venueContent);
    venues.splice(randNum,1);
  });
  $destination.append('<h2>' + venues[0].location.city + '</h2>');
}

function renderForecast(days) {
  $weatherDivs.forEach(($day, index) => {
    let weatherContent =
      '<h2> High: ' + days[index].day.maxtemp_f + '°F</h2>' +
      '<h2> Low: ' + days[index].day.mintemp_f + '°F</h2>' +
      '<img src="http://' + days[index].hour[0].condition.icon +
      '" class="weathericon" />' +
      '<h2>' + weekDays[(new Date(days[index].date)).getDay()] + '</h2>';
    $day.append(weatherContent);
  });
}

function executeSearch() {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  $container.css("display", "block");
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)
