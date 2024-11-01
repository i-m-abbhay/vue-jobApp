<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "pending",
    };
  },
};
</script>
<template>
  <h1>Vue Jobs</h1>
  <p>{{ name }}</p>

  <p v-if="status === 'active'">User is Active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
</template>
