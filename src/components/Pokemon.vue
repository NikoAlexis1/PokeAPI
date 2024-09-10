<template>
    <div class="container">
        <div class="card">
            <img :class="{ 'filtro': filtro == true }" :src="pokemones.image" alt="" id="imgPoke">
            <input v-show="!pokemones.discovered" type="text" v-model="inputText" @keydown.enter="pokemonDescubierto">
            <button v-show="!pokemones.discovered" @click="pokemonDescubierto">Descubrir</button>
            <p v-show="pokemones.discovered">{{ pokemones.name }}</p>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            filtro: true,
            inputText: "",
            discoveredPokemon: "",
        }
    },
    props: {
        pokemones: Object
    },
    methods: {
        pokemonDescubierto() {
            if (this.inputText === this.pokemones.name) {
                this.pokemones.discovered = true;
                this.$emit('discovered', this.pokemones)
                this.inputText = '';
                this.filtro = false;
            }else{
                alert('Pokemon Incorrecto');
            }
        }
    }
}
</script>