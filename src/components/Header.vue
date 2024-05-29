<template>
  <header class="bg-gray-600 text-white p-4 flex items-center justify-between">
    <router-link to="/" class="text-lg font-semibold">Task Manager</router-link>
    <div class="flex items-center">
      <router-link to="/" class="mr-4">Task List</router-link>
      <router-link to="/add">Add Task</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped></style>
