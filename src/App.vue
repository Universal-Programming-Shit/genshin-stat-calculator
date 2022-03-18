<script setup lang="ts">
import Character from "./character/Character.vue";
import Weapon from "./weapon/Weapon.vue";
import TotalStats from "./TotalStats.vue";
import Artifact from "./artifact/Artifact.vue";
</script>

<template>
  <div class="app-container">
    <TotalStats class="sticky" />
    <div class="app">
      <Character />
      <Weapon />
      <Artifact />
    </div>
  </div>
</template>

<style scoped>
.app {
  flex-grow: 1;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.app * {
  margin: 1em;
}

.app-container {
  display: flex;
  flex-direction: column;
}

.sticky {
  bottom: 0;
  margin: 0;
  padding: 0;
  flex-basis: min-content;
  height: min-content;
  position: sticky;
  top: 0;
}

@media screen and (orientation: landscape) {
  .app-container {
    flex-direction: row;
  }
  .app {
    flex-direction: row;
    flex-flow: wrap;
  }
}
</style>
