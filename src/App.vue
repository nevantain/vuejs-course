<template>
<div class="app">
  <navbar></navbar>
  <router-view></router-view>
</div>
</template>
      
<script>
import Navbar from './components/NavBar.vue'

export default {
  components: {
    Navbar
  }          
}

</script>
      
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
}
</style>