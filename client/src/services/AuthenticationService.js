 import { api } from "./Api";

 export default {
    register(credentials) {
        return api.post('/api/users/register',credentials)
    },
    login(credentials ){
        return api.post('/api/users/login',credentials)
    }
 }