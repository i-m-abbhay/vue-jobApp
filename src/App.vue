<script setup>
import { ref } from "vue";

const name = ref("John Doe");
const status = ref("pending");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "inactive";
  } else if (status.value === "inactive") {
    status.value = "pending";
  } else {
    status.value = "active";
  }
};
</script>
<template>
  <h1>Vue Jobs</h1>
  <p>{{ name }}</p>

  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="tas in tasks" :key="tas">{{ tas }}</li>
  </ul>

  <!-- Any of the below two works -->
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
