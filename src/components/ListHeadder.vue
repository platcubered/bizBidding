<template>
    <v-container>
      <v-layout class="toolBar" row>
        <v-flex>
          <router-link to="/filter"><img src="/img/baseline-arrow_back-24px.svg"></router-link>
        </v-flex>
        <v-layout column>
          <v-flex>
            <div>Biz Bidding</div>
          </v-flex>
          <v-flex>
            <div>{{ bidItem }} 전문</div>
          </v-flex>
          <v-flex>
            <div>목표시장:{{bidTargetLocation}}</div>
          </v-flex> 
        </v-layout>
      </v-layout>
      <v-layout>
        <v-tabs v-model="active" slider-color="#5887F9">
          <v-tab v-for="tabItem in this.tabItems" :key="tabItem.id" ripple>
            <router-link :to="`/list${tabItem.link}`">
              <v-layout column align-center>
                <v-flex> {{ tabItem.number }} </v-flex> 
                <v-flex>{{ tabItem.name }}</v-flex> 
                <v-spacer class="selectedBar"></v-spacer>
              </v-layout>
            </router-link>
          </v-tab>
        </v-tabs>
        <!-- <v-layout column align-center>
          <v-flex>12</v-flex>
          <v-flex>Suggest</v-flex>
          <v-flex></v-flex>
        </v-layout>
        <v-layout column align-center>
          <v-flex>3</v-flex>
          <v-flex>Checked</v-flex>
          <v-flex></v-flex>  
        </v-layout>
        <v-layout column align-center>
          <v-flex>1</v-flex>
          <v-flex>Supplies</v-flex>
          <v-flex></v-flex>
        </v-layout>   -->
      </v-layout>
    </v-container>
  
</template>

<script>
export default {
  data() {
    return {
      bidItem: '파워 플랜트',
      bidTargetLocation: '동남아시아',
      tabItems: [
        {name: 'About', number: null, id:1,link:'/about',},
        {name: 'Suggest', number: 12, id:2,link:'/suggest',},
        {name: 'Checked', number: 3 , id:3,link:'/checked',},
        {name: 'Supplies', number: 1 , id:4,link:'/supplies',}
      ],
      active: null,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.selectedBar {
  background-color: blue;
}
.toolBar {
  background-color: #60C3FF;
}
</style>
