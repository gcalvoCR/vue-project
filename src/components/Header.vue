<template>  
    <nav class="header">
        <span>
            <h1>Todo List</h1>
        </span>
          <span class="align-right">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </span>  
    </nav>
</template>

<script>

export default {
    name: "Header",
}
</script>

<style scoped>

span { width:50%; display:inline-block; }
span.align-right { text-align:right; }

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: #4cbcd8;
  font-weight: bold;
  margin-right: 15px;
}

</style>