<template>
    <v-toolbar fixed class="cyan" style="background-color: cyan;">
        <v-toolbar-title class="mr-5">
           <span @click="navigateTo({name: 'register'})" class="home"> Tab Tracker</span>
        </v-toolbar-title>
        <v-toolbar-items v-if="!isUserLoggedIn">
            <v-btn flat dark>Browser</v-btn>
            <v-btn flat dark @click="navigateTo({name: 'register'})">Signup</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';


export default {
    name: "PageHeader",
    computed :{
        ...mapState({
            isUserLoggedIn: state => state.users.isUserLoggedIn
        }),
    },  
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    }
};
</script>

<style scoped>
.home {
    cursor: pointer;
}

</style>