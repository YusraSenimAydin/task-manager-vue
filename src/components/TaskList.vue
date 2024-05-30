<template>
  <ul>
    <TaskItem v-for="task in tasks" :key="task.id" 
    :task="task" 
    @delete-task="handleDelete" 
    @edit-task="handleEdit"
    @toggle-completion="toggleCompletion" />
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import TaskItem from './TaskItem.vue';

export default defineComponent({
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDelete(taskId) {
      this.$emit('delete-task', taskId);
    },
    handleEdit(task) {
      this.$emit('edit-task', task);
    },
    toggleCompletion(task) {
      this.$emit('toggle-completion', task);
    },
  },
});
</script>

<style scoped></style>
