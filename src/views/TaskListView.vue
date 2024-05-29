<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Tasks</h1>
    <input type="text" v-model="searchQuery" placeholder="Search tasks" class="mb-4 p-2 rounded-xl border">
    <div class="mb-4">
      <select v-model="filterStatus" class="p-2 rounded-xl border">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
    <TaskList
      :tasks="filteredTasks"
      @delete-task="deleteTaskById"
      @edit-task="openModal"
      @toggle-completion="toggleCompletion"
    />

    <div v-if="selectedTask" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">{{ selectedTask.title }}</h2>
        <input v-model="selectedTask.title" class="mb-2 p-2 border rounded" />
        <textarea v-model="selectedTask.description" class="mb-4 p-2 border rounded w-full"></textarea>
        <div class="flex justify-end space-x-2">
          <button @click="updateSelectedTask" class="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Update</button>
          <button @click="closeModal" class="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded">Close</button>
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
      return this.tasks.filter(task => {
        const matchesSearchQuery = task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || task.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesFilterStatus = this.filterStatus === 'all' || (this.filterStatus === 'completed' && task.completed) || (this.filterStatus === 'incomplete' && !task.completed);
        return matchesSearchQuery && matchesFilterStatus;
      });
    }
  },
  methods: {
    ...mapActions(['updateTask', 'deleteTask']),
    deleteTaskById(taskId) {
      this.deleteTask(taskId);
    },
    openModal(task) {
      this.selectedTask = { ...task }; // Clone the task to avoid direct mutation
    },
    closeModal() {
      this.selectedTask = null;
    },
    updateSelectedTask() {
      this.updateTask(this.selectedTask);
      this.closeModal();
    },
    toggleCompletion(task) {
      task.completed = !task.completed;
      this.updateTask(task);
    }
  },
  data() {
    return {
      searchQuery: '',
      filterStatus: 'all',
      selectedTask: null
    };
  },
};
</script>

<style scoped></style>
