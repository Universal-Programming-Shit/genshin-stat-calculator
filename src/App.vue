<script setup lang="ts">
import AppMenu from "./AppMenu.vue";
</script>

<template>
  <div class="app-container">
    <app-menu />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

.app-container > *:not(:first-child) {
  flex-grow: 1;
  padding: 0.25em;
}

@media screen and (orientation: landscape) {
  .app-container {
    flex-direction: row;
  }
}
</style>
