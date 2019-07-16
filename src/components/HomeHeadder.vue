<template>
  <div>
    <div class="flexContainer">
      <img class="iconContainer flexItem leftIcon" src="@/assets/baseline-tune-24px.svg">
      <span class="flexItem headderTitle">Featured</span>
      <img class="iconContainer flexItem rightIcon" src="@/assets/baseline-search-24px.svg"> 
    </div>
    <div class="flaxContainer headderSubTitle">
      <span class="flexItem">RATING</span>
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
  margin: 5px 0 0 0;
}
.flexContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftIcon {
  margin: 0 0 0 30px;
}
.rightIcon {
  margin: 0 30px 0 0;
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
