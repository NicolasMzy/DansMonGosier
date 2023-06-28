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
  import type {Order} from "../types/Order"
  import type {Item} from "../types/Item"
  import type {Menu} from "../types/Menu"
  import {ItemType} from "../types/ItemType"

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
        function isItem(obj: any): obj is Item {
          return obj
            && typeof obj.label === 'string'
            && typeof obj.description === 'string'
            && typeof obj.photo === 'string'
            && typeof obj.price === 'number'
            && Object.values(ItemType).includes(obj.type)
            && typeof obj.quantity === 'number';
        }
        function isMenu(obj: any): obj is Menu {
          return obj
            && typeof obj.label === 'string'
            && typeof obj.description === 'string'
            && typeof obj.photo === 'string'
            && typeof obj.price === 'number'
            && isItem(obj.items.value); 
        }

        let menusSend = ref<Menu[]>([])
        let itemsSend = ref<Item[]>([])

        let submitBasket = async () => {
          for (let item of basket.value){
            console.log('dfbhvdfibvefdlkhvb dflkjhvbljhvdf lvjhdf l ksdflkvdf lkfbvlkjqsnbvlkjqsbvlkqsf')
            console.log(item)
            console.log('dfbhvdfibvefdlkhvb dflkjhvbljhvdf lvjhdf l ksdflkvdf lkfbvlkjqsnbvlkjqsbvlkqsf')
            
            if(isMenu(item)){
              console.log('c un menu')
              menusSend.value.push(item);
            } else if(isItem(item)){
              console.log('c un item')
              itemsSend.value.push(item);
            }
          }
          console.log(menusSend)
          console.log(itemsSend)

          let basketSend: Order = {
            id_user: '60d5ecb8b392d78868953b5d',
            id_restaurant: '60d5ecb8b392d78868953b5e',
            price: 4,
            number: 'string',
            payment: 'unpaid',
            status: 'delivered',
            address: '123 Main St, Anytown, Anystate',
            deliverer: 'string',
            menus: Array.isArray(menusSend.value) ? menusSend.value : [],
            items: Array.isArray(itemsSend.value) ? itemsSend.value : [],
          }
          console.log(basketSend)

          await axios.post(
            'http://localhost:3012/orders',
            basketSend
          )};

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
  #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color:black;
}
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