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
    this.getWeather();
  }
 
  getWeather() {
 
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15684c4ffc14f32fcd28af8aa81bc818/${this.lat},${this.lng}?units=si`;

    return fetch(url).then(response => {
      //get json 
      return response.json();
    }).then(data => {
      let weatherText = "";
      let backgroundImg = "";
      //get pokemon
      let pokemonName = "";
      switch (data.currently.icon) {
        case 'clear-day':
          //pikacthu = 25
          pokemonName = "pikachu";
          weatherText = "clear sky";
          backgroundImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fak8.picdn.net%2Fshutterstock%2Fvideos%2F723328%2Fthumb%2F1.jpg&f=1&nofb=1";
          break;
        case "clear-night":
          pokemonName = "zubat";
          weatherText = "clear night ";
          backgroundImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fak0.picdn.net%2Fshutterstock%2Fvideos%2F1864750%2Fthumb%2F1.jpg&f=1&nofb=1";
          fontColor = "white";
          break;
        case "rain":
          pokemonName = "wartortle";
          weatherText = "raining";
          backgroundImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrBsqqu9tqIA%2Fmaxresdefault.jpg&f=1&nofb=1";
          fontColor = "white";
          break;
        case "snow":
          pokemonName = "lapras";
          weatherText = "snowing";
          backgroundImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgrist.files.wordpress.com%2F2016%2F01%2Fshutterstock_106306184.jpg%3Fw%3D1024%26h%3D576%26crop%3D1&f=1&nofb=1";
          break;
        case "sleet":
          pokemonName = "horsea";
          weatherText = "sleeting";
          backgroundImg = "https://images.unsplash.com/photo-1484441876734-071a3e4b1ac7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1938&q=80";
          break;
        case "wind":
          pokemonName = "onix";
          weatherText = "windy";
          backgroundImg = "https://images.unsplash.com/photo-1528056027981-d14e0046b371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
          break;
        case "fog":
          pokemonName = "koffing";
          weatherText = "foggy";
          backgroundImg = "https://images.unsplash.com/photo-1519982714547-54ccfb2c121e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1373&q=80";
          break;
        case "cloudy":
          pokemonName = "psydyck";
          weatherText = "cloudy";
          backgroundImg = "https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80";
          break;
        case "partly-cloudy-day":
          pokemonName = "bulbassaur";
          weatherText = "party cloudy";
          backgroundImg = "https://images.unsplash.com/photo-1520985244272-9d0b8067a4ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
          break;
        case "partly-cloudy-night":
          pokemonName = "charmander";
          weatherText = "party cloudy night";
          backgroundImg = "https://images.unsplash.com/photo-1479156661942-92cd989cdb56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
          break;
        case "hail":
          pokemonName = "dewgong";
          weatherText = "hailing";
          backgroundImg = "https://images.unsplash.com/photo-1570948563297-a5c3cb412db0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";
          break;
        case "thunderstorm":
          pokemonName = "raichu";
          weatherText = "thunderstorm";
          backgroundImg = "https://images.unsplash.com/photo-1576290134419-915a21939122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
          break;
        case "tornado":
          pokemonName = "dragonite";
          weatherText = "tornedo";
          backgroundImg = "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80";
          break;
      }
      
      document.querySelector('#weatherText').innerHTML = "It's " + weatherText + " outside";
      document.querySelector('#degrees').innerHTML = data.currently.temperature + "&deg";
      document.querySelector('.container').style.backgroundImage = `url(${backgroundImg})`;
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
  }

} // end class Weather


let weather = new Weather();