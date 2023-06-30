<template>
  <div class="profile-information">
    <h2 class="title">Profile Information</h2>
    <div class="info-section">
      <div class="info-row">
        <span class="label">Email:</span>
        <span v-if="!isEditing" class="value">{{ profile.email }}</span>
        <input v-else class="value" v-model="editedProfile.email" />
      </div>
      <div class="info-row">
        <span class="label">Phone:</span>
        <span v-if="!isEditing" class="value">{{ profile.phone_nb }}</span>
        <input v-else class="value" v-model="editedProfile.phone_nb" />
      </div>
      <div class="info-row">
        <span class="label">Password:</span>
        <span v-if="!isEditing" class="value">{{ profile.pwd }}</span>
        <input v-else class="value" v-model="editedProfile.pwd" />
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
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

interface Profile {
  email: string;
  phone_nb: string;
  pwd: string;
}

export default defineComponent({
  name: 'ProfileInformation',
  data() {
    return {
      profile: {
        email: '',
        phone_nb: '',
        pwd: ''
      } as Profile,
      editedProfile: {
        email: '',
        phone_nb: '',
        pwd: ''
      } as Profile,
      isEditing: false,
    };
  },
  async created() {
    let accountId = localStorage.getItem('accountId');
    const response = await axios.get('http://localhost:3002/account/' + accountId);
    this.profile = response.data[0];
    console.log(this.profile.email)
  },
  methods: {
    startEditing() {
      this.editedProfile = { ...this.profile };
      this.isEditing = true;
    },
    cancelEditing() {
      this.isEditing = false;
    },
    async applyChanges() {
      try {
        let accountId = localStorage.getItem('accountId');
        const response = await axios.put('http://localhost:3002/account/' + accountId, this.editedProfile);
        this.profile = response.data;
        console.log(this.profile)
        this.isEditing = false;
        location.reload()
      } catch (error) {
        console.error("Error updating profile", error);
      }
    },
  },
});

</script>

<style lang="scss" scoped>
.profile-information {
  padding: 20px;
  border-radius: 8px;

  .title {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .info-section {
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

    input {
      width: 200px;
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
