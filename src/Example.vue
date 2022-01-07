<template>
  <div>
    <h1>Пробный текст</h1>
    <app-input></app-input>
  </div>
</template>

<script>
import Input from './Field.vue'

export default {
  components: {
    'app-input': Input
  }
}
</script>