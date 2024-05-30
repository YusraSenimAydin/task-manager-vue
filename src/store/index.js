import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [ ],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const tasks = await response.json();
        console.log('task', tasks)
        commit("setTasks", tasks);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    },
    async addTask({ commit }, task) {
      try {
        const response = await fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });
        const newTask = await response.json();
        commit("addTask", newTask);
      } catch (error) {
        console.error("Failed to add task:", error);
      }
    },
    async deleteTask({ commit }, taskId) {
      try {
        await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: "DELETE",
        });
        commit("deleteTask", taskId);
      } catch (error) {
        console.error("Failed to delete task:", error);
      }
    },
    async updateTask({ commit }, task) {
      try {
        const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });
        const updatedTask = await response.json();
        commit("updateTask", updatedTask);
      } catch (error) {
        console.error("Failed to update task:", error);
      }
    },
  },
  modules: {},
});
