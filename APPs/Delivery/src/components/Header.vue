<template>
  
    <div class="navbar">
        <div class="positionBox">
            <p>ta position</p>
            <p>30 rue des bananiers</p>
        </div>
        <img src="../assets/image-removebg-preview (12).png"/>
        <div class="settingsbox">
            <p>settings</p>
        </div>
    
    </div>
</template>

<script>
export default {
    name: "HeaderDMG",
}
</script>

<style lang="scss">
        
    .navbar{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 33vh;
        }
        .positionbox{
            width: 33vh;
        }
        .settingsbox{
            width: 33vh;
        }
    }
       

</style>