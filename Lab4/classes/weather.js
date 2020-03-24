class Weather {
  constructor() {
    this.getLocation();
    this.lat;
    this.lng;
    this.icon;
  } // end constructor

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      this.myLocation.bind(this),
      this.errorLocation.bind(this)
    );
  }

  myLocation(result) {
    this.lat = result.coords.latitude;
    this.lng = result.coords.longitude;
    //console.log(this.lat);
    this.getWeather();
  }

  getWeather() {

    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15684c4ffc14f32fcd28af8aa81bc818/${this.lat},${this.lng}?units=si`
    return fetch(url).then(response => {
      //get json 
      return response.json();
    }).then(data => {
      document.querySelector('#test').innerHTML = data.currently.summary;
      document.querySelector('#test2').innerHTML = data.currently.temperature + "deg";
      //get pokemon
      let pokemonName="";
      switch (data.currently.icon) {
        case 'clear-day':
          pokemonName = "pikatchu";
          break;
        case "clear-night":
          pokemonName = "zubat";
          break;
        case "rain":
          pokemonName = "wartortle";
          break;
        case "snow":
          pokemonName = "lapras";
          break;
        case "sleet":
          pokemonName = "horsea";
          break;
        case "wind":
          pokemonName = "onix";
          break;
        case "fog":
          pokemonName = "koffing";
          break;
        case "cloudy":
          pokemonName = "psydyck";
          break;
        case "partly-cloudy-day":
          pokemonName = "bulbassaur";
          break;
        case "partly-cloudy-night":
          pokemonName = "charmander";
          break;
        case "hail":
          pokemonName = "dewgong";
          break;
        case "thunderstorm":
          pokemonName = "raichu";
          break;
          case "tornado":
            pokemonName = "dragonite";
          break;
      }
      console.log(pokemonName);
      //this.icon = 'something that was returned in then';
    }).catch(err => {
      console.log(err);
      //this.icon = 'something that was returned in catch';
      //return Promise.resolve(this.icon);
    });
  };

  errorLocation(err) {
    console.log(err);
    return Promise.resolve(this.icon);
  }

} // end class Weather

let weather = new Weather();