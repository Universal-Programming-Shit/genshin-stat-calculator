<script setup lang="ts">
import {computed} from "vue";
import {useWeaponStore} from "../WeaponStore";
import {LevelUpStat} from "../../types/levelUpStat";

const type = computed(() => useWeaponStore().selectedWeapon.type);
const flatAttack = computed(() => useWeaponStore().selectedStats.flatAttack);
const subStat = computed<LevelUpStat>(() => useWeaponStore().selectedWeapon.subStat);
const subStatValue = computed(() => useWeaponStore().selectedStats.subStatValue);

const isPerc = computed(() => {
  return subStat.value !== LevelUpStat.ELEMENTAL_MASTERY;
});

</script>

<template>
  <table>
    <tbody>
      <tr>
        <td>Type</td>
        <td>{{ type }}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{{ flatAttack }}</td>
      </tr>
      <tr>
        <td>{{ subStat }}</td>
        <td>{{ isPerc ? (subStatValue * 100).toFixed(2) : subStatValue.toFixed(0) }}{{ isPerc ? "%" : "" }}</td>
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
