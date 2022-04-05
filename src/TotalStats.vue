<script setup lang="ts">
import { useStatStore } from "./StatStore";
import { useCharacterStore } from "./character/CharacterStore";
const characterStore = useCharacterStore();
const statStore = useStatStore();
</script>

<template>
  <div class="container">
    <div>Stats</div>
    <table>
      <tr>
        <td>HP</td>
        <td>{{ statStore.hp.toFixed(0) }}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{{ statStore.attack.toFixed(0) }}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{{ statStore.defense.toFixed(0) }}</td>
      </tr>
      <tr>
        <td>Crit Rate</td>
        <td>{{ (statStore.critRate * 100).toFixed(2) }}%</td>
      </tr>
      <tr>
        <td>Crit Damage</td>
        <td>{{ (statStore.critDamage * 100).toFixed(2) }}%</td>
      </tr>
      <tr>
        <td>Elemental Mastery</td>
        <td>{{ statStore.elementalMastery.toFixed(0) }}</td>
      </tr>

      <tr>
        <td>Energy Recharge</td>
        <td>{{ (statStore.energyRecharge * 100).toFixed(2) }}%</td>
      </tr>

      <tr>
        <td>{{ characterStore.selectedCharacter.element }} Damage</td>
        <td>{{ (statStore.elementalDamage * 100).toFixed(2) }}%</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.container {
  background-color: mintcream;
}

.container div {
  font-size: xx-large;
  border: none;
  background-color: unset;
  margin: 0.25em;
  font-family: sans-serif;
}
table {
  width: 100%;
}
tr td {
  padding: 0.5em;
  border: black 1px solid;
}
</style>
