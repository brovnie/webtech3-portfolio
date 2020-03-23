class Weather{
constructor(){
    this.getLocation();
    this.lat;
    this.lng;
} // end constructor
getLocation(){
    navigator.geolocation.getCurrentPosition(
        this.myLocation.bind(this),
        this.errorLocation.bind(this)
    );
}

myLocation(result){
    this.lat = result.coords.latitude;
    this.lng = result.coords.longitude;
    //console.log(this.lat);
    this.getWeather();
}

getWeather(){
    // https://api.darksky.net/forecast/15684c4ffc14f32fcd28af8aa81bc818/37.8267,-122.4233
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15684c4ffc14f32fcd28af8aa81bc818/${this.lat},${this.lng}?units=si` 
    fetch(url).then(response => {
        //get json 
         return response.json();
    }).then(data =>{
        console.log(data);
        document.querySelector('#test').innerHTML = data.currently.summary;
        document.querySelector('#test2').innerHTML = data.currently.temperature;
    }).catch(err => {
        console.log(err);
    });
};

errorLocation(err){
    console.log(err);
}
} // end class Weather

let weather = new Weather();

