<script>
import {store} from '../data/store'
import CardComponent from './CardComponent.vue'
export default {
  name: 'IntranetComponent',
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
  
 
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;



</style>