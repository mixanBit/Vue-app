<template>
  <div>
    <ul>
      <li>Todo List 1</li>
      <TodoItem 
        v-for="todo of todos"
        v-bind:todo="todo"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/Todoitem.vue'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
  ul{
    width: 300px;
    list-style: none;
    margin: auto;
    /* margin: 0; */
    padding: 0;
  }
</style>