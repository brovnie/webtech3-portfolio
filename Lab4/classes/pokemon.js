class Pokemon{
    constructor(){
        this.pokemonName = 'ditto';
        //this.pokemonPicture;
        this.catchPokemon();
    }
    catchPokemon(){
        let url = `https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`;
        fetch(url).then(response =>{
            return response.json();
        }).then(data=>{
            console.log(data);
            document.querySelector('#pokeTest').innerHTML = data.species.name;
        }).catch(err =>{
            console.log(err);
        });

    }
}

let pok = new Pokemon();