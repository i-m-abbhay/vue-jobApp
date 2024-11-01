<script setup>
import { ref } from "vue";

const name = ref("John Doe");
const status = ref("pending");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "inactive";
  } else if (status.value === "inactive") {
    status.value = "pending";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};
</script>
<template>
  <h1>Vue Jobs</h1>
  <p>{{ name }}</p>

  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input id="newTask" v-model="newTask" type="text" name="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="tas in tasks" :key="tas">{{ tas }}</li>
  </ul>

  <!-- Any of the below two works -->
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
