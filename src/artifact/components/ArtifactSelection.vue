<template>
  <div class="artifact-selection">
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
      <input v-model="artifact.level" type="range" min="1" :max="maxLevel" />
    </div>
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

  <div class="substat-container">
    <SubStatRow
      v-model="firstSubstat"
      :stars="artStars"
      :base-rolls="artStars >= 3 || (artStars === 2 && moreRolls)"
      :available-rolls="availableRolls"
      :available-sub-stats="props.availableSubStats"
    />
    <SubStatRow
      v-model="secondSubstat"
      :stars="artStars"
      :base-rolls="artStars >= 4 || (artStars === 3 && moreRolls)"
      :available-rolls="availableRolls"
      :available-sub-stats="props.availableSubStats"
    />
    <SubStatRow
      v-model="thirdSubstat"
      :stars="artStars"
      :base-rolls="artStars === 5 || (artStars === 4 && moreRolls)"
      :available-rolls="availableRolls"
      :available-sub-stats="props.availableSubStats"
    />
    <SubStatRow
      v-model="forthSubstat"
      :stars="artStars"
      :base-rolls="artStars === 5 && moreRolls"
      :available-rolls="availableRolls"
      :available-sub-stats="props.availableSubStats"
    />
  </div>
</template>

<script setup lang="ts">
import { ArtifactType } from "../../types/artifactType";
import { isPercentage, Stats, toString } from "../../types/stats";
import { computed, ref, watch } from "vue";
import {
  Artifact,
  ArtifactSubStat,
  mainStatScalings,
} from "../../types/artifact";
import { Stars } from "../../types/stars";
import SubStatRow from "./SubStatRow.vue";

const props = defineProps<{
  type: ArtifactType;
  availableMainStats: Stats[];
  availableSubStats: Stats[];
}>();

const emits = defineEmits<{ (e: "artifact", artifact: Artifact): void }>();

const moreRolls = ref(false);

const artifact = ref<Artifact>({
  type: props.type,
  level: 1,
  stars: Stars.S1,
  mainStat: props.availableMainStats[0],
  subStats: [],
});

const firstSubstat = ref<ArtifactSubStat>({
  type: undefined as unknown as Stats,
  rolls: [],
});

const secondSubstat = ref<ArtifactSubStat>({
  type: undefined as unknown as Stats,
  rolls: [],
});

const thirdSubstat = ref<ArtifactSubStat>({
  type: undefined as unknown as Stats,
  rolls: [],
});

const forthSubstat = ref<ArtifactSubStat>({
  type: undefined as unknown as Stats,
  rolls: [],
});

const availableRolls = ref(4);

watch(artifact.value, () => emits("artifact", artifact.value), {
  flush: "sync",
});

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
.artifact-selection {
  width: 500px;
  display: flex;
  justify-content: space-between;
  border: black solid 1px;

  margin-bottom: 0;
  padding-bottom: 0;
}

.artifact-selection * {
  font-size: xx-large;
  /*border: none;*/
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

table {
  width: 100%;
}

tr td,
tr th {
  outline: black 1px solid;
  padding: 10px;
}

tr td:last-child {
  width: 3em;
}

.substat-container {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 4px;
}

.substat-container * {
  margin: 4px;
}

.artifact-options {
  margin: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
