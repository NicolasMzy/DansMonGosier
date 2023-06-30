<template>
  <div class="home">
    <img class="img" src="../assets/confirmed.png"/>
    <div class="title">
        <p>Livraison confirmé !</p>
    </div>
    <div class="info">
        <p>La livraison arrive bientôt...</p>
    </div>
  </div>
</template>

<script lang="ts">

export default {
name:'ConfirmedView.vue',
components:{

}
}
</script>

<style scoped>
    .home{
        height: 100vh;
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .title{
        display: flex;
        justify-content: center;
        font-size: 1.6em;
        font-weight: 700;
    }
    
    .img{
        height: 200px;
        width: 240px;
    }
</style>