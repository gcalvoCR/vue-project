<template>
<div>
  <Header/>
  <div class="about">
    <h1>Note!</h1>
    <p>This is a simple todo app to practice some of the Vue 2 Fundamentals</p>
    <p>Gabriel Calvo Vargas.</p>
  </div>
  <Logout/>
</div>
  
</template>

<script>
import Header from '../components/Header'
import Logout from '../components/Logout'
export default {
  name: 'About',
  data() {
    return {
      their_name: "user"
    }
  },
  components:{
    Header,
    Logout
  }
}
</script>

<style scoped>

</style>