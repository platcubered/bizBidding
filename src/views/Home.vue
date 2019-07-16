<template>
  <div>
    <home-headder></home-headder>
    <home-body></home-body>
  </div>
</template>

<script>
  import HomeHeadder from '@/components/HomeHeadder.vue';
  import HomeBody from '@/components/HomeBody.vue'; 

  export default {
    components: {
      HomeHeadder,
      HomeBody,
    }
  }
</script>
