<template>

<router-view></router-view>

</template>

<script>
import config from './config';
export default {
  name: 'App',
  components: {
 
  }, 
  computed: {
    backendUrl() {
      return config.backendUrl;
    },
  },
  mounted(){
    
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.toolbar_title {
  color: white;
}
.btn__content {
  color: white;
}
</style>
