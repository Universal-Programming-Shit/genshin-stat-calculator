<template>
  <ArtifactContainer
    :type="ArtifactType.GOBLET"
    :available-main-stats="mainstats"
    :available-sub-stats="substats"
    @artifact="updateArtifact"
  />
</template>

<script setup lang="ts">
import { ArtifactType } from "../types/artifactType";
import { Stats } from "../types/stats";
import { ref } from "vue";
import { useArtifactStore } from "./ArtifactStore";
import { Artifact } from "../types/artifact";
import ArtifactContainer from "./components/ArtifactContainer.vue";

const artifactStore = useArtifactStore();

function updateArtifact(artifact: Artifact) {
  artifactStore[ArtifactType.GOBLET] = artifact;
}

const mainstats = ref([
  Stats.HP_PERC,
  Stats.ATTACK_PERC,
  Stats.DEF_PERC,
  Stats.ELEMENTAL_MASTERY,
  Stats.PHYSICAL_DAMAGE,
  Stats.ELEMENTAL_DAMAGE,
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
