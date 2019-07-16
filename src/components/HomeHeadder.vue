<template>
  <div>
    <div class="flexContainer">
      <img class="iconContainer flexItem" src="@/assets/baseline-tune-24px.svg">
      <span class="flexItem headderTitle">Featured</span>
      <img class="iconContainer flexItem" src="@/assets/baseline-search-24px.svg"> 
    </div>
    <div>
      <span class="flexItem headderSubTitle">RATING</span>
      <img>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.headderTitle {
  color: #5887F9;
  font-size: 30px;
  font-weight: 900;
}
.headderSubTitle {
  font-size: 15px;
  font-weight: 800;
}
.flexContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flexItem {

}
.iconContainer {
  width: 30px;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.addContainer {
  float: left;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
</style>
