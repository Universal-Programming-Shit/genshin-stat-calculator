<template>
  <div
    class="character-container"
    :style="{backgroundColor: color}"
  >
    <character-selection />
    <character-stat-overview />
  </div>
</template>

<script setup lang="ts">
import CharacterSelection from "./components/CharacterSelection.vue";
import CharacterStatOverview from "./components/CharacterStatOverview.vue";
import {useCharacterStore} from "./CharacterStore";
import {computed} from "vue";
import {getColor} from "../types/element";

const element = computed(() => useCharacterStore().selectedCharacter.element);
const color = computed(() => getColor(element.value));

</script>

<style scoped>
.character-container {
  box-shadow: #00000050 4px 4px;
  border: black 1px solid;
}

.character-container * {
  box-shadow: inset 2px 2px rgba(0, 0, 5, 0.25);
  width: 100%;
}
</style>
