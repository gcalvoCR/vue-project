<template>
  <div class="hello">
    <h1>This is the landing page</h1>
    <h2>{{ msg }}</h2>
    <router-link to="/dashboard">Go to dashboard</router-link>
    <div class="login">
      <button>
          <router-link to="/login">Login</router-link>
      </button>
      
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.login{
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}

button{
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  height: 50px;
  min-width: 100px;
  background: #4cbcd8;
  border: none;
  border-radius: 15px;
  color: #fff;
  font-weight: bold;
  outline: none;  
}

li a {
    text-decoration: none;
}

</style>