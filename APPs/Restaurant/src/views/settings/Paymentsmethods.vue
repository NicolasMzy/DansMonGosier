<template>
  <div class="payment-methods">
    <Header/>
    <h2 class="title">Payment Methods</h2>
    <div class="iban-info" v-if="!isEditing">
      <div class="iban-label">IBAN:</div>
      <div class="iban-number">{{ iban }}</div>
      <button class="edit-button" @click="startEditing">Modify</button>
    </div>
    <div class="iban-edit" v-else>
      <div class="edit-row">
        <label for="iban">IBAN:</label>
        <input type="text" id="iban" v-model="editedIban" />
      </div>
      <div class="button-row">
        <button class="cancel-button" @click="cancelEditing">Cancel</button>
        <button class="confirm-button" @click="confirmEditing">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/componentsGlobaux/Header.vue'

export default {
  name: 'PaymentMethods',
  components :{
    Header,
  },
  data() {
    return {
      iban: 'FR76 3000 3000 3000 1234 56',
      editedIban: '',
      isEditing: false,
    };
  },
  methods: {
    startEditing() {
      this.editedIban = this.iban;
      this.isEditing = true;
    },
    cancelEditing() {
      this.isEditing = false;
    },
    confirmEditing() {
      if (this.editedIban) {
        this.iban = this.editedIban;
        this.isEditing = false;
      } else {
        alert('Please enter a valid IBAN.');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.payment-methods {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.iban-info {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 8px;
}

.iban-label {
  color: #666;
  font-size: 16px;
  margin-right: 10px;
}

.iban-number {
  font-size: 16px;
  font-family: monospace;
}

.edit-button {
  background-color: #d42323;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}

.iban-edit {
  margin-top: 10px;
}

.edit-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    width: 60px;
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

  .cancel-button {
    background-color: #ccc;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }

  .confirm-button {
    background-color: #d42323;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .iban-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .edit-button {
    margin-top: 10px;
    margin-left: 0;
  }

  .iban-edit {
    margin-top: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 10px;
  }

  .button-row {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 10px;

    button {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}
</style>
