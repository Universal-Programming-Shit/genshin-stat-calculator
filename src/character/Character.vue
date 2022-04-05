<template>
  <div class="character-container" :style="{ backgroundColor: color }">
    <character-selection />
    <character-stat-overview />
  </div>
</template>

<script setup lang="ts">
import CharacterSelection from "./components/CharacterSelection.vue";
import CharacterStatOverview from "./components/CharacterStatOverview.vue";
import { useCharacterStore } from "./CharacterStore";
import { computed } from "vue";
import { getColor } from "../types/element";

const element = computed(() => useCharacterStore().selectedCharacter.element);
const color = computed(() => getColor(element.value));
</script>

<style scoped>
.character-container {
  padding: 0.25em;
}

.character-container * {
  width: 100%;
}
</style>
