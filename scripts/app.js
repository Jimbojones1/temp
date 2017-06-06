//console.log('window is loaded')
/// to wait for the window to be loaded
window.onload = function (){

}


// background image is loading after the prompt

var temp = window.prompt('What is the temperature?');


var weather = {
  temp: 70,
  windspeed: 30,
  humidity: 20,
  rainProb: 30,
  pollutionIndex: 10,
  calcHumidity: function(amountOfWaterInAir, temp){
    // amountOfWater / temp
    // weather.humidity
    this.humidity = amountOfWaterInAir / temp;
  },
  calcWindspeed: function(temp, airPressure){
    this.windspeed = temp / airPressure;
  }
}












