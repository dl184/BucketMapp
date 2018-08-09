const _= require('lodash');


 var BucketlistView = function(){
   this.bucketList = [];
 }

 BucketlistView.prototype.addCountry = function(country) {
   this.bucketList.push(country);
   this.render(country)
 }

 BucketlistView.prototype.clear = function(country) {
   this.bucketlist = [];
   const ul = document.querySelector('#country');
   ul.innerHTML = '';
 }

 BucketlistView.prototype.deleteOne = function(deletedCountry) {
   _.remove(this.bucketList, deletedCountry)
   const ul = document.querySelector('#country');
   ul.innerHTML = '';
   for (let country of countries) {
     this.render(country);
   }
   // if(deletedCountry of countries){
   //   deletedCountry.name === country.name
   // }
   // remove li from ul if the selected country name is the same using IF statement using the index

 }

 BucketlistView.prototype.render = function(country) {
   const ul = document.querySelector('#country');
   const li = document.createElement('li');
   const text = document.createElement('p');
   console.log(country.name);
   text.innerText = country.name;
   let countryImage = document.createElement('img');
   countryImage.src = country.flag
   li.appendChild(text);
   li.appendChild(countryImage);
   ul.appendChild(li);
  }



 module.exports = BucketlistView;
