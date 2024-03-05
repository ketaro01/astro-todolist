<template>
  <div>
    <h1>Todo List, {{todoList.length}}개</h1>
  </div>
</template>
<script setup>
  import { $todoList } from '../store/todoStore.ts';
  import { useStore } from '@nanostores/vue';

  const todoList = useStore($todoList);
</script>
<style lang="scss" scoped>
</style>
