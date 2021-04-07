/* eslint-disable */
<template>
  <div class="hello">
    <h1>Welcome to administrator page</h1>
    <p>If you are here, that means you are an admin!</p>
    <router-link to="/dashboard">Go to users' dashboard</router-link>
    <Logout/>
  </div>
</template>

<script>
/* eslint-disable */
import Logout from '../components/Logout'

export default {
  data() {
    return {
      msg: "The superheros"
    };
  },
  components: {
    Logout
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
