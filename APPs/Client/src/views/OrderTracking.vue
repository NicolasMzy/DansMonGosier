<template>
    <div class="container">
      <Header/>
      <div class="container-tracking">
        <div class="stage mb-3">
          <img :src="stages[currentStage].image" alt="Image de l'étape" class="stage-image">
          <span class="text-dark">{{ stages[currentStage].name }}</span>
        </div>
    
        <div class="progress">
          <div v-for="(stage, index) in stages" :key="index" class="progress-bar" :class="getProgressBarClass(index)" role="progressbar" :style="{ width: getProgressBarWidth() + '%' }" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    
        <button @click="nextStage" class="btn btn-primary mt-3" :disabled="currentStage >= stages.length - 1">Prochaine étape</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import Header from '../components/componentsGlobaux/Header.vue'
  export default defineComponent({
    name: "OrderTracking",
    components : {
      Header,
    },
    setup() {
      const stages = ref([
        { name: "Passation de la commande", image: "src/assets/tracking/command_send.jpg" },
        { name: "Acceptation commande", image: "src/assets/tracking/command_accept.jpg" },
        { name: "Acceptation livraison", image: "src/assets/tracking/incoming.jpg" },
        { name: "Commande reçu", image: "src/assets/tracking/recept.png" },
      ]);
  
      const currentStage = ref(0);
  
      const nextStage = () => {
        if (currentStage.value < stages.value.length - 1) {
          currentStage.value++;
        }
      };
  
      const getProgressBarClass = (index: number) => {
        if (currentStage.value > index) {
          return "bg-completed";
        } else if (currentStage.value === index) {
          return "progress-bar-animated";
        } else {
          return "bg-pending";
        }
      };
  
      const getProgressBarWidth = () => {
        return (100 / stages.value.length);
      };
  
      return {
        stages,
        currentStage,
        nextStage,
        getProgressBarClass,
        getProgressBarWidth,
      };
    },
  });
  </script>
  
  <style scoped>
  .container-tracking {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Ajouté pour prendre tout l'espace vertical de la vue */
  }
  
  .stage {
    text-align: center;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center; /* Ajouté pour centrer les éléments horizontalement */
    gap: 1rem; /* Ajouté pour donner de l'espace entre l'image et le texte */
  }
  
  .stage-image {
    max-height : 300px;
    width : auto;
  }
  
  .progress {
    height: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    width: 100%;
  }
  
  .progress-bar {
    transition: background-color 0.5s ease;
  }
  
  .bg-pending {
    background-color: #f2f2f2;
  }
  
  .progress-bar-animated {
    background-color: #808080;
    background-image: linear-gradient(90deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.1) 50%, rgba(255,255,255,.1) 75%, transparent 75%, transparent);
    background-size: 40px 40px;
    animation: progress-stripes 1s linear infinite;
  }
  
  .bg-completed {
    background-color: #800020; 
  }
  
  @keyframes progress-stripes {
    0% { background-position: 40px 0; }
    100% { background-position: 0 0; }
  }
  </style>
  
  