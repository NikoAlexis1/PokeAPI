<template>
    <div class="card">
        <div class="pokemon" v-for="pokemon of pokemones">
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
.card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
img{
   margin: 0 auto;
   width: 100%;
}
.pokemon{
    width: 100px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
}
input{
    width: 100%;
    margin-bottom: 10px;
    padding: 0;
}
</style>