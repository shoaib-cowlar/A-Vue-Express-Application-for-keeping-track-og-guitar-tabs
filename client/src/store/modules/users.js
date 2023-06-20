// import axios from "axios";

const state = {
    user: null,
    token: null,
    isUserLoggedIn:false
};


const getters = {
    // allTodos:(state)=>state.todos
};

const actions = {
    setToken ({commit}, token) {
        commit('setToken', token)
    } ,  
    setUser ({commit}, user) {
        commit('setUser', user)
    }  
}
const mutations = {
    setToken(state, token){
        state.token = token
        if(state.token){
            state.isUserLoggedIn = true
        }else {
            state.isUserLoggedIn = false
        }
        

    },
    setUser(state, user){
        state.user = user
    }
};



export default {
    state,
    mutations,
    getters,
    actions, 
  };