<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <p>
            <input type="checkbox" v-model="checked" v-on:change="markComplete">
            {{todo.title}}
            <!-- <i class="fa fa-minus-circle" @click="$emit('del-todo', todo.id)"></i> -->
            <i class="fa fa-minus-circle" @click="deleteTodo(todo.id)"></i>
        </p>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "TodoItem",
    props: ["todo"],
      data(){
        return{
            checked: this.todo.completed,
        }
    },
    methods:{
        ...mapActions(['deleteTodo', 'updateTodo']),
        markComplete() {
            this.todo.completed =!this.todo.completed
            this.updateTodo(this.todo)
        }
    }
}
</script>

<style scoped>
    
    .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
        border-left: 4px solid #4cbcd8;
        color: #3E5252;
    }

    .is-complete {
        text-decoration: line-through;
    }

    i {
        float:right;
        cursor:pointer;
        color: rgb(200, 66, 66);
    }

</style>
