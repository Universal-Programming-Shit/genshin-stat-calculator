<template>
  <input
    :value="props.modelValue"
    :disabled="maxRolls <= 0 && !modelValue"
    type="range"
    :step="1"
    :min="0"
    :max="maxRolls + modelValue"
    @input="changeRollsHandler"
  />
</template>
<script setup lang="ts">
import { watch } from "vue";

const props = defineProps<{
  modelValue: number;
  maxRolls: number;
}>();

const emits = defineEmits<{ (e: "update:modelValue", value: number): void }>();

function changeRollsHandler(ev: Event) {
  const value = (ev.target as { value: string } | null)?.value;
  if (value) changeRolls(Number.parseInt(value, 10));
}

const changeRolls = (rolls: number) =>
  emits("update:modelValue", Math.max(rolls, 0));

watch(
  props,
  () => {
    console.log("Rolls", props.maxRolls);
    if (!props.modelValue) {
      changeRolls(Math.min(props.maxRolls, props.modelValue));
    }
  },
  { immediate: true }
);
</script>
