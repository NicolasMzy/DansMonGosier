// store.ts
import { createStore } from 'vuex';
import type { State, BasketItem } from '../types/Types';
// In store.ts
export const store = createStore({
    state: {
      basket: [] as BasketItem[],
    },
    getters: {
      total(state: State) {
        return state.basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    },
    mutations: {
      addToBasket(state: State, item: BasketItem) {
        const found = state.basket.find((product) => product.label === item.label);
        if (found) {
          found.quantity += 1;
        } else {
          state.basket.push({ ...item, quantity: 1 });
        }
      },
      removeFromBasket(state: State, label: BasketItem) {
        state.basket = state.basket.filter(item => item.label !== label.label);
      },

      incrementQuantity(state: State, item: BasketItem) {

        const found = state.basket.find((product) => product.label === item.label);
        if (found) {
            found.price += item.price/found.quantity;
            found.quantity += 1;
        } else if(!found) {
            state.basket.push({ ...item, quantity: 1 });
        }
      },
      decrementQuantity(state: State, item: BasketItem) {
        const found = state.basket.find((product) => product.label === item.label);
        if (found && found.quantity > 1) {
            found.price -= item.price/found.quantity;
            found.quantity -= 1;
        } else if(found && found.quantity == 1) {
            state.basket = state.basket.filter(basketItem => basketItem.label !== item.label);
        }
      },
    },
  });
  


