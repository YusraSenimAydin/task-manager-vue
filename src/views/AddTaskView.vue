<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Add Task</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input v-model="title" type="text" id="title"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
          Description
        </label>
        <textarea v-model="description" id="description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Task
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTaskView',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    ...mapActions(['addTask']),
    handleSubmit() {
      const newTask = {
        title: this.title,
        description: this.description,
        completed: false, 
      };
      this.addTask(newTask)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Failed to add task:', error);
        });
    },
  },
};
</script>

<style scoped></style>
