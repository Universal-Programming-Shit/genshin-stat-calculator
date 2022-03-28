<template>
  <div>

  <div class="artifact-container">
    <div class="artifact-selection artifact-options">
      <div>{{ type }}</div>
      <select v-model="artifact.stars">
        <option :value="Stars.S5">5 Star</option>
        <option :value="Stars.S4">4 Star</option>
        <option :value="Stars.S3">3 Star</option>
        <option :value="Stars.S2">2 Star</option>
        <option :value="Stars.S1">1 Star</option>
      </select>
    </div>
    <div class="artifact-options">
      <div>Level: {{ artLevel }}</div>
      <div>
        <input
          v-model="levelModel"
          type="range"
          min="1"
          :max="maxLevel"
          @input="setLevel"
        />
      </div>
    </div>
    <div class="artifact-options">
      <div>
        <select
          v-model="artifact.mainStat"
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
      </div>
      <div>
        {{ isPerc ? (mainStatValue * 100).toFixed(2) : mainStatValue.toFixed(0)
        }}{{ isPerc ? "%" : "" }}
      </div>
    </div>
    <ArtifactSubstats
        class="artifact-options"
      :level="artLevel"
      :stars="artStars"
      :available-sub-stats="
        props.availableSubStats.filter((value) => value !== artMainStat)
      "
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import { ArtifactType } from "../../types/artifactType";
import { isPercentage, Stats, toString } from "../../types/stats";
import { computed, defineEmits, defineProps, ref, watch } from "vue";
import { Artifact, mainStatScalings } from "../../types/artifact";
import { Stars } from "../../types/stars";
import ArtifactSubstats from "./ArtifactSubstats.vue";

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
  stars: Stars.S1,
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

const isPerc = computed(() => isPercentage(artMainStat.value));

const mainStatValue = computed(
  () =>
    mainStatScalings[artStars.value]?.[artMainStat.value]?.(artLevel.value) ?? 0
);
</script>

<style scoped>
.artifact-container {
  border: black solid 1px;
  display: flex;
  flex-flow: column nowrap;
}

.artifact-selection {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 0;
}

.artifact-selection * {
  font-size: xx-large;
  border: none;
  background-color: unset;
  padding: 4px;
  font-family: sans-serif;
}


.artifact-selection *:last-child {
  width: 3.5em;
}

.artifact-selection > select > option {
  font-size: medium;
}

.substat-container * {
  margin: 4px;
}

.artifact-options {
  margin: 4px;
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
