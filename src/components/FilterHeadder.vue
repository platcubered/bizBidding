<template>
  <div>
    <div class="flexContainer">
      <img class="iconContainer flexItem leftIcon" src="@/assets/baseline-tune-24px.svg">
      <span class="flexItem headderTitle">Filters</span>
      <img class="iconContainer flexItem rightIcon" src="@/assets/baseline-clear-24px.svg"> 
    </div>
    <hr class="sprLine">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sprLine {
  margin: 25px 0px 0px 0px;
  border: solid 0.8px #E2E8ED;
}
.headderTitle {
  color: #5887F9;
  font-size: 30px;
  font-weight: 900;
}
.flexContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftIcon {
  margin: 0 0 0 30px;
  opacity: 0;
}
.rightIcon {
  margin: 0 30px 0 0;
}
.iconContainer {
  width: 30px;
}

</style>
