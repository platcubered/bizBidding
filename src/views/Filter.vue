<template>
  <v-app>
    <v-container class="mainContainer">
      <filter-headder class="headderLayout"></filter-headder>
      <v-layout column>
        <v-layout row align-content-space-around> 
          <v-flex xs-3 sm-3 class="sliderLabel"><span >AMOUNT</span></v-flex>
          <v-flex xs-3 sm-3 class="sliderLabel2"><span >{{slider}} 억원</span></v-flex>
        </v-layout>
        <v-slider
          v-model="slider"
          thumb-label
          :max="50"
        ></v-slider>
      </v-layout>
      <v-layout column>
        <v-flex xs-3 sm-3 class="sliderLabel"><span >COUNTRY</span></v-flex>
        <v-radio-group v-model="radioGroup">
          <v-layout row wrap>
            <v-radio
              v-for="country in countries"
             :key="country"
             :label="`${country}`"
             :value="country"
           ></v-radio>
          </v-layout>
        </v-radio-group>
      </v-layout>

      <v-layout>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex
            v-for="n in 9"
            :key="n"
            xs4
          >
          <router-link to="/list">
            <v-layout class="iconContainer" column>
              <img class="flexImg" :src="`${imgSrc[`${n-1}`].url}`">
              <v-text>{{ imgSrc[`${n-1}`].text }}</v-text>
            </v-layout>
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </v-container> 
  </v-app>
</template>

<script>
import FilterHeadder from '@/components/FilterHeadder.vue'

export default {
  data() {
    return {
      slider:25,
      selectedSeason: 0,
      radioGroup: 'Africa',
      countries: ['S-E Asia', 'Middle East', 'Africa', 'Europe', 'SAmerica', 'NAmerica'],
      size: 'sm',
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ],
      imgSrc: [{url:'/img/baseline-apps-24px.svg', text: 'ALL'},
                {url:'/img/baseline-expand_less-24px.svg', text: 'AMOUNT MAX'},
                {url:'/img/baseline-expand_more-24px.svg', text: 'AMOUNT MIN'},
                {url:'/img/baseline-last_page-24px.svg', text: 'TIME-BID'},
                {url:'/img/baseline-first_page-24px.svg', text: 'TIME-START'},
                {url:'/img/baseline-blur_on-24px.svg', text: 'AI MATCHED'},
                {url:'/img/baseline-my_location-24px.svg', text: 'DISTANCE'},
                {url:'/img/baseline-timer-24px.svg', text: 'NEWEST'},
                {url:'/img/baseline-list_alt-24px.svg', text: 'LATEST'}],
    }
  },
  components: {
    FilterHeadder,
  }
}
</script>

<style scoped>
/* .tileItem {
  justify-content: cen;
} */
.iconContainer {
  height: 100px;
  border: 1px solid gray;
  align-items: center;
  justify-content: center;
}
.sectionContain {
  padding: 0 20px 0 20px;
}
.section1Layout {
  margin: -18px 0 0 0; 
}
.sliderLabel {
  size: 13px;
  font-weight: 800;
  margin: 30px 0 -20px 0px
}
.sliderLabel2 {
  size: 13px;
  font-weight: 800;
  margin: 30px 0 -20px 0;
  text-align: right;
}
.headderLayout {
  margin: 41px 0 0 0 
}

</style>
