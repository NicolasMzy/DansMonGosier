<template>
    <div class="basket">
      <h2>Your Basket</h2>
      <ul>
        <li v-for="(item, index) in basket" :key="index">
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: ${{ item.price }}</p>
          <button @click="removeFromBasket(item)">Remove</button>
          <button @click="incrementQuantity(item)">Increase</button>
          <button @click="decrementQuantity(item)">Decrease</button>
        </li>
      </ul>
      <h3>Total: ${{ }}</h3>
    </div>
    <transition name="fade">
      <div class="popup" v-if="showPopup">
        <p>{{ popupMessage }}</p>
        <button @click="undoLastAction">Undo</button>
        <button @click="showPopup = false">Close</button>
      </div>
    </transition>
    <transition name="ease">
      <div class="card" v-if="basket.length >= 1">
        <button @click="submitBasket" class="payment-button">Valider et Payer</button>
      </div>
    </transition>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, ref } from 'vue';
  import type { Ref } from 'vue'
  import type {ComputedRef} from 'vue'
  import { useStore } from 'vuex';
  import type { BasketItem } from '../types/Types';
import axios from 'axios';

  interface Action {
  action: 'add' | 'remove';
  item: BasketItem;
}
  export default defineComponent({
    name: 'BasketView',
    setup() {
      const showPopup = ref(false);
      const popupMessage = ref('');


      const displayPopup = (message: string) => {
      popupMessage.value = message;
      showPopup.value = true;

      setTimeout(() => {
          showPopup.value = false;
        }, 3000);  // The popup will disappear after 3 seconds
      }
        const store = useStore();
        const lastAction: Ref<Action | null> = ref(null);
        const basket = computed(() => store.state.basket);
        const items = computed(() => store.state.items);

        function addToBasket(item: BasketItem) {
            store.commit('addToBasket', item);
            lastAction.value = { action: 'add', item };
            displayPopup(item.label + ' added to basket')
        }
        const incrementQuantity = (item: BasketItem) => {
            store.commit('incrementQuantity', item);
            displayPopup(item.label + ' added one to basket')
            console.log(basket.value.length)

        };

        const decrementQuantity = (item: BasketItem) => {
            store.commit('decrementQuantity', item);
            displayPopup(item.label + 'removed one from basket');
            console.log(basket.value.length)
        };

        function removeFromBasket(item: BasketItem) {
        store.commit('removeFromBasket', item);
        lastAction.value = { action: 'remove', item };
        displayPopup(item.label + ' removed from basket')
        }

        let undoLastAction = () => {
          if (lastAction.value) {
            if (lastAction.value.action === 'add') {
              store.commit('removeFromBasket', lastAction.value.item);
            } else if (lastAction.value.action === 'remove') {
              store.commit('addToBasket', lastAction.value.item);
            }
          }
          showPopup.value = false;
        };
        let submitBasket = async () => {
          console.log(basket)
          let kk = JSON.stringify(basket.value);
          console.log(kk)
          await axios.post('http://localhost:3012/orders', {
            kk,
          })
        };

      return {
        basket,
        items,
        removeFromBasket,
        incrementQuantity,
        decrementQuantity,
        addToBasket,
        showPopup,
        popupMessage,
        displayPopup,
        undoLastAction,
        submitBasket,
      }
    }
  })
  </script>
  
  <style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.popup {
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #444;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
  </style>