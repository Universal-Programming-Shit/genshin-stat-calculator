<template>
  <div class="row">
    <select v-model="type" class="select">
      <option
        v-for="availableStat in props.availableSubStats"
        :key="availableStat"
        :value="availableStat"
        :selected="type === availableStat"
        :hidden="type === availableStat"
      >
        {{ toString(availableStat) }}
      </option>
    </select>

    <select v-model="rolls" style="min-width: 0" :disabled="type === undefined">
      <option
        v-for="roll in availableRolls"
        :key="JSON.stringify(roll)"
        :value="roll"
      >
        {{
          isPerc
            ? (rollsValue(roll) * 100).toFixed(2)
            : rollsValue(roll).toFixed(0)
        }}{{ isPerc ? "%" : "" }}
      </option>
    </select>
    <input
      v-model="rolls"
      type="range"
      min="1"
      max="6"
      :disabled="type === undefined"
    />
  </div>
</template>

<script setup lang="ts">
import { isPercentage, Stats, toString } from "../../types/stats";
import { computed, ref } from "vue";
import {
  Artifact,
  ArtifactSubStat,
  subStatScalings,
} from "../../types/artifact";
import { ArtifactType } from "../../types/artifactType";
import add from "../../util/add";
import { defineProps } from "vue";
import { Stars } from "../../types/stars";

const props = defineProps<{
  subStat: ArtifactSubStat;
  stars: Stars;
  availableSubStats: Stats[];
  availableRolls: number;
}>();

defineEmits<{ (e: "update", subStat: ArtifactSubStat): void }>();

const type = ref(props.subStat.type);
const rolls = ref(props.subStat.rolls?.length ?? 1);

const availableRolls = computed(() => {
  return removeDuplicates(possibleValues(rolls.value).sort()).sort(
    (a, b) => a.reduce(add, 0) - b.reduce(add, 0)
  );
});

const isPerc = computed(() => isPercentage(type.value));

const substatRolls = [0.7, 0.8, 0.9, 1.0];

function removeDuplicates(arr: number[][]) {
  return arr.filter((value: number[], index) => {
    return (
      index ===
      arr.findIndex((obj: number[]) => {
        return (
          Math.fround(obj.reduce(add, 0)) === Math.fround(value.reduce(add, 0))
        );
      })
    );
  });
}

function possibleValues(n: number): number[][] {
  if (n <= 0) {
    return [[0]];
  } else if (n === 1) {
    return substatRolls.map((value) => [value]);
  } else {
    const values = possibleValues(n - 1);
    return substatRolls.flatMap((value) =>
      values.map((value1) => [value, ...value1])
    );
  }
}

const rollsValue = (rolls: number[]) => {
  const statScaling = subStatScalings[props.stars]?.[type.value] ?? 0;
  return rolls.map((n) => n * statScaling).reduce(add, 0);
};
</script>

<style scoped>
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

.select {
  text-overflow: ellipsis;
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 100%;
  min-width: 0;
}
.row {
  display: inline-flex;
  flex-direction: column;
  grid-row: auto;
  flex-grow: 1;
}
</style>
