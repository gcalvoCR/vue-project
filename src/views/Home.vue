<template>
  <div>
      <!-- <AddTodo v-on:add-todo="addTodo"/> -->
     <!-- <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/> -->
     <AddTodo />
     <FilterTodos/>
     <Todos/>
  </div>
</template>

<script>
import Todos from '../components/Todos';
import FilterTodos from '../components/FilterTodos';
import AddTodo from '../components/AddTodo';
// import axios from 'axios';

export default {
  name: 'Home',
  components:{
    Todos,
    FilterTodos,
    AddTodo
  },
  // data(){
  //   return{
  //     todos:[
  //     ]
  //   }
  // }, 
  // methods:{
  //   deleteTodo(id){
  //     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(() => this.todos = this.todos.filter(todo => todo.id !== id))
  //     .catch(err => console.log(err))
      
  //   },
  //   addTodo(newTodo){
  //     const{ title, completed} = newTodo;

  //     axios.post('https://jsonplaceholder.typicode.com/todos', {
  //       title,
  //       completed
  //     })
  //     .then(res => this.todos= [...this.todos, res.data])
  //     .catch(err => console.log(err))
  //   }
  // },
  // created(){
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
  //   .then(res => this.todos = res.data)
  //   .catch(err => console.log(err));
  // }
}
</script>

<style>

</style>
