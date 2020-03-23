class Pokemon {
    constructor(){
        this.pokemonName = "pokeName";
        this.pokemonPicture;
        this.catchPokemon();
    }
    catchPokemon(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`;
        fetch(url).then(response =>{
            return response.json();
        }).then(data=>{
           // console.log(data);
            document.querySelector('#pokeTest').innerHTML = data.species.name;
            document.querySelector('#pokemon').setAttribute("src", data.sprites.front_default);
        }).catch(err =>{
            console.log(err);
        });

    }
}

let pok = new Pokemon();
