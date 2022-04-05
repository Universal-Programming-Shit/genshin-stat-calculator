<template>
  <select
    :value="modelValue"
    class="star-selection"
    @change="handleChangeEvent"
  >
    <option :value="Stars.S5">5 Star</option>
    <option :value="Stars.S4">4 Star</option>
    <option :value="Stars.S3">3 Star</option>
    <option :value="Stars.S2">2 Star</option>
    <option :value="Stars.S1">1 Star</option>
  </select>
</template>

<script setup lang="ts">
import { Stars } from "../../types/stars";

defineProps<{ modelValue: Stars }>();

const emits = defineEmits<{ (e: "update:modelValue", value: Stars): void }>();

function handleChangeEvent(ev: Event) {
  const value = (ev.target as { value: Stars } | null)?.value;
  if (value) emits("update:modelValue", value);
}
</script>

<style scoped>
.star-selection > option {
  font-size: medium;
}
</style>
