<template>
    <div>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <div v-bind:key="todo.id" v-for="todo in todos">
                <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
            </div>
       </transition-group> 
        
    </div>
</template>

<script>
import TodoItem from './TodoItem';

export default{
    name: "Todos",
    components:{
        TodoItem
    },
    props: ["todos"]
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
 
</style>
