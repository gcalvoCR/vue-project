<template>
  <div class="special">
    <h4>Register</h4>
    <form @submit.prevent="handleSubmit" autocomplete="off">
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <div>
        <label for="password-confirm">Confirm Password</label>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>
      <div>
        <label for="password-confirm">Is this an administrator account?</label>
        <select v-model="is_admin">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div>
        <button type="submit" @click="handleSubmit">Register</button>
        <router-link class="registration" to="/login">Back to login!</router-link>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["nextUrl"],
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        let url = "http://localhost:3000/register";
        if (this.is_admin != null || this.is_admin == 1)
          url = "http://localhost:3000/register-admin";
        this.$http
          .post(url, {
            name: this.name,
            email: this.email,
            password: this.password,
            is_admin: this.is_admin,
          })
          .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("/");
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.password = "";
        this.passwordConfirm = "";

        return alert("Passwords do not match");
      }
    },
  },
};
</script>

<style scoped>
  .special {
    width: 70%;
    margin: auto;
  }

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

  select{
    margin: 20px;
    padding: 6px;
    border: #4cbcd8 1px solid;
    border-radius:5px;
    color: #3E5252;
  }

  label{
    color: #3E5252;
  }

  option{
    color:#3E5252;
  }

</style>