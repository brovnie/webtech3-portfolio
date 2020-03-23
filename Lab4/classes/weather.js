class Weather{
constructor(){
    this.getLocation();
    this.lat;
    this.lng;
} // end constructor
getLocation(){
    navigator.geolocation.getCurrentPosition(
        this.myLocation.bind(this);
        this.errorLocation.bind(this);
    );
}

myLocation(result){
    this.lat = result.coords.latitude;
    this.lng = result.coords.longitude;
}

getWeather();

errorLocation(err){
    console.log(err);
}
} // end class Weather

let weather = new Weather();