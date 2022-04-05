<template>
  <div class="artifact-container">
    <div class="artifact-selection artifact-options">
      <div>{{ type }}</div>
      <star-selection v-model="artifact.stars" />
    </div>
    <div class="artifact-options">
      <div class="inset">Level: {{ artLevel }}</div>
      <input
        v-model="levelModel"
        type="range"
        min="1"
        :max="maxLevel"
        @input="setLevel"
      />
    </div>
    <div class="artifact-options">
      <select
        v-model="artifact.mainStat"
        class="inset"
        :disabled="props.availableMainStats.length <= 1"
      >
        <option
          v-for="stat in props.availableMainStats"
          :key="stat"
          :value="stat"
          :selected="artMainStat === stat"
        >
          {{ toString(stat) }}
        </option>
      </select>
      <stat-value v-model="mainStatValue" :is-perc="isPerc" />
    </div>
    <div class="artifact-options">
      <ArtifactSubstats
        v-model="artifact.subStats"
        class="inset"
        :level="artLevel"
        :stars="artStars"
        :available-sub-stats="
          availableSubStats.filter((value) => value !== artMainStat)
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArtifactType } from "../../types/artifactType";
import { isPercentage, Stats, toString } from "../../types/stats";
import { computed, ref, watch } from "vue";
import { Artifact, mainStatScalings } from "../../types/artifact";
import { Stars } from "../../types/stars";
import ArtifactSubstats from "./ArtifactSubstats.vue";
import StarSelection from "./StarSelection.vue";
import StatValue from "./StatValue.vue";

const props = defineProps<{
  type: ArtifactType;
  availableMainStats: Stats[];
  availableSubStats: Stats[];
}>();

const emits = defineEmits<{ (e: "artifact", artifact: Artifact): void }>();

const levelModel = ref("0");

function setLevel() {
  artifact.value.level = Number.parseInt(levelModel.value, 10);
}

const artifact = ref<Artifact>({
  type: props.type,
  level: 1,
  stars: Stars.S5,
  mainStat: props.availableMainStats[0],
  subStats: [],
});

watch(artifact.value, () => emits("artifact", artifact.value));

const artLevel = computed(() => artifact.value.level);

const artStars = computed<Stars>(() => artifact.value.stars);

const artMainStat = computed(() => artifact.value.mainStat);

const maxLevel = computed(() => {
  switch (artStars.value) {
    case Stars.S1:
      return 4;
    case Stars.S2:
      return 8;
    case Stars.S3:
      return 12;
    case Stars.S4:
      return 16;
    case Stars.S5:
      return 20;
    default:
      return 4;
  }
});

watch(maxLevel, () => {
  if (maxLevel.value < Number.parseInt(levelModel.value, 10)) {
    levelModel.value = `${maxLevel.value}`;
    artifact.value.level = maxLevel.value;
  }
});

const isPerc = computed(() => isPercentage(artMainStat.value));

const mainStatValue = computed(
  () =>
    mainStatScalings[artStars.value]?.[artMainStat.value]?.(artLevel.value) ?? 0
);
</script>

<style scoped>
.artifact-container {
  display: flex;
  flex-flow: column nowrap;
}

.artifact-selection {
  display: flex;
  justify-content: space-between;
}

.artifact-selection * {
  font-size: xx-large;
  border: none;
  background-color: unset;
  margin: 0.25em;
  font-family: sans-serif;
}

.artifact-selection > select > option {
  font-size: medium;
}

.artifact-options {
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.artifact-options .inset {
  margin-left: 0.25em;
}
</style>
