<template>
    <div>
        <label> Filter todos:</label>  
        <select @change="filterTodos($event)">
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="2">2</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "FilterTodos",
    methods: mapActions(['filterTodos'])
}
</script>

<style scoped>
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