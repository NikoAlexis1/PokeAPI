<script>
import axios from 'axios';
import Pokemon from './components/Pokemon.vue';
export default {
  data() {
    return {
      pokemonsUrl: [],
      pokemones: [],
      contador: 0,
    }
  },
  methods: {
    async getPokemons() {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      this.pokemonsUrl = data.results.map(poke => poke.url);
      const pokePromise = this.pokemonsUrl.map(url => axios.get(url))
      const responses = await Promise.all(pokePromise);
      this.pokemones = responses.map(response => {
        const pokemonData = response.data;
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.front_default,
          discovered: false,
        };
      })
    },
    aumentarContador(){
      this.contador++;     
    }
  },
  mounted() {
    this.getPokemons();
  },
  components: {
    Pokemon
  }
}
</script>

<template>
  <div class="header">
    <img id="logo" src="/src/assets/PokemonLogo.png" alt="">
    <h1>¿Quien es ese Pokémon?</h1>
    <p><strong>Pokemones descubiertos: {{ contador }}</strong> </p>
  </div>
  
  <div class="pokemon">
    <Pokemon v-for="(pokemon, i) in pokemones" :key="i" :pokemones="pokemon" id="Poke" @discovered="aumentarContador" />
  </div>
  
</template>
