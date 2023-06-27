<template>
    <div class="basket">
      <h2>Your Basket</h2>
      <ul>
        <li v-for="(item, index) in basket" :key="index">
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: ${{ item.price }}</p>
          <button @click="removeFromBasket(item.label)">Remove</button>
          <button @click="incrementQuantity(item)">Increase</button>
          <button @click="decrementQuantity(item)">Decrease</button>
        </li>
      </ul>
      <h3>Total: ${{ }}</h3>
    </div>
    <transition name="ease">
      <div class="card" v-if="basket">
        <button @click="" class="payment-button">Valider et Payer</button>
      </div>
    </transition>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import type {ComputedRef} from 'vue'
  import { useStore } from 'vuex';
  import type { BasketItem } from '../types/Types';
  
  export default defineComponent({
    name: 'BasketView',
    setup() {
        const store = useStore();

        const basket = computed(() => store.state.basket);
        const items = computed(() => store.state.items);

        function addToBasket(item: BasketItem) {
            store.commit('addToBasket', item);
        }
        const incrementQuantity = (item: BasketItem) => {
            store.commit('incrementQuantity', item);
        };

        const decrementQuantity = (item: BasketItem) => {
            store.commit('decrementQuantity', item);
        };

        function removeFromBasket(label: string) {
        store.commit('removeFromBasket', label);
        }

      return {
        basket,
        items,
        removeFromBasket,
        incrementQuantity,
        decrementQuantity,
        addToBasket,
      }
    }
  })
  </script>
  
  <style scoped>
  /* Add any styles you want here */
  </style>