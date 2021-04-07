<template>
  <div class="special">
    <h4>Login</h4>
    <form @submit.prevent="handleSubmit" autocomplete="off">
      <div>
        <label for="email">E-Mail Address</label>
        <input id="email" type="email" v-model="email" required autofocus />
      </div>
      <div>
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
        </div>

      <div>
        <button type="submit" @click="handleSubmit">Login</button>
        <router-link class="registration" to="/register">Not registered?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
    console.log("working on this")
    //   if (this.password.length > 0) {
    //     this.$http
    //       .post("http://localhost:3000/login", {
    //         email: this.email,
    //         password: this.password,
    //       })
    //       .then((response) => {
    //         let is_admin = response.data.user.is_admin;
    //         localStorage.setItem("user", JSON.stringify(response.data.user));
    //         localStorage.setItem("jwt", response.data.token);

    //         if (localStorage.getItem("jwt") != null) {
    //           this.$emit("loggedIn");
    //           if (this.$route.params.nextUrl != null) {
    //             this.$router.push(this.$route.params.nextUrl);
    //           } else {
    //             if (is_admin == 1) {
    //               this.$router.push("admin");
    //             } else {
    //               this.$router.push("dashboard");
    //             }
    //           }
    //         }
    //       })
    //       .catch(function (error) {
    //         console.error(error.response);
    //       });
    //   }
    },
  },
};
</script>

<style scoped>
div {
  margin: 15px 0px;
}
label {
  display: inline-block;
  margin: 5px 0px;

}
input{
  width: calc(100% - 40px);
  padding: 20px;
  font-size: 1.2em;
  border: 0;
  color:#3E5252;
}

input:focus {
  outline-color: #4cbcd8;
}

button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  height: 60px;
  min-width: 200px;
  background: #4cbcd8;
  border: none;
  border-radius: 15px;
  color: #fff;
  font-weight: bold;
}

.registration{
  padding: 20px;
  float: right;
  text-decoration: none;
}

.special {
  width: 70%;
  margin: auto;
}

</style>