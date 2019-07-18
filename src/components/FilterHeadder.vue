<template>
  <div>
    <div class="flexContainer">
      <img class="iconContainer flexItem leftIcon" src="@/assets/baseline-tune-24px.svg">
      <span class="flexItem headderTitle">Filters</span>
      <router-link to="/home">
        <img class="iconContainer flexItem rightIcon" src="@/assets/baseline-clear-24px.svg"> 
      </router-link>
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
  margin: 22px 0px 0px 0px;
  border: solid 0.8px #E2E8ED;
}

.flexContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftIcon {
  margin: 0 0 0 19px;
  opacity: 0;
}
.rightIcon {
  margin: 0 19px 0 0;
}
.iconContainer {
  width: 29px;
}

</style>
