<template>
    <div>
        <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center  h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style="border-radius: 25px">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            Sign up
                                        </p>

                                        <form class="mx-1 mx-md-4" @submit.prevent="register">
                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example1c">FirstName :</label>
                                                    <input type="text" id="form3Example1c" class="form-control" autocomplete="given-name"
                                                        v-model="firstName" required />

                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example2c">LastName :</label>
                                                    <input type="text" id="form3Example2c" class="form-control" autocomplete="family-name"
                                                        v-model="lastName" required />

                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example3c">Your Email :</label>
                                                    <input type="email" id="form3Example3c" class="form-control" autocomplete="email"
                                                        v-model="email" required /> 

                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example4c">Password :</label>
                                                    <input type="password" id="form3Example4c" class="form-control" autocomplete="new-password"
                                                        v-model="password" required />

                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <div class="form-outline flex-fill text-left mb-0">
                                                    <label class="form-label" for="form3Example4cd">Repeat your password
                                                        :</label>
                                                    <input type="password" id="form3Example4cd" class="form-control"
                                                        v-model="repeatPassword" required />

                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button @click="register" type="button" class="btn btn-primary btn-lg"
                                                    :disabled="!isFormValid">
                                                    Register
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
import AuthenticationService from "@/services/AuthenticationService";

export default {
    name: "RegisterUser",
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
        };
    },
    computed: {
        isFormValid() {
            return this.firstName && this.lastName && this.email && this.password && this.repeatPassword;
        },
    },
    methods: {
        validateEmail(email) {
            const re = /^[^@]+@[^.]+\.[cC][oO][mM]$/;
            return re.test(email);
        },
        validatePassword(pass1,pass2){
            if (pass1 !== pass2) {
                    return false;
                }else{
                    return true;
                }
        },
        async register() {
            // Check email validity
            if (!this.validateEmail(this.email)) {
                alert("Invalid email address.  The format should be 'example@example.com' ");
                return;
            }
            // Check if passwords match
            if (!this.validatePassword(this.password,this.repeatPassword)) {
                alert("Passwords do not match");
                return;
            }
            try {
                const response = await AuthenticationService.register({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                });
                alert(response.data.message)
            } catch (error) {
                console.log(error)
                alert(error.response.data.error)
            }
        },
    },
};
</script>
