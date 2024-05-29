<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Tasks</h1>
    <input type="text" v-model="searchQuery" placeholder="Search tasks" class="mb-4 p-2 rounded-xl border">
    <TaskList
      :tasks="filteredTasks"
      @delete-task="deleteTaskById"
      @edit-task="openModal"
    />

    <div v-if="selectedTask" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">{{ selectedTask.title }}</h2>
        <p class="text-gray-600 mb-4">{{ selectedTask.description }}</p>
        <div class="flex justify-end">
          <button @click="closeModal" class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskList from '../components/TaskList.vue';

export default {
  name: 'TaskListView',
  components: { TaskList },
  computed: {
    ...mapState(['tasks']),
    filteredTasks() {
      return this.tasks.filter(task =>
        task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(['updateTask', 'deleteTask']),
    deleteTaskById(taskId) {
      this.deleteTask(taskId);
    },
    openModal(task) {
      this.selectedTask = task;
    },
    closeModal() {
      this.selectedTask = null;
    },
  },
  data() {
    return {
      searchQuery: '',
      selectedTask: null
    };
  },
};
</script>

<style scoped></style>
