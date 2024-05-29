import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      {
        id: "1",
        title: "Task 1",
        description: "task1 description",
        completed: false,
      },
      {
        id: "2",
        title: "Task 2",
        description: "task2 description",
        completed: false,
      },
      {
        id: "3",
        title: "Task 3",
        description: "task3 description",
        completed: false,
      },
      {
        id: "4",
        title: "Task 4",
        description: "task4 description",
        completed: false,
      },
    ],
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
  
  },
  modules: {},
});