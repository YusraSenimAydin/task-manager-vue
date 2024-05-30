<template>
  <li class="border rounded-lg p-4 mb-2 flex justify-between items-center">
    <div>
      <h2 class="text-lg font-bold">{{ task.title }}</h2>
      <p>{{ shortenedDescription }}</p>
      <p :class="task.completed ? 'text-green-700' : 'text-red-500'">
        {{ task.completed ? 'Completed' : 'Incomplete' }}
      </p>
    </div>
    <div class="flex space-x-2 items-center">
      <a-switch
        :checked="task.completed"
        @change="toggleCompletion"
        :checked-children="'Completed'"
        :un-checked-children="'Incomplete'"
        :default-checked="task.completed"
      />
      <EditOutlined @click="editTask" class="cursor-pointer" />
      <DeleteFilled @click="handleDelete" class="cursor-pointer text-red-500" />
    </div>
  </li>
</template>

<script>
import { defineComponent } from 'vue';
import { EditOutlined, DeleteFilled } from '@ant-design/icons-vue';
import { Switch as ASwitch } from 'ant-design-vue';

export default defineComponent({
  components: {
    EditOutlined,
    DeleteFilled,
    ASwitch,
  },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortenedDescription() {
      const maxLength = 30;
      return this.task.description.length > maxLength
        ? this.task.description.substring(0, maxLength) + '...'
        : this.task.description;
    },
  },
  methods: {
    handleDelete() {
      this.$emit('delete-task', this.task.id);
    },
    editTask() {
      this.$emit('edit-task', this.task);
    },
    toggleCompletion() {
      this.$emit('toggle-completion', this.task);
    },
  },
});
</script>

<style scoped></style>
