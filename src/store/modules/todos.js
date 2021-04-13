import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
let token = sessionStorage.getItem("jwt");
let headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Accept':'*/*'
  }

const state ={
    todos:[
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({commit}){
        console.log(token)
        const response = await axios.get(
            '/todos?limit=20', {headers: headers}
        );
        
        commit('setTodos', response.data);
    },
    async addTodo({commit}, title){
        const response = await axios.post(
            '/todos',
            {title, completed: false},
            {headers: headers}
        );
        commit('newTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`/todos/${id}`, {headers: headers});
        commit('removeTodo', id);
    },
    async filterTodos({commit}, e){
        const limit = parseInt(e.target.value)
        const response = await axios.get(`/todos?limit=${limit}`, {headers: headers});
        commit('setTodos', response.data);
    },
    async updateTodo({commit}, todo){
        const response = await axios.put(`/todos/${todo.id}`, todo, {headers: headers});
        commit('updateTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if(index !==-1){
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}