<template>
  <header class="bg-green-900 text-white p-4 flex flex-col md:flex-row items-center justify-between">
    <router-link to="/" class="text-lg font-semibold mb-2 md:mb-0">Task Manager</router-link>
    <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
      <router-link to="/" class="hover:underline">Task List</router-link>
      <router-link to="/add" class="hover:underline">Add Task</router-link>
      <a href="https://github.com/YusraSenimAydin/task-manager-vue" target="_blank" class="hover:underline">Github</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped></style>
