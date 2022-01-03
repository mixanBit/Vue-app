<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>hello</h2>
    <TodoList 
      v-bind:todos="todos" 
      @remove-todo='removeTodo'
    />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  data (){
    return {
      todos: [
        {id: 1, title: 'buy videocart', completed: false},
        {id: 2, title: 'buy bigmack', completed: false},
        {id: 3, title: 'buy camera', completed: false}
      ]
    }
  },
  mounted: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
