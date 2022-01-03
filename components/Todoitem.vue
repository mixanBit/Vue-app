<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <strong>{{todo.id}}</strong>
      {{todo.title}}
    </span>
    <button class="btn" v-on:click="$emit('remove-todo, todo.id')">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped>
  li{
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* grid-gap: 10px; */
    box-shadow: 0 2px 4px rgba(0,0,0,.7);
    padding: 10px;
    margin-top: 5px;
  }
  span{
    display: flex;
    grid-gap: 10px;
  }
  .btn{
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 50px;
    border: .5px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: red;
    background-color: white;
    margin: auto;
    margin-right: 0;
  }

  .done{
    text-decoration: line-through;
  }
</style>