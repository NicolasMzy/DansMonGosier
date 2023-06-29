<template>
    <h1>Votre Commande</h1>
    <h3>Date de la commande : {{ order?.date.start.split('T')[0]}}</h3>
    <h3>Restaurant : {{ order?.id_restaurant }}</h3>
    <div v-if="order?.items.length >= 1">
        <h3>Items : {{ order?.items }}</h3>
    </div>
    <div v-if="order?.menus.length >= 1">
        <h3>Menus : {{ order?.menus }}</h3>
    </div>
    <h3>Prix : {{ order?.price }} </h3>
    <p>{{ order }}</p>
    <h2>Select Payment Method:</h2>
    <select v-model="selectedPaymentMethod">
        <option v-for="(method, index) in paymentMethods" :key="index" :value="method">{{ method }}</option>
    </select><br>
    <button @click="confirmPayment">Confirm Payment</button>
</template>

<script lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
    
    name: 'PaymentView',

    setup(){
        const route = useRoute();
        const router = useRouter();
        let order = ref(null);
        let selectedPaymentMethod = ref("");
        let paymentMethods = ref([]);

        onMounted(async () => {
            const response = await axios.get('http://localhost:3012/orders/'+ route.params.orderId);
            order.value = response.data;
            //AFAIRE ON A PAS LES PAYMENTS ENCORE
            const paymentResponse = await axios.get('http://localhost:3012/paymentMethods');
            paymentMethods.value = paymentResponse.data;
        });

        const confirmPayment = async () => {
            // Assuming the API endpoint to update order takes the order ID as path parameter and the new status as request body
            await axios.put('http://localhost:3012/orders/' + order.value?._id, { payment: 'paid' });
            router.push('/home')
        };

        return{
            order,
            paymentMethods,
            selectedPaymentMethod,
            confirmPayment,
        }
    }
}


</script>

<style>

</style>