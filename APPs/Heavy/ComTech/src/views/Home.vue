<template>
    <v-tabs
      v-model="tab"
      bg-color="#FF5757"
      center
      stacked
      align-tabs="center"
    >
      <v-tab value="tab-1">
        <v-icon>mdi-account-box</v-icon>
        Accounts
      </v-tab>

      <v-tab value="tab-2">
        <v-icon>mdi-chart-box</v-icon>
        Statistics
      </v-tab>

    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="i in 2"
        :key="i"
        :value="'tab-' + i"
      >
        <v-table
            fixed-header
            height="100%"
        >
            <thead>
            <tr>
                <th class="text-left">
                ID
                </th>
                <th class="text-left">
                E-mail
                </th>
                <th class="text-left">
                Phone Number
                </th>
                <th class="text-left">
                Actions
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="account in accounts"
                :key="account.id"
            >
                <td>{{ account.id }}</td>
                <td>{{ account.email }}</td>
                <td>{{ account.phone_nb }}</td>
                <td>
                    <ul class="actions">
                        <li> <v-btn @click="modifyAccount(account)">MODIFY</v-btn> </li>
                        <li> <v-btn @click="overlay = !overlay">DELETE</v-btn> </li>
                    </ul> 
                </td>
            </tr>
            </tbody>
        </v-table>
      </v-window-item>
    </v-window>

    <v-dialog
      :model-value="overlay"
      class="align-center justify-center"
    >
      <v-card>
        <div v-if="selectedAccount">
            <header>
                <h2>Account Details</h2>
                <v-btn @click="this.overlay = false">
                    <v-icon>mdi-close-box</v-icon>
                </v-btn>
            </header>
            <v-form validate-on="submit lazy" @submit.prevent="submit">
                <v-container>
                    <v-col cols="12" md="4">
                    <v-text-field
                        v-model="email"
                        label="E-mail"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                    <v-text-field
                        v-model="phoneNumber"
                        :counter="10"
                        label="Phone number"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                    <v-text-field
                        v-model="password"
                        label="Password"
                    ></v-text-field>
                    </v-col>

                    <v-btn
                        :loading="loading"
                        type="submit"
                        block
                        text="Submit"
                    ></v-btn>
                </v-container>
            </v-form>
        </div>
      </v-card>
    </v-dialog>
</template>


<script lang="ts">
  import axios from 'axios';

  export default {
    data () {
      return {
        tab: null,
        accounts: [],
        overlay: false,
        selectedAccount: null,
        loading: false,
        email: '',
        phoneNumber: '',
        password: '',
      }
    },
    created() {
        this.fetchData();
    },
    methods: {
      async fetchData() {
        const response = await axios.get('http://localhost:3002/account');
        this.accounts = response.data;
      },
      modifyAccount(account) {
        this.selectedAccount = account;
        this.overlay = true;
      },
      async submit () {
        this.loading = true;

        if (this.email === '') {
            this.email = this.selectedAccount.email;
        }
        if (this.phoneNumber === '') {
            this.phoneNumber = this.selectedAccount.phoneNumber;
        }
        if (this.password === '') {
            this.password = this.selectedAccount.password;
        }
        
        let params = {email: this.email, phone_nb: this.phoneNumber, pwd: this.password};
        await axios.put(`http://localhost:3002/account/${this.selectedAccount.id}`, params);
        
        this.email = '';
        this.phoneNumber = ''
        this.password = '';

        this.loading = false;
        location.reload();
      },
    },
  }
</script>

<style>
    .actions {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
</style>