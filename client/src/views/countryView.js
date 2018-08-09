const _= require('lodash');
const Country = require('../models/countries.js');


 var CountryView = function(){
   this.countryView = [];
   // this.element = element;
   // console.log(element);
 }

 CountryView.prototype.addCountry = function(country) {
   this.countryView.push(country);
   this.render(country)
 }

 CountryView.prototype.clear = function(country) {
   this.countryView = [];
   const ul = document.querySelector('#country-choice');
   ul.innerHTML = '';
 }

 CountryView.prototype.deleteOne = function(deletedCountry) {
   _.remove(this.countryView, deletedCountry)
   const ul = document.querySelector('#country-choice');
   ul.innerHTML = '';
   for (let country of countries) {
     this.render(country);
   }
   // if(deletedCountry of countries){
   //   deletedCountry.name === country.name
   // }
   // remove li from ul if the selected country name is the same using IF statement using the index

 }

 CountryView.prototype.render = function(country) {
   const ul = document.getElementById('country-choice')
   const li = document.createElement('li');
   const text = document.createElement('p');
   text.innerText = country.name;
   let addButton = document.createElement("button");
   addButton.setAttribute("id", country.alpha3Code);
   addButton.innerText = "Add Country to Bucket List";
   console.log(this);

   li.appendChild(text);
   li.appendChild(addButton);
   ul.appendChild(li);
  }




 module.exports = CountryView;
