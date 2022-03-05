<script setup lang="ts">
import {useCharacterStore} from "../CharacterStore";
import {computed} from "vue";

const element = computed(() => useCharacterStore().selectedCharacter.element);
const baseHp = computed(() => useCharacterStore().selectedStats.baseHp);
const baseAtk = computed(() => useCharacterStore().selectedStats.baseAtk);
const baseDef = computed(() => useCharacterStore().selectedStats.baseDef);
const ascensionStat = computed(() => useCharacterStore().selectedCharacter.ascensionStat);
const ascentionStatValue = computed(() => useCharacterStore().selectedStats.ascentionStatValue);

</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>Element</td>
        <td>{{ element }}</td>
      </tr>
      <tr>
        <td>Base Hp</td>
        <td>{{ baseHp }}</td>
      </tr>
      <tr>
        <td>Base Atk</td>
        <td>{{ baseAtk }}</td>
      </tr>
      <tr>
        <td>Base Def</td>
        <td>{{ baseDef }}</td>
      </tr>
      <tr>
        <td>{{ ascensionStat }}</td>
        <td>{{ (ascentionStatValue * 100).toFixed(2) }}%</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
tr td {
  outline: black 1px solid;
  padding: 10px;
}
tr td:last-child {
  width: 3em;
}
</style>
