
<template>
    <div class="home">
      
      <nav>
        <ul class="navbar">
          <li @click="tab = 'menus'">Menus</li>
          <li @click="tab = 'items'">Items</li>
        </ul>
      </nav>

      <div v-if="tab === 'menus'">

        <h1>Menus <button @click="showAddMenu = !showAddMenu">Add Menu</button></h1>
      
      <div class="card" v-if="showAddMenu">
        <div class="card-body">
          <h5 class="card-title">Add Menu</h5>
          <form @submit.prevent="addMenu">
            <div class="mb-3">
              <div class="container">
                <label class="form-label">Label</label>
                <input type="text" class="form-control" v-model="newMenu.label" required>
              </div>
              <div class="container">
                <label class="form-description">Description</label>
                <input type="text" class="form-control" v-model="newMenu.description" required>
              </div>
              <div class="container">
                <label class="form-photo">Photo</label>
                <input type="text" class="form-control" v-model="newMenu.photo" required>
              </div>
              <div class="container">
                <label class="form-price">Price</label>
                <input type="text" class="form-control" v-model="newMenu.price" required>
              </div>
              <select v-model="newMenu.items">
                <option disabled value="">Please select one</option>
                <option v-for="(item, i) in items.items" :key="i" :value="item">
                  {{ item.label }}
                </option>
              </select>
            </div>
            <div class="btn-container">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>

        <div v-for="(menu,i) in menus.menus" :key="i">
          
          <div class="container-show">
            <img class="photo" :src="menu.photo " alt="item photo"/>
            <div class="container-information">
              <p>Label: {{ menu.label }}</p>
              <p>Description:  {{ menu.description }}</p>
              <p>Price: {{ menu.price }}</p>
            </div>
          </div>
        
          <h2 v-if="menu.items">Items composant le menu<button @click="showAddItemToMenu = menu._id">Add Item</button></h2>

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
              <p>Label: {{ item.item.label }}</p>
              <p>Description: {{ item.item.description }}</p>
              <img class="photo" :src="item.item.photo" alt="item photo"/>
              <p>Price: {{ item.item.price }}</p>
              <p>Type: {{ item.item.type }}</p>
              <p>Quantity: {{ item.quantity }}</p>
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
                  <div class="container">
                    <label class="form-label">Label</label>
                    <input type="text" class="form-control" v-model="menuToEdit.label" > 
                  </div>
                  <div class="container">
                    <label class="form-description">Description</label>
                  <input type="text" class="form-control" v-model="menuToEdit.description">
                  </div>
                  <div class="container">
                    <label class="form-photo">Photo</label>
                    <input type="text" class="form-control" v-model="menuToEdit.photo" >
                  </div>
                  <div class="container">
                    <label class="form-price">Price</label>
                    <input type="text" class="form-control" v-model="menuToEdit.price" >
                  </div>
                </div>
                <div class="btn-container">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
          </div> 
        </div>

      </div>
      

      <div v-if="tab === 'items'">
        <div class="card" v-if="showAddItem">
          <div class="card-body">
            <h5 class="card-title">Add Item</h5>
            <form @submit.prevent="addItem">
              <div class="mb-3">
                <div class="container">
                  <label class="form-label">Label</label>
                  <input type="text" class="form-control" v-model="newItem.label" required>
                </div>
                <div class="container">
                  <label class="form-description">Description</label>
                  <input type="text" class="form-control" v-model="newItem.description" required>
                </div>
                <div class="container">
                  <label class="form-photo">Photo</label>
                  <input type="text" class="form-control" v-model="newItem.photo" required>
                </div>
                <div class="container">
                  <label class="form-price">Price</label>
                  <input type="text" class="form-control" v-model="newItem.price" required>
                </div>
                <div class="container">
                  <label class="form-type">Type</label>
                  <input type="text" class="form-control" v-model="newItem.type" required>
                </div>
              </div>
              <!-- Add more fields as necessary -->
              <div class="btn-container">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
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
                    <div class="container">
                      <label class="form-label">Label</label>
                      <input type="text" class="form-control" v-model="itemToEdit.label" > 
                    </div>
                    <div class="container">
                      <label class="form-description">Description</label>
                      <input type="text" class="form-control" v-model="itemToEdit.description"><br>
                    </div>
                    <div class="container">
                      <label class="form-photo">Photo</label>
                      <input type="text" class="form-control" v-model="itemToEdit.photo" ><br>
                    </div>
                    <div class="container">
                      <label class="form-price">Price</label>
                      <input type="text" class="form-control" v-model="itemToEdit.price" ><br>
                    </div>
                    <div class="container">
                      <label class="form-type">Type</label>
                      <input type="text" class="form-control" v-model="itemToEdit.type" >
                    </div>
                  </div>
                  <div class="btn-container">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>             
                </form>
              </div>
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
    data(){
      return {
        tab: 'menus',
      }
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

          await axios.put('http://localhost:3006/restaurants/'+ credId +'/menus/'+ menu._id, menuToEdit.value);
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
          await axios.put('http://localhost:3006/restaurants/'+ credId +'/items/'+ item._id, itemToEdit.value);
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
          console.log(credId)
          try {
            const resIdResponse = await axios.get('http://localhost:3006/restaurant/IDcredentials/' + credId);
            resId = resIdResponse.data._id;
            const menusResponse = await axios.get('http://localhost:3006/restaurant/'+ credId.toString() +'/menus');
            const itemsResponse = await axios.get('http://localhost:3006/restaurant/'+ credId.toString() +'/items');

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
  .navbar {
    display: flex;
    justify-content: space-between;
    list-style: none;
    max-width: calc(3000px * 2 + 60px);
    margin: auto;
    padding: 1em;
  }
  
  .navbar li {
    cursor: pointer;
    flex: 1;
    text-align: center;
  }
  
  .navbar li:hover {
    color: blue;
  }

  .photo{
    height: 50px;
  }

  .home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
}

h1 {
  font-size: 2em;
  color: #333;
}

.container{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

label {
  display: block;
  text-align: left;

}

input {
  display: block;
  margin-left: auto;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1em;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.card-title {
  font-size: 1.5em;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.btn-container{
  display: flex;
  justify-content: right;
}

.btn {
  background-color: brown;
  color: #fff;
  border: none;
  padding: 0.5em;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100px;
  margin-right: 0;
}

.btn:hover {
  background-color: #044d19;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
