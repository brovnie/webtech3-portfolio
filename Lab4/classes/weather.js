class Weather {
  constructor() {
    this.getLocation();
    this.lat;
    this.lng;
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
 
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15684c4ffc14f32fcd28af8aa81bc818/${this.lat},${this.lng}?units=si`;
    //console.log(this.lat);
    //console.log(this.lng);
    return fetch(url).then(response => {
      //get json 
      return response.json();
    }).then(data => {
      let weatherText = "";

      //get pokemon
      let pokemonName = "";
      switch (data.currently.icon) {
        case 'clear-day':
          //pikacthu = 25
          pokemonName = "pikachu";
          weatherText = "clear sky";
          break;
        case "clear-night":
          pokemonName = "zubat";
          weatherText = "clear night ";
          break;
        case "rain":
          pokemonName = "wartortle";
          weatherText = "raining";
          break;
        case "snow":
          pokemonName = "lapras";
          weatherText = "snowing";
          break;
        case "sleet":
          pokemonName = "horsea";
          weatherText = "sleeting";
          break;
        case "wind":
          pokemonName = "onix";
          weatherText = "windy";
          break;
        case "fog":
          pokemonName = "koffing";
          weatherText = "foggy";
          break;
        case "cloudy":
          pokemonName = "psydyck";
          weatherText = "cloudy";
          break;
        case "partly-cloudy-day":
          pokemonName = "bulbassaur";
          weatherText = "party cloudy";
          break;
        case "partly-cloudy-night":
          pokemonName = "charmander";
          weatherText = "party cloudy night";
          break;
        case "hail":
          pokemonName = "dewgong";
          weatherText = "hailing";
          break;
        case "thunderstorm":
          pokemonName = "raichu";
          weatherText = "thunderstorm";
          break;
        case "tornado":
          pokemonName = "dragonite";
          weatherText = "tornedo";
          break;
      }

      document.querySelector('#weatherText').innerHTML = "It's " + weatherText + " outside";
      document.querySelector('#degrees').innerHTML = data.currently.temperature + "&deg";
      //console.log(pokemonName);
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      //this.icon = 'something that was returned in then';
    }).then(response => {
      //get json 
      return response.json();
    }).then(data => {
      //console.log(data);
      document.querySelector('#pokeTest').innerHTML = data.species.name;
      document.querySelector('#pokemon').setAttribute("src", data.sprites.front_default);
  }).catch(err => {
      console.log(err);

    });
  };

  errorLocation(err) {
    console.log(err);
    return Promise.resolve(this.icon);
  }

} // end class Weather


let weather = new Weather();