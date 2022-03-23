<template>
  <div class="row">
    <select v-model="type" class="select">
      <option
        v-for="availableStat in substats"
        :key="availableStat"
        :value="availableStat"
        :selected="type === availableStat"
        :hidden="type === availableStat"
      >
        {{ toString(availableStat) }}
      </option>
    </select>
    <select
      :disabled="type === undefined"
      :value="selectedRolls"
      style="min-width: 0"
      @update:modelValue="rolls = $event"
    >
      <option
        v-for="(roll, i) in availableRollsList"
        :key="JSON.stringify(roll)"
        :value="i"
        :selected="selectedRolls === i"
      >
        {{
          isPerc
            ? (rollsValue(roll) * 100).toFixed(2)
            : rollsValue(roll).toFixed(0)
        }}{{ isPerc ? "%" : "" }}
      </option>
    </select>
    <input
      v-model="rollAmountInput"
      :disabled="!availableRolls"
      type="range"
      :step="1"
      :min="0"
      :max="props.availableRolls"
    />
  </div>
</template>

<script setup lang="ts">
import { isPercentage, Stats, toString } from "../../types/stats";
import { computed, defineEmits, defineProps, ref, watchEffect } from "vue";
import { ArtifactSubStat, subStatScalings } from "../../types/artifact";
import add from "../../util/add";
import { Stars } from "../../types/stars";

const props = defineProps<{
  modelValue: ArtifactSubStat;
  stars: Stars;
  availableSubStats: Stats[];
  availableRolls: number;
  baseRolls: number;
}>();

const emits =
  defineEmits<{ (e: "update:modelValue", subStat: ArtifactSubStat): void }>();

const substats = computed<Stats[]>(() => [
  ...(props.baseRolls === 0 ? [Stats.NONE] : props.availableSubStats),
]);

const type = ref<Stats>(props.modelValue.type);
const rollAmountInput = ref<string>(`${props.modelValue.rolls?.length}` ?? "0");
const rollAmount = computed(() => Number.parseInt(rollAmountInput.value, 10));
const rolls = ref<number>(0);
const selectedRolls = computed<number>(() => {
  return rolls.value >= availableRollsList.value.length
    ? availableRollsList.value.length - 1
    : rolls.value;
});

const availableRollsList = computed<number[][]>(() => {
  return removeDuplicates(
    possibleValues(rollAmount.value + props.baseRolls).sort()
  ).sort((a, b) => a.reduce(add, 0) - b.reduce(add, 0));
});

const isPerc = computed(() => (type.value ? isPercentage(type.value) : false));

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

/**
 * TODO
 * improve performance.
 * only call watcher when necessary
 */
watchEffect(() => {
  type.value = substats.value.includes(type.value)
    ? type.value
    : substats.value[0];
  emits("update:modelValue", {
    type: type.value,
    rolls: availableRollsList.value[selectedRolls.value],
  });
});
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
  background-color: darkorange;
}

.row * {
  background-color: transparent;
}
</style>
