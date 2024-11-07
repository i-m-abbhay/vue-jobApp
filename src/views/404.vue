<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
  >
    <i class="pi pi-exclamation-triangle text-6xl mb-4"></i>
    <h1 class="text-6xl font-bold mb-2">404</h1>
    <p class="text-2xl mb-4">Page Not Found</p>
    <RouterLink to="/" class="text-blue-500 hover:underline">
      Go back to Home
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "NotFound",
};
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.pi-exclamation-triangle {
  animation: float 3s ease-in-out infinite;
}
h1 {
  animation: float 3s ease-in-out infinite;
  animation-delay: 0.5s;
}
p {
  animation: float 3s ease-in-out infinite;
  animation-delay: 1s;
}
</style>
