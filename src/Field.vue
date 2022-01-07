<template>
  <div>
    <input type="text" v-model="mess">
    <p>{{ mess }}</p>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        mess: ''
      }
    }
  }
</script>

