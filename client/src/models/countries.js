var Country = function () {
  // this.element = element;
  // console.log(element);
}

const CountryView = require('../views/countryView.js');
const Request = require('../services/request.js');


const countryView = new CountryView(this.element);
const countriesRequest = new Request('https://restcountries.eu/rest/v2/');
// const countries = new Country();


//
// Country.prototype.makeRequest = function(url, callback
//   // const apiRequest = new XMLHttpRequest();
//   request.open("GET", this.url);
//   request.addEventListener("load", callback);
//   request.send();
// }
//
// Country.prototype.requestComplete = function() {
//   if (this.status !== 200) return;
//   const jsonString = this.responseText;
//   const countries = JSON.parse(jsonString);
//   populateList(countries);
// }
//
// Country.prototype.requestIndividual = function() {
//   if (this.status !== 200) return;
//   const jsonString = this.responseText;
//   const country = JSON.parse(jsonString);
//   app.post(country);
// }

const clearContent= function(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

const populateList = function(countries) {
  let div = document.getElementById("country-choice");
  clearContent(div);
  for (let country of countries) {
    createListItem(country);
  }
}

const populateDB = function (countries) {
  console.log(countries);
  let country = countries[0];
  console.log(country);
  app.post(country);
  let div = document.getElementById('country-list');
  this.clearContent(div);
}

const createListItem= function (country) {
  countryView.addCountry(country);



}.bind(this);

Country.prototype.handleKeyPress = function () {
  let countrySearch = document.getElementById("country-search");
  let search = countrySearch.value;
  countriesRequest.url = "https://restcountries.eu/rest/v2/name/" + search;
  countriesRequest.get(populateList)
}

const handleButtonClick = function () {
  id = this.id;
  var countries = document.getElementById("countries-list");
  countriesRequest.url = "https://restcountries.eu/rest/v2/alpha/" + id;
  countriesRequest.get(addCountryToBucketList)
}

const addCountryToBucketList = function () {
  let countrySearch = document.getElementById("country-search");
  let search = countrySearch.value;
  countriesRequest.url = "https://restcountries.eu/rest/v2/alpha/" + search;
  console.log(countriesRequest.url);
  countriesRequest.get(populateDB);
}

module.exports = Country;
