<template>
     <div >
        <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center  h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style="border-radius: 25px">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Login Here
                                        </p>

                                        <form class="mx-1 mx-md-4" @submit.prevent="register">

                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example3c">Your Email :</label>
                                                    <input type="email" id="form3Example3c" class="form-control" 
                                                        v-model="email" required />

                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example4c">Password :</label>
                                                    <input type="password" id="form3Example4c" class="form-control"
                                                        v-model="password" required />

                                                </div>
                                            </div>

                                  
                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button @click="login" type="button" class="btn btn-primary btn-lg" style="background-color: cyan !important;border: none; color: #353434;"
                                                    :disabled="!isFormValid">
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            class="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions } from 'vuex';


export default {
    name: "LoginUser",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    computed: {
        
        isFormValid() {
            return  this.email && this.password 
        },
    },
    methods: {
        ...mapActions(['setToken','setUser']),
        validateEmail(email) {
            const re = /^[^@]+@[^.]+\.[cC][oO][mM]$/;
            return re.test(email);
        },

        async login() {
            // Check email validity
            if (!this.validateEmail(this.email)) {
                alert("Invalid email address. The format should be 'example@example.com' ");
                return;
            }
      
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password,
                });
                this.setToken(response.data.token) 
                this.setUser(response.data.user) 
                alert("successfully Logged in")
            } catch (error) {
                console.log(error)
                alert(error.response.data.error)
            }
        },
    },
};

</script>