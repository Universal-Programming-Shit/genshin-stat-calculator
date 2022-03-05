<template>
  <ArtifactSelection
    :type="ArtifactType.FEATHER"
    :available-main-stats="[Stats.ATTACK_FLAT]"
    :available-sub-stats="substats"
  />
</template>

<script setup lang="ts">
import ArtifactSelection from "./ArtifactSelection.vue";
import {ArtifactType} from "../../types/artifactType";
import {Stats} from "../../types/stats";

const substats = [
    Stats.ENERGY_RECHARGE,
    Stats.HP_PERC,
    Stats.HP_FLAT,
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
