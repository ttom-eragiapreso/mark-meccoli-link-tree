<script>
import {store} from '../data/store'
export default {
  name: 'MainComponent',
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
    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;


.em-container {
  height: 100vh;
  background-color: $background-color;
}

.container {
  border: 1px solid white;
}

.logo{
  width: 450px;
  margin: 0 auto;
}

</style>