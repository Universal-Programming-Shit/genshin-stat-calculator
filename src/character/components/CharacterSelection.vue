<script setup lang="ts">
import {useCharacterStore} from "../CharacterStore";
import {computed, ref} from "vue";
import data from "../data";

const characters = ref(data);
const characterStore = useCharacterStore();

const characterStats = computed(() => useCharacterStore().selectedCharacter.stats);
</script>

<template>
  <div class="character-selection">
    <select v-model="characterStore.selectedCharacterIndex">
      <option
        v-for="(character, i) in characters"
        :key="i"
        :value="i"
      >
        {{ character.name }}
      </option>
    </select>
    <select v-model="characterStore.selectedStatsIndex">
      <option
        v-for="(stats, i) in characterStats"
        :key="i"
        :value="i"
        :selected="characterStore.selectedStatsIndex === i"
      >
        {{ `${stats.level}/${stats.ascensions === 0 ? 20 : stats.ascensions * 10 + 30}` }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.character-selection{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 0;
}

.character-selection select {
  font-size: xx-large;
  border: none;
  background-color: unset;
  padding: 4px;
}
.character-selection select:last-child{
  width: 3.5em
}
.character-selection > select > option {
  font-size: medium;
}
</style>
