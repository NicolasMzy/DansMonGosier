
<template>
  <div class="payment-methods">
    <h2 class="title">Payment Methods</h2>
    <div v-if="!passwordVerified" class="password-verification">
      <label for="password">Enter Password:</label>
      <input type="password" id="password" v-model="passwordInput" />
      <button @click="verifyPassword">Verify</button>
    </div>
    <div v-else class="cards-section">
      <div v-for="(card, index) in paymentCards" :key="index" class="card">
        <div class="card-info">
          <div class="card-number">{{ maskedCardNumber(card.cardNumber) }}</div>
          <div class="card-expiry">Expiry Date: {{ card.expiry }}</div>
          <div class="card-owner">Owner: {{ card.ownerName }}</div>
        </div>
        <button class="delete-button" @click="deleteCard(index)">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <button class="add-card-button" @click="showAddCardForm">Add Card</button>
      <div v-if="showAddCard" class="add-card-form">
        <h3>Add New Card</h3>
        <div class="form-row">
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" v-model="newCard.cardNumber" />
        </div>
        <div class="form-row">
          <label for="expiry">Expiry Date:</label>
          <input type="text" id="expiry" v-model="newCard.expiry" />
        </div>
        <div class="form-row">
          <label for="ownerName">Owner Name:</label>
          <input type="text" id="ownerName" v-model="newCard.ownerName" />
        </div>
        <div class="button-row">
          <button class="save-button" @click="saveCard">Save</button>
          <button class="cancel-button" @click="cancelAddCard">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Card {
  cardNumber: string;
  expiry: string;
  ownerName: string;
}

export default defineComponent({
  name: 'PaymentMethods',
  data() {
    return {
      passwordVerified: false,
      passwordInput: '',
      paymentCards: [
        { cardNumber: '1234123412341234', expiry: '10/25', ownerName: 'John Doe' },
        { cardNumber: '1234123412345678', expiry: '12/23', ownerName: 'Jane Smith' },
      ] as Card[],
      newCard: {
        cardNumber: '',
        expiry: '',
        ownerName: '',
      } as Card,
      showAddCard: false,
    };
  },
  methods: {
    verifyPassword() {
      if (this.passwordInput === 'password123') {
        this.passwordVerified = true;
        this.passwordInput = '';
      } else {
        alert('Invalid password. Please try again.');
        this.passwordInput = '';
      }
    },
    deleteCard(index: number) {
      this.paymentCards.splice(index, 1);
    },
    showAddCardForm() {
      this.showAddCard = true;
    },
    saveCard() {
      if (this.newCard.cardNumber && this.newCard.expiry && this.newCard.ownerName) {
        this.paymentCards.push({ ...this.newCard });
        this.newCard.cardNumber = '';
        this.newCard.expiry = '';
        this.newCard.ownerName = '';
        this.showAddCard = false;
      } else {
        alert('Please fill in all fields.');
      }
    },
    cancelAddCard() {
      this.newCard.cardNumber = '';
      this.newCard.expiry = '';
      this.newCard.ownerName = '';
      this.showAddCard = false;
    },
    maskedCardNumber(cardNumber: string) {
      const lastFourDigits = cardNumber.slice(-4);
      const maskedDigits = '*'.repeat(cardNumber.length - 4);
      const maskedCardNumber = `${maskedDigits}${lastFourDigits}`;
      const formattedCardNumber = maskedCardNumber.match(/.{1,4}/g)?.join(' ') || '';
      return formattedCardNumber;
    },
  },
});
</script>

<style lang="scss" scoped>
.payment-methods {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  .title {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .password-verification {
    display: flex;
    align-items: center;

    label {
      margin-right: 10px;
      font-size: 16px;
      color: #666;
    }

    input {
      padding: 8px;
      font-size: 16px;
    }

    button {
      background-color: #d42323;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .cards-section {
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 10px;

      .card-info {
        flex-grow: 1;
      }

      .delete-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #d42323;
        font-size: 16px;
      }
    }

    .add-card-button {
      background-color: #d42323;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      margin-top: 10px;
      cursor: pointer;
    }

    .add-card-form {
      background-color: #fff;
      padding: 10px;
      border-radius: 4px;
      margin-top: 10px;

      h3 {
        color: #333;
        font-size: 18px;
        margin-bottom: 10px;
      }

      .form-row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        label {
          width: 120px;
          color: #666;
          margin-right: 10px;
        }

        input {
          flex-grow: 1;
          padding: 8px;
          font-size: 16px;
        }
      }

      .button-row {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

        button {
          margin-left: 10px;
        }

        .save-button {
          background-color: #d42323;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
        }

        .cancel-button {
          background-color: #ccc;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
