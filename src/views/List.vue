<template>
  <div>
    <ListHeadder></ListHeadder>
    <router-view></router-view>
    <!-- <ListItem></ListItem> -->
  </div>
</template>

<script>
import ListHeadder from '@/components/ListHeadder.vue'
// import ListItem from '@/components/ListItem.vue'

export default {
  components:{
    ListHeadder,
    // ListItem,
  }  
}
</script>

<style scoped>

</style>
