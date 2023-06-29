
<template>
    <div class="home">
      <h1>Menus <button @click="showAddMenu = !showAddMenu">Add Menu</button></h1>
      
    <div class="card" v-if="showAddMenu">
      <div class="card-body">
        <h5 class="card-title">Add Menu</h5>
        <form @submit.prevent="addMenu">
          <div class="mb-3">
            <label class="form-label">Label</label>
            <input type="text" class="form-control" v-model="newMenu.label" required><br>
            <label class="form-description">Description</label>
            <input type="text" class="form-control" v-model="newMenu.description" required><br>
            <label class="form-photo">Photo</label>
            <input type="text" class="form-control" v-model="newMenu.photo" required><br>
            <label class="form-price">Price</label>
            <input type="text" class="form-control" v-model="newMenu.price" required><br>
            <select v-model="newMenu.items">
              <option disabled value="">Please select one</option>
              <option v-for="(item, i) in items.items" :key="i" :value="item">
                {{ item.label }}
              </option>
            </select>
          </div>
          <!-- Add more fields as necessary -->
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

      <div v-for="(menu,i) in menus.menus" :key="i">
        Label: {{ menu.label }}<br>
        Description:  {{ menu.description }}<br>
        URL Photo: {{ menu.photo }}<br>
        Price: {{ menu.price }}<br>
        <h2 v-if="menu.items">Items <button @click="showAddItemToMenu = menu._id">Add Item</button></h2>

        <!-- Card to ad an item to the menu -->
          <div class="card" v-if="showAddItemToMenu === menu._id">
            <div class="card-body">
              <h5 class="card-title">Add Item To Menu</h5>
                <form @submit.prevent="addToMenu(menu._id)">
                  <select v-model="newItemToMenu">
                    <option disabled value="">Please select one</option>
                    <option v-for="(item, i) in items.items" :key="i" :value="item">
                      {{ item.label }}
                    </option>
                  </select>
                  <label class="form-price">Quantity: </label>
                  <input type="text" class="form-control" v-model="newItemToMenu.quantity" required><br>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
          </div>

          <!-- Items from menu -->
          <div v-for="(item,i) in menu.items" :key="i">
            Label: {{ item.item.label }}<br>
            Description: {{ item.item.description }}<br>
            URL Photo: {{ item.item.photo }}<br>
            Price: {{ item.item.price }}<br>
            Type: {{ item.item.type }}<br>
            Quantity: {{ item.quantity }}<br>
            <button v-if="menu.items" @click="deleteItemFromMenu(item)">Delete Item from menu</button>
          </div>
          <button @click="deleteMenu(menu._id)">Delete Menu</button>
          <button @click="showEditMenu = menu._id">Edit Menu</button>
          <!-- Card -->
        <div class="card" v-if="showEditMenu === menu._id">
          <div class="card-body">
            <h5 class="card-title">Add Menu</h5>
            <form @submit.prevent="editMenu(menu)">
              <div class="mb-3">
                <label class="form-label">Label</label>
                <input type="text" class="form-control" v-model="menuToEdit.label" > 
                <label class="form-description">Description</label>
                <input type="text" class="form-control" v-model="menuToEdit.description"><br>
                <label class="form-photo">Photo</label>
                <input type="text" class="form-control" v-model="menuToEdit.photo" ><br>
                <label class="form-price">Price</label>
                <input type="text" class="form-control" v-model="menuToEdit.price" ><br>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        </div> 
      </div>
      <div class="card" v-if="showAddItem">
      <div class="card-body">
        <h5 class="card-title">Add Item</h5>
        <form @submit.prevent="addItem">
          <div class="mb-3">
            <label class="form-label">Label</label>
            <input type="text" class="form-control" v-model="newItem.label" required>
            <label class="form-description">Description</label>
            <input type="text" class="form-control" v-model="newItem.description" required><br>
            <label class="form-photo">Photo</label>
            <input type="text" class="form-control" v-model="newItem.photo" required><br>
            <label class="form-price">Price</label>
            <input type="text" class="form-control" v-model="newItem.price" required><br>
            <label class="form-type">Type</label>
            <input type="text" class="form-control" v-model="newItem.type" required>
          </div>
          <!-- Add more fields as necessary -->
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <h1>Items <button @click="showAddItem = true">Add Item</button></h1>
      <div v-for="(item,i) in items.items" :key="i">
        Label : {{ item.label }}<br>
        Description : {{ item.description }}<br>
        URL de la photo : {{ item.photo }}<br>
        Prix : {{ item.price }}<br>
        Type : {{ item.type }}<br>
        <button @click="deleteItem(item._id)">Delete Item</button>
        <button @click="showEditItem = item._id">Edit Item</button>

        <!-- Card -->
        <div class="card" v-if="showEditItem === item._id">
          <div class="card-body">
            <h5 class="card-title">Add Item</h5>
            <form @submit.prevent="editItem(item)">
              <div class="mb-3">
                <label class="form-label">Label</label>
                <input type="text" class="form-control" v-model="itemToEdit.label" > 
                <label class="form-description">Description</label>
                <input type="text" class="form-control" v-model="itemToEdit.description"><br>
                <label class="form-photo">Photo</label>
                <input type="text" class="form-control" v-model="itemToEdit.photo" ><br>
                <label class="form-price">Price</label>
                <input type="text" class="form-control" v-model="itemToEdit.price" ><br>
                <label class="form-type">Type</label>
                <input type="text" class="form-control" v-model="itemToEdit.type" >
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
  </template>
  
  <script  lang="ts">
  import { onMounted, ref, defineComponent } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios'

  export default defineComponent({
    name : 'RestaurantHome',
    components: {

    },
    setup() {
      const menus = ref([]); // Assume this is the initial state
      const items = ref([]); // Assume this is the initial state
      const showEditMenu = ref(false);
      const showEditItem = ref(false);
      const showAddMenu = ref(false);
      const showAddItem = ref(false);
      const showAddItemToMenu = ref(false);
        const router = useRouter();
        const route = useRoute();
        let data;
        let resId: string;
        let credId = localStorage.getItem('accountId');
        

        const itemToEdit = ref({
          label: '',
          description: '',
          photo: '',
          price: 0,
          type: '',
          quantity: 0
        });
        const newItem = ref({
          label: '',
          description: '',
          photo: '',
          price: 0,
          type: ''
        });
        const newItemToMenu = ref({
          label: '',
          description: '',
          photo: '',
          price: 0,
          type: '',
          quantity: 0
        });

        const menuToEdit = ref({
          label: '',
          description: '',
          photo: '',
          price: 0,
          items: []
        });
        const newMenu = ref({
          label: '',
          description: '',
          photo: '',
          price: 0,
          items: []
        });
        
        const editMenu = async (menu) => {
          
          if(menuToEdit.value.label == ''){
            console.log('c vide')
            menuToEdit.value.label = menu.label
          }
          if(menuToEdit.value.photo == ''){
            console.log('c vide')
            menuToEdit.value.photo = menu.photo
          }
          if(menuToEdit.value.description == ''){
            console.log('c vide')
            menuToEdit.value.description = menu.description
          }
          if(menuToEdit.value.price == 0){
            console.log('c vide')
            menuToEdit.value.price = menu.price
          }
          if(menuToEdit.value.items.length == 0){
            console.log('c vide')
            menuToEdit.value.items = menu.items
          }

          await axios.put('http://localhost:3006/restaurant/'+ credId +'/menus/'+ menu._id, menuToEdit.value);
          menuToEdit.value = {
              label: '',
              description: '',
              photo: '',
              price: 0,
              items: []
            }; 
          showAddMenu.value = false;  // hide form
          location.reload();
        };
        const editItem = async (item) => {
          if(itemToEdit.value.label == ''){
            console.log('c vide')
            itemToEdit.value.label = item.label
          }
          if(itemToEdit.value.photo == ''){
            console.log('c vide')
            itemToEdit.value.photo = item.photo
          }
          if(itemToEdit.value.description == ''){
            console.log('c vide')
            itemToEdit.value.description = item.description
          }
          if(itemToEdit.value.price == 0){
            console.log('c vide')
            itemToEdit.value.price = item.price
          }
          if(itemToEdit.value.quantity == 0){
            console.log('c vide')
            itemToEdit.value.quantity = item.quantity
          }
          if(itemToEdit.value.type == ''){
            console.log('c vide')
            itemToEdit.value.type = item.type
          }
          // Add the menu with `newMenu.value` and close the form
          await axios.put('http://localhost:3006/restaurant/'+ credId +'/items/'+ item._id, itemToEdit.value);
          itemToEdit.value = { label: '',
            description: '',
            photo: '',
            price: 0,
            type: '',
            quantity: 0
          }; 
          showAddMenu.value = false;  // hide form
          location.reload();
        };
        const addToMenu = async (menuId: string) => {
          // Add the menu with `newMenu.value` and close the form
          await axios.post('http://localhost:3006/restaurant/'+ credId +'/menus/'+ menuId +'/items', newItemToMenu.value);
          newItemToMenu.value = { label: '',
            description: '',
            photo: '',
            price: 0,
            type: '',
            quantity: 0
          }; 
          showAddMenu.value = false;  // hide form
          location.reload();
        };
        const addMenu = async (event) => {
          event.preventDefault();
          // Add the menu with `newMenu.value` and close the form
          await axios.post('http://localhost:3006/restaurant/'+ credId +'/menus', newMenu.value);
          newMenu.value = { label: '',
            description: '',
            photo: '',
            price: 0,
            items: []
          }; 
          showAddMenu.value = false;  // hide form
          location.reload();
        };

        const addItem = async (event) => {
          event.preventDefault();
          console.log(newItem.value)
          // Add the item with `newItem.value` and close the form
          await axios.post('http://localhost:3006/restaurant/'+ credId +'/items', newItem.value);
          newItem.value = { 
            label: '',
            description: '',
            photo: '',
            price: 0,
            type: ''
          };  // reset form fields
          showAddItem.value = false;  // hide form
          location.reload();
        };

        const deleteItemFromMenu = async (menuId: string, itemId: string) => {
          try {
            await axios.delete(`/api/menus/${menuId}/items/${itemId}`);
            const menuIndex = menus.value.findIndex((menu) => menu.id === menuId);
            if (menuIndex !== -1) {
              const itemIndex = menus.value[menuIndex].items.findIndex((item) => item.id === itemId);
              if (itemIndex !== -1) menus.value[menuIndex].items.splice(itemIndex, 1);
            }
          } catch (error) {
            console.error(error);
          }
        };

        const deleteMenu = async (menuId: string) => {
          try {
            await axios.delete('http://localhost:3006/restaurant/'+ credId +'/menus/' + menuId);
          } catch (error) {
            console.error(error);
          }
          location.reload();
        };
        const deleteItem = async (itemId: string) => {
          try {
            await axios.delete('http://localhost:3006/restaurant/'+ credId +'/items/' + itemId);
          } catch (error) {
            console.error(error);
          }
          location.reload();
        };

        


        onMounted(async () => {
          try {
            // const resIdResponse = await axios.get('http://localhost:3013/restaurant/IDcredentials/' + credId);
            // resId = resIdResponse.data._id;
            const menusResponse = await axios.get('http://localhost:3006/restaurant/'+ credId +'/menus');
            const itemsResponse = await axios.get('http://localhost:3006/restaurant/'+ credId +'/items');

            menus.value = menusResponse.data;
            items.value = itemsResponse.data;
            console.log(menus.value.menus)
            console.log(items.value.items)
          } catch (error) {
            console.error(error);
          }
        });
        
      return{
        newItemToMenu,
        showAddItemToMenu,
        showAddMenu,
        showAddItem,
        newMenu,
        newItem,
        addMenu,
        addItem,
        menus,
        items,
        addToMenu,
        deleteItemFromMenu,
        deleteMenu,
        deleteItem,
        showEditItem,
        showEditMenu,
        itemToEdit,
        editMenu,
        editItem,
        menuToEdit
      }
    }
  });
    
  
  </script>
  
  <style>
  
  </style>