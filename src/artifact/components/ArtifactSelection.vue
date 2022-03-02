<template>
  <div class="artifact-selection">
    <div>{{ type }}</div>
    <select v-model="artifactStore[type].stars">
      <option :value="Stars.S5">5 Star</option>
      <option :value="Stars.S4">4 Star</option>
      <option :value="Stars.S3">3 Star</option>
    </select>
  </div>
  <table>
    <thead>
    <tr>
      <th>Level: {{ level }}</th>
      <th><input type="range" v-model="artifactStore[type].level" min="1" :max="maxLevel"></th>
    </tr>
    </thead>

    <thead>
    <tr>
      <th>
        <select :disabled="availableMainStats.length <= 1" v-model="artifactStore[type].mainStat">
          <option v-for="stat in availableMainStats" :value="stat" :selected="mainStat === stat">
            {{ toString(stat) }}
          </option>
        </select>
      </th>
      <th>{{ isPerc ? (mainStatValue * 100).toFixed(2) : mainStatValue.toFixed(0) }}{{ isPerc ? "%" : "" }}</th>
    </tr>
    </thead>
  </table>

  <div class="substat-container">
    <SubStatRow :type="type" :index="0" :availableSubStats="availableSubStats"/>
    <SubStatRow :type="type" :index="1" :availableSubStats="availableSubStats"/>
    <SubStatRow :type="type" :index="2" :availableSubStats="availableSubStats"/>
    <SubStatRow :type="type" :index="3" :availableSubStats="availableSubStats"/>
  </div>
</template>

<script setup lang="ts">
import {ArtifactType} from "../../types/artifactType";
import {isPercentage, Stats, toString} from "../../types/stats";
import {computed, defineEmits} from "vue";
import {Artifact, mainStatScalings} from "../../types/artifact";
import {Stars} from "../../types/stars";
import SubStatRow from "./SubStatRow.vue";
import {useArtifactStore} from "../ArtifactStore";
import add from "../../util/add";


const {type, availableMainStats, availableSubStats} = defineProps<{
  type: ArtifactType,
  availableMainStats: Stats[],
  availableSubStats: Stats[]
}>();

defineEmits<{ artifact: Artifact }>();

const artifactStore = useArtifactStore();

const level = computed(() => useArtifactStore()[type].level);

const stars = computed(() => useArtifactStore()[type].stars);

const mainStat = computed(() => useArtifactStore()[type].mainStat);

const maxLevel = computed(() => {
  switch (stars.value) {
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
  }
});

const isPerc = computed(() => isPercentage(mainStat.value));

const mainStatValue = computed(() => mainStatScalings[stars.value][mainStat.value](level.value));
const totalRolls = computed(() => useArtifactStore()[type].subStats.map(s => (s.rolls ?? []).length).reduce(add, 0));

</script>

<style scoped>

.artifact-selection {
  width: 100%;
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
  width: 3.5em
}

.artifact-selection > select > option {
  font-size: medium;
}

table {
  width: 100%;
}

tr td, tr th {
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
</style>
