<template>
  <div>
    <ul>
      <li v-for="item in todoList">
        <span>{{ item.value }}</span>
        <button v-on:click="remove(item.id)">x</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { useStore } from '@nanostores/vue';
  import { $todoList, removeTodoItem } from '../store/todoStore.ts';

  const todoList = useStore($todoList);
  function remove(id) {
    removeTodoItem(id);
  }
</script>
<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      border: 1px solid #ddd;
      margin: 8px 0;
      padding: 8px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      button {
        border: none;
        background: white;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
    }
  }
</style>
