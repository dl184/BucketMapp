const BucketListView = require('./views/bucketlistView');
const Request = require('./services/request.js');
const Countries = require('./models/countries.js');

const bucketListView = new BucketListView();
const request = new Request('http://localhost:3000/bucketlist');
const countries = new Countries();

const getCountryRequestComplete = function (countries) {
  for (let country of countries) {
    bucketListView.addCountry(country);
  }
}

const post = function (country) {
  request.post(createRequestComplete, country);
  bucketListView.addCountry(country);
}

const handleKeyPress = function (event) {
  event.preventDefault();
  countries.handleKeyPress();
}

const createRequestComplete = function (country) {
  bucketListView.addCountry(country);
}

const deleteAllButtonClicked = function (event) {
  event.preventDefault();
  request.delete(deleteAllRequestComplete);
}

const deleteAllRequestComplete = function () {
    bucketListView.clear();
}

const appStart = function(){
  request.get(getCountryRequestComplete);

  const searchBar = document.getElementById("search-bar");
  searchBar.addEventListener("keyup", handleKeyPress);

  const deleteButton = document.querySelector("#deleteButton");
  deleteButton.addEventListener("click", deleteAllButtonClicked);
}

document.addEventListener('DOMContentLoaded', appStart);
