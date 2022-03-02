<template>
  <div class="character-container" :style="{backgroundColor: color}">
    <character-selection/>
    <character-stat-overview/>
  </div>
</template>

<script setup lang="ts">
import CharacterSelection from "./components/CharacterSelection.vue";
import CharacterStatOverview from "./components/CharacterStatOverview.vue";
import {useCharacterStore} from "./CharacterStore";
import {computed} from "vue";
import {Element} from "../types/element";

const element = computed(() => useCharacterStore().selectedCharacter.element);
const color = computed(() => {
  switch (element.value) {
    case Element.ANEMO:
      return "#75c3a9"
    case Element.GEO:
      return "#fab72e"
    case Element.PYRO:
      return "#ef7a35"
    case Element.HYDRO:
      return "#4bc3f1"
    case Element.ELECTRO:
      return "#b18fc2"
    case Element.CRYO:
      return "#a0d7e4"
    case Element.DENDRO:
      return "#a6c938"
    default:
      return "#FFF"
  }
});

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
