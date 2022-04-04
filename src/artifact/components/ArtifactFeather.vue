<template>
  <ArtifactContainer
    :type="ArtifactType.FEATHER"
    :available-main-stats="mainstats"
    :available-sub-stats="substats"
    @artifact="updateArtifact"
  />
</template>

<script setup lang="ts">
import { ArtifactType } from "../../types/artifactType";
import { Stats } from "../../types/stats";
import { Artifact } from "../../types/artifact";
import ArtifactContainer from "./ArtifactContainer.vue";
import { useArtifactStore } from "../ArtifactStore";

const artifactStore = useArtifactStore();

function updateArtifact(artifact: Artifact) {
  artifactStore[ArtifactType.FLOWER] = artifact;
}

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

const mainstats = [Stats.ATTACK_FLAT];
</script>
