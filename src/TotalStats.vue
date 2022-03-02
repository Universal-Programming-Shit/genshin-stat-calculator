<script setup lang="ts">
import {useStatStore} from "./StatStore";
import {useCharacterStore} from "./character/CharacterStore";
const characterStore = useCharacterStore();
const statStore = useStatStore();
</script>

<template>
  <div class="container">
    <div>Stats</div>
    <table>
      <tr>
      <td>HP</td>
      <td>{{statStore.hp.toFixed(0)}}</td>
    </tr>
      <tr>
        <td>Attack</td>
        <td>{{statStore.attack.toFixed(0)}}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{{statStore.defense.toFixed(0)}}</td>
      </tr>
      <tr>
        <td>Crit Rate</td>
        <td>{{(statStore.critRate * 100).toFixed(2)}}%</td>
      </tr>
      <tr>
        <td>Crit Damage</td>
        <td>{{(statStore.critDamage * 100).toFixed(2)}}%</td>
      </tr>
      <tr>
        <td>Elemental Mastery</td>
        <td>{{statStore.elementalMastery.toFixed(0)}}</td>
      </tr>

      <tr>
        <td>Energy Recharge</td>
        <td>{{(statStore.energyRecharge * 100).toFixed(2)}}%</td>
      </tr>

      <tr>
        <td>{{characterStore.selectedCharacter.element}} Damage</td>
        <td>{{(statStore.elementalDamage * 100).toFixed(2)}}%</td>
      </tr>

    </table>
  </div>
</template>



<style scoped>
.container {
  box-shadow: #00000050 4px 4px;
  border: black 1px solid;
  background-color: mintcream;
  width: 100%;
}

.container * {
  box-shadow: inset 2px 2px rgba(0, 0, 5, 0.25);
  width: 100%;
}

.container div {
  font-size: xx-large;
  border: none;
  background-color: unset;
  padding: 4px;
  font-family: sans-serif;
}
tr td {
  outline: black 1px solid;
  padding: 10px;
}
</style>
