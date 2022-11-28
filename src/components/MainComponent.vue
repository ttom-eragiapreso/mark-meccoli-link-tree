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
  },
  methods: {
    showAdmin(){
      store.showIntranet = !store.showIntranet
    },
    addNewLink(){
      if(store.newLink.href || store.newLink.name === "") alert("Devi inserire entrambi i campi")
      store.artist.links.push(store.newLink)
      store.showIntranet = false
    }
  }
}
</script>

<template>
  
  <div class="em-container d-flex">

    <div class="container">
      <div class="logo">
        <img :src="artist.logoBlackSrc" :alt="artist.name">
      </div>

      <card-component v-for="(link, index) in store.artist.links" :key="index" :link="link"/>

    </div>


    <!-- <div class="login" @click="showAdmin()">MM</div> -->

    <div class="intranet" v-if="store.showIntranet">

      <div class="mb-3 w-50">
        <label for="newLinkName" class="form-label fs-3 text-white">Titolo Nuovo Link</label>
        <input type="text" class="form-control" 
        id="newLinkName" 
        placeholder="Latest Collab.."
        v-model="store.newLink.name"
        >
      </div>

      <div class="mb-3 w-50">
        <label for="newLinkHref" class="form-label fs-3 text-white">Actual Link</label>
        <input type="text" class="form-control" 
        id="newLinkHref" 
        placeholder="http:://..."
        v-model="store.newLink.href"
        >
      </div>

      <button class="btn btn-info fs-3 my-3" @click="addNewLink()">AGGIUNGI NUOVO LINK</button>

    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;


.em-container {
  height: 100vh;
  background-color: $background-color;
  align-items: center;
  position: relative;
}

.login {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 3rem;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
}

.intranet {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50vh;
  border-radius: 10px;
  background-color: rgba(69, 69, 69, 0.815);
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo{
  max-width: 450px;
  margin: 0 auto;
}

h2 {
  margin: 1rem 0;
}

@media all and (max-width: 500px) {
  h2{
    margin: .5rem 0;
  }
  .em-container {
    align-items: flex-start;
    padding-top: 50px;
  }
  .login {
    display: none;
  }
}

</style>