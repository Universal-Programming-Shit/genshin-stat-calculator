<template>
  <ArtifactSelection
      :type="ArtifactType.SANDS"
      :available-main-stats="mainstats"
      :available-sub-stats="substats"
  />
</template>

<script setup lang="ts">
import ArtifactSelection from "./ArtifactSelection.vue";
import {ArtifactType} from "../../types/artifactType";
import {Stats} from "../../types/stats";
import {ref} from "vue";

const mainstats = ref([
    Stats.HP_PERC,
    Stats.ATTACK_PERC,
    Stats.DEF_PERC,
    Stats.ENERGY_RECHARGE,
    Stats.ELEMENTAL_MASTERY
])

const substats = [
    Stats.ENERGY_RECHARGE,
    Stats.HP_PERC,
    Stats.ATTACK_FLAT,
    Stats.ATTACK_PERC,
    Stats.DEF_FLAT,
    Stats.DEF_PERC,
    Stats.ELEMENTAL_MASTERY,
    Stats.CRIT_DAMAGE,
    Stats.CRIT_RATE,
];
</script>

<style scoped>

</style>
