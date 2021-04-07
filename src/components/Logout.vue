<template>
<div>
    <button @click="logout">Log out</button>
</div>

</template>

<script>
/* eslint-disable */
export default {
    methods:{
        logout(){
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
    div{
        position: absolute;
        top: 8px;
        right: 16px;
        font-size: 18px;
    }

    button {
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

    button:hover{
        color: #4cbcd8;
        background: #fff;
        cursor: grab;
    }

</style>
