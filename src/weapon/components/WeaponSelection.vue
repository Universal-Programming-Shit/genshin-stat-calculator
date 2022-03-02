<script setup lang="ts">
import {computed, ref} from "vue";
import {useWeaponStore} from "../WeaponStore";

const weaponStore = useWeaponStore();
const weapons = computed(() => useWeaponStore().availableWeapons);

const weaponStats = computed(() => useWeaponStore().selectedWeapon.stats);

const selectStats = (i: number) => weaponStore.selectStats(i);
const selectWeapon = (i: number) => weaponStore.selectWeapon(i);
</script>

<template>
  <div class="weapon-selection">
    <select>
      <option
          v-for="(weapon, i) in weapons"
          :value="weapon"
          @click="selectWeapon(i)"
          :selected="useWeaponStore().selectedWeaponIndex === i"
      >
        {{ weapon.name }}
      </option>
    </select>

    <select>
      <option
          v-for="(stats, i) in weaponStats"
          :value="stats"
          :selected="useWeaponStore().selectedStatIndex === i"
          @click="selectStats(i)"
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
