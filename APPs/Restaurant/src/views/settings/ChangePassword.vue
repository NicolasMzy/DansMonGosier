<template>
    <div class="change-password">
      <Header/>
      <h2 class="title">Change Password</h2>
      <div v-if="!passwordVerified" class="password-verification">
        <label for="password">Enter Password:</label>
        <input type="password" id="password" v-model="passwordInput" />
        <button @click="verifyPassword">Verify</button>
      </div>
      <div v-else class="password-section">
        <div class="info-section">
          <div class="info-row">
            <span class="label">Current Password:</span>
            <span class="value">{{ currentPassword }}</span>
          </div>
          <div class="info-row">
            <span class="label">New Password:</span>
            <div class="input-container">
              <input class="value" type="password" v-model="editedPassword.new" />
              <button class="show-password-button" @click="toggleShowNewPassword">
                <i :class="showNewPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
              </button>
            </div>
          </div>
          <div class="info-row">
            <span class="label">Confirm Password:</span>
            <div class="input-container">
              <input class="value" type="password" v-model="editedPassword.confirm" />
              <button class="show-password-button" @click="toggleShowConfirmPassword">
                <i :class="showConfirmPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
              </button>
            </div>
          </div>
          <div class="button-row">
            <button v-if="!isEditing" class="modify-button" @click="startEditing">Modify</button>
            <div v-else>
              <button class="cancel-button" @click="cancelEditing">Cancel</button>
              <button class="apply-button" @click="applyChanges">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '../../components/componentsGlobaux/Header.vue'

  interface Passwords {
    new: string;
    confirm: string;
  }
  
  export default defineComponent({
    name: 'ChangePassword',
    components :{
      Header,
    },
    data() {
      return {
        passwordVerified: false,
        passwordInput: '',
        currentPassword: 'password123',
        editedPassword: {
          new: '',
          confirm: '',
        } as Passwords,
        isEditing: false,
        showNewPassword: false,
        showConfirmPassword: false,
      };
    },
    methods: {
      verifyPassword() {
        if (this.passwordInput === this.currentPassword) {
          this.passwordVerified = true;
        } else {
          alert('Invalid password. Please try again.');
          this.passwordInput = '';
        }
      },
      toggleShowNewPassword() {
        this.showNewPassword = !this.showNewPassword;
      },
      toggleShowConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword;
      },
      startEditing() {
        this.isEditing = true;
      },
      cancelEditing() {
        this.isEditing = false;
      },
      applyChanges() {
        if (this.editedPassword.new === this.editedPassword.confirm) {
          this.currentPassword = this.editedPassword.new;
          this.isEditing = false;
        } else {
          alert("New password and confirm password do not match. Please try again.");
          this.editedPassword.new = '';
          this.editedPassword.confirm = '';
        }
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .change-password {
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
      background-color: #f2f2f2;
      padding: 10px;
      border-radius: 4px;
  
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
        background-color: #D42323;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  
    .password-section {
      background-color: #f2f2f2;
      padding: 10px;
      border-radius: 4px;
    }
  
    .info-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 16px;

  
      .label {
        color: #666;
        margin-right: 10px;
      }
  
      .value {
        color: #333;
        font-weight: bold;
      }
  
      .input-container {
        display: flex;
        align-items: center;
        margin-left: auto;
      }
  
      input {
        width: 200px;
        margin-right: 8px;
      }
  
      .show-password-button {
        background-color: transparent;
        color: #666;
        border: none;
        cursor: pointer;
        padding: 4px;
        font-size: 14px;
      }
    }
  
    .button-row {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
  
      button {
        margin-left: 10px;
      }
  
      .modify-button {
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
  
      .apply-button {
        background-color: #D42323;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
      }
    }
  }
  </style>
  