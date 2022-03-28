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
      style="min-width: 0"
      v-model="rolls"
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
import {isPercentage, Stats, toString} from "../../types/stats";
import {computed, defineEmits, defineProps, ref, watch} from "vue";
import {ArtifactSubStat, subStatScalings} from "../../types/artifact";
import add from "../../util/add";
import {Stars} from "../../types/stars";
import getElem from "../../util/getElem";

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
  return getElem(possibleRolls, props.baseRolls + rollAmount.value);
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

watch(()=>props.baseRolls, () => {
  if (props.baseRolls){
    type.value = props.availableSubStats[0];
  }else{
    type.value = Stats.NONE;
  }
}, {immediate: true});

const possibleRolls = [
  [[0]],
  [[0.7], [0.8], [0.9], [1]],
  [
    [0.7, 0.7],
    [0.7, 0.8],
    [0.7, 0.9],
    [0.7, 1],
    [0.8, 1],
    [0.9, 1],
    [1, 1],
  ],
  [
    [0.7, 0.7, 0.7],
    [0.7, 0.7, 0.8],
    [0.7, 0.7, 0.9],
    [0.7, 0.7, 1],
    [0.7, 0.8, 1],
    [0.7, 0.9, 1],
    [0.7, 1, 1],
    [0.8, 1, 1],
    [0.9, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.7, 0.7, 0.7, 0.7],
    [0.7, 0.7, 0.7, 0.8],
    [0.7, 0.7, 0.7, 0.9],
    [0.7, 0.7, 0.7, 1],
    [0.7, 0.7, 0.8, 1],
    [0.7, 0.7, 0.9, 1],
    [0.7, 0.7, 1, 1],
    [0.7, 0.8, 1, 1],
    [0.7, 0.9, 1, 1],
    [0.7, 1, 1, 1],
    [0.8, 1, 1, 1],
    [0.9, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  [
    [0.7, 0.7, 0.7, 0.7, 0.7],
    [0.7, 0.7, 0.7, 0.7, 0.8],
    [0.7, 0.7, 0.7, 0.7, 0.9],
    [0.7, 0.7, 0.7, 0.7, 1],
    [0.7, 0.7, 0.7, 0.8, 1],
    [0.7, 0.7, 0.7, 0.9, 1],
    [0.7, 0.7, 0.7, 1, 1],
    [0.7, 0.7, 0.8, 1, 1],
    [0.7, 0.7, 0.9, 1, 1],
    [0.7, 0.7, 1, 1, 1],
    [0.7, 0.8, 1, 1, 1],
    [0.7, 0.9, 1, 1, 1],
    [0.7, 1, 1, 1, 1],
    [0.8, 1, 1, 1, 1],
    [0.9, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ],
  [
    [0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
    [0.7, 0.7, 0.7, 0.7, 0.7, 0.8],
    [0.7, 0.7, 0.7, 0.7, 0.7, 0.9],
    [0.7, 0.7, 0.7, 0.7, 0.7, 1],
    [0.7, 0.7, 0.7, 0.7, 0.8, 1],
    [0.7, 0.7, 0.7, 0.7, 0.9, 1],
    [0.7, 0.7, 0.7, 0.7, 1, 1],
    [0.7, 0.7, 0.7, 0.8, 1, 1],
    [0.7, 0.7, 0.7, 0.9, 1, 1],
    [0.7, 0.7, 0.7, 1, 1, 1],
    [0.7, 0.7, 0.8, 1, 1, 1],
    [0.7, 0.7, 0.9, 1, 1, 1],
    [0.7, 0.7, 1, 1, 1, 1],
    [0.7, 0.8, 1, 1, 1, 1],
    [0.7, 0.9, 1, 1, 1, 1],
    [0.7, 1, 1, 1, 1, 1],
    [0.8, 1, 1, 1, 1, 1],
    [0.9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ],
];


watch(type, () => {
  type.value = substats.value.includes(type.value)
    ? type.value
    : substats.value[0];
});

watch(()=>props.availableSubStats, ()=>{
  if (!props.availableSubStats.includes(type.value)){
    type.value = props.availableSubStats[0];
  }
});


watch([type, selectedRolls], ()=> emits("update:modelValue", {type: type.value, rolls: availableRollsList.value[selectedRolls.value]}))
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: darkorange;
}

.row * {
  background-color: transparent;
}
</style>
