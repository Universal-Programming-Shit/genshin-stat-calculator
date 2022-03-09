<script setup lang="ts">
import {computed} from "vue";
import {useWeaponStore} from "../WeaponStore";

const weaponStore = useWeaponStore();

const weapons = computed(() => useWeaponStore().availableWeapons);
const weaponStats = computed(() => useWeaponStore().selectedWeapon.stats);
</script>

<template>
  <div class="weapon-selection">
    <select v-model="weaponStore.selectedWeaponIndex">
      <option
        v-for="(weapon, i) in weapons"
        :key="i"
        :value="i"
        :selected="weaponStore.selectedWeaponIndex === i"
      >
        {{ weapon.name }}
      </option>
    </select>

    <select v-model="weaponStore.selectedStatIndex">
      <option
        v-for="(stats, i) in weaponStats"
        :key="i"
        :value="i"
        :selected="weaponStore.selectedStatIndex === i"
      >
        {{ `${stats.level}/${stats.level === 1 ? 20 : stats.level}` }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.weapon-selection{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 0;
}

.weapon-selection select {
  font-size: xx-large;
  border: none;
  background-color: unset;
  padding: 4px;
}
.weapon-selection select:first-child{
  overflow: hidden;
  text-overflow: ellipsis;
}
.weapon-selection select:last-child{
  width: 3.5em
}


.weapon-selection > select > option {
  font-size: medium;
}
</style>
