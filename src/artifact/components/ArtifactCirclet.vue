<template>
  <ArtifactContainer
    :type="ArtifactType.CIRCLET"
    :available-main-stats="mainstats"
    :available-sub-stats="substats"
    @artifact="updateArtifact"
  />
</template>

<script setup lang="ts">
import { ArtifactType } from "../../types/artifactType";
import { Stats } from "../../types/stats";
import { ref } from "vue";
import { Artifact } from "../../types/artifact";
import ArtifactContainer from "./ArtifactContainer.vue";
import { useArtifactStore } from "../ArtifactStore";

const artifactStore = useArtifactStore();

function updateArtifact(artifact: Artifact) {
  artifactStore[ArtifactType.SANDS] = artifact;
}

const mainstats = ref([
  Stats.CRIT_DAMAGE,
  Stats.CRIT_RATE,
  Stats.HEALING_BONUS,
  Stats.HP_PERC,
  Stats.ATTACK_PERC,
  Stats.DEF_PERC,
  Stats.ELEMENTAL_MASTERY,
]);

const substats = [
  Stats.ENERGY_RECHARGE,
  Stats.HP_PERC,
  Stats.HP_FLAT,
  Stats.ATTACK_FLAT,
  Stats.ATTACK_PERC,
  Stats.DEF_FLAT,
  Stats.DEF_PERC,
  Stats.ELEMENTAL_MASTERY,
  Stats.CRIT_DAMAGE,
  Stats.CRIT_RATE,
];
</script>
