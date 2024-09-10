<template>
    <div class="container">
        <div class="card" v-for="pokemon of pokemones">
            <img :src="pokemon.image" alt="">
            <input type="text"><br>
            <button>Descubrir</button>
        </div>
        
    </div>
</template>

<script>

export default {
    props:{
        pokemones: Object
    }
}
</script>
<style scoped>

</style>