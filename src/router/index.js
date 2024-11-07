import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/404.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "Job",
      component: JobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "EditJob",
      component: EditJobView,
    },
    {
      path: "/jobs/add",
      name: "AddJob",
      component: AddJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: NotFound,
    },
  ],
});

export default router;
