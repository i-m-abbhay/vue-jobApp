<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task 3"],
      link: "https://www.google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "inactive";
      } else if (this.status === "inactive") {
        this.status = "pending";
      } else {
        this.status = "active";
      }
    },
  },
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
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>
  <!-- Any of the below two works -->
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
