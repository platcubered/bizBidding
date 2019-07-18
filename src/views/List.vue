<template>
  <v-app>
    <v-container>
      <v-layout class="toolBar" row>
        <v-flex>
          <img src="/img/baseline-arrow_back-24px.svg">
        </v-flex>
        <v-layout column>
          <v-flex>
            <v-text>Biz Bidding</v-text>
          </v-flex>
          <v-flex>
            <v-text>{{ bidItem }} 전문</v-text>
          </v-flex>
          <v-flex>
            <v-text>목표시장:{{bidTargetLocation}}</v-text>
          </v-flex> 
        </v-layout>
      </v-layout>
      <v-layout>
        <v-layout column>
          <v-flex> <br> </v-flex> 
          <v-flex>About</v-flex> 
        </v-layout>
        <v-layout column>
          <v-flex>12</v-flex>
          <v-flex>Suggest</v-flex>
        </v-layout>
        <v-layout column>
          <v-flex>3</v-flex>
          <v-flex>Checked</v-flex>  
        </v-layout>
        <v-layout column>
          <v-flex>1</v-flex>
          <v-flex>Supplies</v-flex>
        </v-layout>  
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bidItem: '파워 플랜트',
      bidTargetLocation: '동남아시아',
    }
  }
}
</script>

<style scoped>
.toolBar {
  background-color: #60C3FF;
}
</style>
