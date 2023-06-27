<template>
  <div class="location">
    <Header/>
    <h2 class="title">Location</h2>
    <div class="addresses">
      <div v-for="(address, index) in addresses" :key="index" class="address">
        <div class="address-info">
          <div class="city">{{ address.city }}</div>
          <div class="address-line">{{ address.addressLine }}</div>
          <div class="address-line">{{ address.addressLine2 }}</div>
          <div class="postal-code">{{ address.postalCode }}</div>
        </div>
        <button class="delete-button" @click="deleteAddress(index)">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <button class="add-address-button" @click="showAddAddressForm">Add Address</button>
    <div v-if="showAddAddress" class="add-address-form">
      <h3>Add New Address</h3>
      <div class="form-row">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="newAddress.city" />
      </div>
      <div class="form-row">
        <label for="addressLine">Address Line:</label>
        <input type="text" id="addressLine" v-model="newAddress.addressLine" />
      </div>
      <div class="form-row">
        <label for="addressLine2">Address Line 2:</label>
        <input type="text" id="addressLine2" v-model="newAddress.addressLine2" />
      </div>
      <div class="form-row">
        <label for="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" v-model="newAddress.postalCode" />
      </div>
      <div class="button-row">
        <button class="save-button" @click="saveAddress">Save</button>
        <button class="cancel-button" @click="cancelAddAddress">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../../components/componentsGlobaux/Header.vue'

interface Address {
  city: string;
  addressLine: string;
  addressLine2: string;
  postalCode: string;
}

export default defineComponent({
  name: 'Location',
  components: {
    Header,
  },
  data() {
    return {
      addresses: [
        {
          city: 'New York',
          addressLine: '123 Main Street',
          addressLine2: 'Apartment 4B',
          postalCode: '10001',
        },
        {
          city: 'Los Angeles',
          addressLine: '456 Elm Street',
          addressLine2: '',
          postalCode: '90001',
        },
      ] as Address[],
      newAddress: {
        city: '',
        addressLine: '',
        addressLine2: '',
        postalCode: '',
      } as Address,
      showAddAddress: false,
    };
  },
  methods: {
    deleteAddress(index: number) {
      this.addresses.splice(index, 1);
    },
    showAddAddressForm() {
      this.showAddAddress = true;
    },
    saveAddress() {
      if (
        this.newAddress.city &&
        this.newAddress.addressLine &&
        this.newAddress.postalCode
      ) {
        this.addresses.push({ ...this.newAddress });
        this.newAddress.city = '';
        this.newAddress.addressLine = '';
        this.newAddress.addressLine2 = '';
        this.newAddress.postalCode = '';
        this.showAddAddress = false;
      } else {
        alert('Please fill in all fields.');
      }
    },
    cancelAddAddress() {
      this.newAddress.city = '';
      this.newAddress.addressLine = '';
      this.newAddress.addressLine2 = '';
      this.newAddress.postalCode = '';
      this.showAddAddress = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.location {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  .title {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .addresses {
    .address {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f2f2f2;
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 10px;

      .address-info {
        flex-grow: 1;
      }

      .delete-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #D42323;
        font-size: 16px;
      }
    }
  }

  .add-address-button {
    background-color: #D42323;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
  }

  .add-address-form {
    background-color: #f2f2f2;
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
        background-color: #D42323;
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
</style>
