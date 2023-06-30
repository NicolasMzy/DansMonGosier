<template>
  <div class="stats-view">
    <div class="container">
      <h1>Vente du mois</h1>
      <ul class="sales-list">
        <li v-for="(sale, index) in stat.monthlySales" :key="index">
          <div class="month">
              <h2>Le mois : {{ sale.month }}</h2>
              <h2>nombre de vente :{{ sale.sales }} ventes</h2>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script  lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name : 'StatsView',
  setup() {
    let stat = ref({monthlySales: []});
    let credId = localStorage.getItem('accountId');
    
    onMounted(async () => {
        const stats = await axios.post('http://localhost:3007/stats/restaurant/monthly-sales/' + credId?.toString());
        stat.value = stats.data;
    });
    return {
      stat,
    }
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
}

.sales-list {
  list-style-type: none;
  padding: 0;
}

.sales-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

@media (min-width: 768px) {
  .container {
    padding: 0;
  }
}
</style>
