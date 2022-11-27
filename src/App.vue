<script>
import CardComponentVue from './components/CardComponent.vue';
import MainComponentVue from './components/MainComponent.vue';
import {store} from './data/store'
export default {
  name: 'App',
  components: {
    CardComponentVue,
    MainComponentVue
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  
  <MainComponentVue :artist="store.artist"/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/variables' as *;



</style>