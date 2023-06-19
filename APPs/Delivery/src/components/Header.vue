<template>
  
    <div class="navbar">
        <div class="positionbox">
            <p class="tposition">Ta Position</p>
            <p class="adresse">30 rue des bananiers</p>
        </div>
        <div class="settingsbox"></div>
    
    </div>
</template>

<script>
export default {
    name: "HeaderDMG",
}
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Roboto:wght@700&display=swap');
    .navbar{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .positionbox {
            
            margin-left: 5%;
            font-weight: 900;

            .tposition{
                
                color: #c51212;
            }

        }
        
        .settingsbox {
            
            display: flex;
            justify-content: center;
            background-image: url('../assets/settings.png');
            background-size: cover;
            background-position: center;
            height: 30px;
            width: 30px;
            border-radius: 50%; 
            margin-right: 5%;
        }

    }
       

</style>