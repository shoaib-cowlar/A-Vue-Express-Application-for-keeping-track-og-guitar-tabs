<template>
  <div>
   <v-app>
    <page-header />
    <main>
      <v-container fluid class="d-flex justify-content-center align-items-center " style="
    min-height: 90vh;
">
        <router-view></router-view>
      </v-container>
    </main>
   </v-app>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import config from './config';
export default {
  name: 'App',
  components: {
    PageHeader

  },
  computed: {
    backendUrl() {
      return config.backendUrl;
    },
  },
  mounted() {

  }

}
</script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'app',
  components : {
    PageHeader
  }
}
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.toolbar_title {
  color: white;
}

.btn__content {
  color: white;
}
</style>
