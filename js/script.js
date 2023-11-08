const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_id');
const pokemonImage = document.querySelector('.pokemon_imagem');
const input=document.querySelector('form');
const text = document.querySelector("#pao");
const buttonPrev = document.querySelector('.btn-voltar');
const buttonNext = document.querySelector('.btn-proximo');

let searchePokemon = 1;


const fetchpokemon   = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async(pokemon) => {
    
    const data = await fetchpokemon(pokemon)
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${Number(data.id)}.gif`
    //pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}
input.addEventListener('submit', (event) =>{
    event.preventDefault();
    //alert(text.value)

    renderPokemon(text.value);
    input.value='';
});

buttonPrev.addEventListener('click', () =>{
    searchePokemon -= 1;
    renderPokemon(searchePokemon);
});
buttonNext.addEventListener('click', () =>{
    searchePokemon += 1;
    renderPokemon(searchePokemon);
});

renderPokemon('1');
