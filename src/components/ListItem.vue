<template>
  <div>
    <div v-for="data1 in dataArr.data" :key="data1.id">
      <div  v-show="isItemShow(data1,name)">
      <v-layout row>
        <v-flex><img :src="data1.icon"></v-flex>
        <v-flex>{{ data1.title }}</v-flex>
        <v-flex>{{ data1.date }}</v-flex>
        {{ isItemShow(data1,name) }}
        
      </v-layout>
      </div>
    </div>
    
  
  </div>
</template>

<script>
import bidData from '@/bidData.js'

export default {
  props: [
    'name'
  ],
  data() {
    return {
      dataArr: bidData
    }
  },
  computed: {
  
  },
  methods: {
    isItemShow(data,name) {
      return data[name];
    }
  }

}
</script>

<style>

</style>
