import Weather from './weather';

let weather = new Weather();
class Pokemon {
    constructor(){
        this.pokemonName;
        this.pokemonPicture;
        this.catchPokemon();
    }
    catchPokemon(){
        //get weather and display pokemon

        let url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`;
        fetch(url).then(response =>{
            return response.json();
        }).then(data=>{
            console.log(data);
            document.querySelector('#pokeTest').innerHTML = data.species.name;
            document.querySelector('#pokemon').setAttribute("src", data.sprites.front_default);
            console.log(this.icon);
        }).catch(err =>{
            console.log(err);
        });

    }
}
console.log(weather.getIcon());
let pok = new Pokemon();