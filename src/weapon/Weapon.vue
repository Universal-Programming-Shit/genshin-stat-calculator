<template>
  <div class="weapon-container">
    <WeaponSelection />
    <WeaponStatOverview />
  </div>
</template>

<script setup lang="ts">
import WeaponStatOverview from "./components/WeaponStatOverview.vue";
import WeaponSelection from "./components/WeaponSelection.vue";
</script>

<style scoped>
.weapon-container {
  box-shadow: #00000050 4px 4px;
  border: black 1px solid;
  background-color: seashell;
}

.weapon-container * {
  box-shadow: inset 2px 2px rgba(0, 0, 5, 0.25);
  width: 100%;
}
</style>
