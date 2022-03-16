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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
  grid-template-rows: masonry;
  masonry-auto-flow: positioned;
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
}
</style>
