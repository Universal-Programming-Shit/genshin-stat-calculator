<template>
  <div class="artifact-container">
    <ArtifactFlower/>
  </div>
  <div class="artifact-container">
    <ArtifactFeather/>
  </div>
  <div class="artifact-container">
    <ArtifactSands/>
  </div>
  <div class="artifact-container">
    <ArtifactGoblet/>
  </div>
  <div class="artifact-container">
    <ArtifactCirclet/>
  </div>
</template>

<script setup lang="ts">

import ArtifactFlower from "./components/ArtifactFlower.vue";
import ArtifactFeather from "./components/ArtifactFeather.vue";
import ArtifactSands from "./components/ArtifactSands.vue";
import ArtifactGoblet from "./components/ArtifactGoblet.vue";
import ArtifactCirclet from "./components/ArtifactCirclet.vue";
</script>

<style scoped>

.artifact-container {
  box-shadow: #00000050 4px 4px;
  border: black 1px solid;
  background-color: seashell;
  margin: 1em;
}
.artifact-container * {
  box-shadow: inset 2px 2px rgba(0, 0, 5, 0.25);
  width: 100%;
}
</style>
