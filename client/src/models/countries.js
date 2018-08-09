const App = require('../app');
const Require = require('../services/request.js');

const app = new App();
const request = new Request("");

var Country = function () {

}

Country.prototype.makeRequest = function(url, callback
  // const apiRequest = new XMLHttpRequest();
  request.open("GET", this.url);
  request.addEventListener("load", callback);
  request.send();
}

Country.prototype.requestComplete = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  populateList(countries);
}

Country.prototype.requestIndividual = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  const country = JSON.parse(jsonString);
  app.post(country);
}

Country.prototype.clearContent= function(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

Country.prototype.populateList = function(countries) {
  let div = document.getElementById(PLACEHOLDER);
  this.clearContent(div);
  for (let country of countries) {
    this.createListItem(country);
  }
}

Country.prototype.createListItem= function (country) {
  FORMAT TO BE DECIDED

  let addButton = document.createElement("button");
  addButton.setAttribute("id", country.alpha3Code);
  addButton.innerText = "Add Country to Bucket List";
  addButton.addEventListener("click", addCountryToBucketList)
}

Country.prototype.handleKeyPress = function () {
  let search = this.value;
  request.url = "https://restcountries.eu/rest/v2/name/" + search;
  this.makeRequest(url, requestComplete);
}

Country.prototype.handleButtonClick = function () {
  id = this.id;
  var countries = document.getElementById("countries-list");
  this.clearContent(countries);
  this.makeRequest(url, requestIndividual);
}

Country.prototype.addCountryToBucketList = function () {
  let id = this.id;
  request.url = "https://restcountries.eu/rest/v2/alpha/" + id;
  this.makeRequest(url, requestIndividual);
}

module.exports = Country;
