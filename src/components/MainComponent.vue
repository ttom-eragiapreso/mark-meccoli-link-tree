<script>
import {store} from '../data/store'
import CardComponent from './CardComponent.vue'
export default {
  name: 'MainComponent',
  components: {
    CardComponent
  },
  data(){
    return {
      store
    }
  },
  props: {
    artist: Object
  }
}
</script>

<template>
  
  <div class="em-container d-flex align-items-center">

    <div class="container">
      <div class="logo">
        <img :src="artist.logoBlackSrc" :alt="artist.name">
      </div>
      <h2 class="text-center fs-1 my-5">Hi!</h2>

      <card-component v-for="(link, index) in store.artist.links" :key="index" :link="link"/>

    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;


.em-container {
  height: 100vh;
  background-color: $background-color;
}

// .container {
//   border: 1px solid white;
// }

.logo{
  width: 450px;
  margin: 0 auto;
}

</style>