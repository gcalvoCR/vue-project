<template>
    <div>
       <form @submit.prevent="onSubmit" autocomplete="off">
                <input type="text" 
                    v-model="title" 
                    name="title" 
                    placeholder="Add todo..." 
                    v-validate="'min:5'">
                <transition name="alert-in" 
                    enter-active-class="animated flipInX" 
                    leave-active-class="animated flipOutX">
                    <p class="alert" v-if="errors.has('title')">{{errors.first('title')}}</p>
                </transition>
           </form> 
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: "AddTodo",
    components: {
        
    },
    data(){
        return {
            title: ''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(){
            this.$validator.validateAll().then((result) =>{
                if (result){
                    this.addTodo(this.title);
                    this.title= '';
                }
            })
        }
    }
}
</script>

<style scoped>
    input {
        width: calc(100% - 40px);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        background-color: #323333;
        color: #aed1d1;
    }
    .alert {
        background: #fdf2ce;
        font-weight: bold;
        display: inline-block;
        padding: 5px;
        margin-top: -20px;
    }
    .alert-in-enter-active {
        animation: bounce-in .5s;
    }
    .alert-in-leave-active {
        animation: bounce-in .5s reverse;
    }

</style>