<script>
import {store} from '../data/store'
export default {
  name: 'CardComponent',
  props: {
    link: Object
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  
  <div class="container d-flex mb-4 p-2">
    <div class="img-container">
      <a :href="link.href" class="fs-1 d-flex"><font-awesome-icon :icon="link.faIcon"/></a>
    </div>
    <div class="h-100 m-auto d-flex align-items-center">
      <a :href="link.href" class="fs-1">{{link.name}}</a>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;


a {
  color: black;
  &:hover {
    color: rgb(248, 240, 245);
  }
}

.container {
  border: 1px solid black;
  border-radius: 9999px;
  padding: 1rem;
}

.img-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.322);
  transition: all .25s ease;
  &:hover {
    background-color: black;
    a {
      color: white;
    }
  }
}


</style>