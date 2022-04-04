<template>
  <select
      v-model="selectedIndex"
      class="sub-stat-value-selection"
      @input="changeRolls(availableRollsList[$event.target.value])"
  >
    <option
        v-for="(roll, i) in availableRollsList"
        :key="i"
        :value="i"
        :selected="selectedIndex === i"
    >
      {{
        isPercentage
      ? (rollsValue(roll) * 100).toFixed(2)
      : rollsValue(roll).toFixed(0)
      }}{{ isPercentage ? "%" : "" }}
    </option>
  </select>
</template>
<script setup lang="ts">

import {computed, ref, watch} from "vue";
import add from "../../util/add";
import getElem from "../../util/getElem";

const props = defineProps<{
  modelValue: number[],
  rollAmount: number,
  isPercentage: boolean,
  rollValue: number
}>();

const emits = defineEmits<{ (e: "update:modelValue", value: number[]): void }>();

const changeRolls = (rolls: number[])=> emits("update:modelValue", rolls)

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

const availableRollsList = computed<number[][]>(() => getElem(possibleRolls, props.rollAmount));
const selectedIndex = ref<number>(props.modelValue ? availableRollsList.value.indexOf(props.modelValue) : 0);

const rollsValue = (rolls: number[]) => {
  return rolls.map((n) => n * props.rollValue).reduce(add, 0);
};

watch(props, ()=>{
  if (props.modelValue === undefined){
    selectedIndex.value = 0;
    changeRolls(availableRollsList.value[0]);
  } else if (props.rollAmount !== props.modelValue.length || props.rollAmount !== props.modelValue.filter(value => value).length){
    const previousRolls = getElem(possibleRolls, props.modelValue.length);
    const previousPosition =  selectedIndex.value / (previousRolls.length-1);
    const newRolls = getElem(possibleRolls, props.rollAmount);
    const newPosition = Math.round(previousPosition * (newRolls.length-1));
    const newRoll = getElem(newRolls, newPosition);
    selectedIndex.value = newPosition;
    changeRolls(newRoll);
  }
}, {immediate: true})
</script>

<style scoped>
.sub-stat-value-selection {
  min-width: 0;
}
</style>
