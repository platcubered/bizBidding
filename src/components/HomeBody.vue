<template>
  <div class="flexContainer" >
    <router-link to="/filter">
      <div class="boxImage1">
        POWER PLANT
      </div>
    </router-link>
    <div class="boxImage2">Construction</div>
    <div class="boxImage3">Wind Farm</div>
    <div class="boxImage1">POWER PLANT</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
router-link {
  text-decoration:none;
}
.boxText {
}
.boxImage {
  &1{
    display: flex;
    background-image: url("../assets/images/power-plant1920/power-plant1920.png");
    height: 200px;
    width: 300px;
    color: white;
    font-size: 30px;
    margin: 20px 0 20px 0 ;
    align-items: center;
    justify-content: center;
    
    
  }
  &2{
    display: flex;
    background-image: url("../assets/images/city1920/city1920.png");
    height: 200px;
    width: 300px;
    color: white;
    font-size: 30px;
    margin: 20px 0 20px 0 ;
    align-items: center;
    justify-content: center;
  }
  &3{
    display: flex;
    background-image: url("../assets/images/cape1920/cape1920.png");
    height: 200px;
    width: 300px;
    color: white;
    font-size: 30px;
    margin: 20px 0 20px 0 ;
    align-items: center;
    justify-content: center;
  }
}
.flexContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0 0 0 ;
}
.flexContainer .router-link-exact-active {
    color: white
}


</style>
