import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  routes: [
    {
      name: "stats",
      path: "/",
      component: () => import("./TotalStats.vue"),
    },
    {
      name: "character",
      path: "/character",
      component: () => import("./character/Character.vue"),
    },
    {
      name: "flower",
      path: "/artifact/flower",
      component: () => import("./artifact/components/ArtifactFlower.vue"),
    },
    {
      name: "feather",
      path: "/artifact/feather",
      component: () => import("./artifact/components/ArtifactFeather.vue"),
    },
    {
      name: "sands",
      path: "/artifact/sands",
      component: () => import("./artifact/components/ArtifactSands.vue"),
    },
    {
      name: "goblet",
      path: "/artifact/goblet",
      component: () => import("./artifact/components/ArtifactGoblet.vue"),
    },
    {
      name: "circlet",
      path: "/artifact/circlet",
      component: () => import("./artifact/components/ArtifactCirclet.vue"),
    },
  ],
  history: createWebHistory("/genshin-stat-calculator"),
});
