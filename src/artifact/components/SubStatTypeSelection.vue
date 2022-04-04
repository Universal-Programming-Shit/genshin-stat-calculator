<template>
  <select :value="modelValue" class="select" @change="changeType($event.target.value)">
    <option
        v-for="availableStat of substats"
        :key="availableStat"
        :value="availableStat"
        :selected="modelValue === availableStat"
        :hidden="modelValue === availableStat"
    >
      {{ toString(availableStat) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import {Stats, toString} from "../../types/stats";
import {watch} from "vue";

const props = defineProps<{
  modelValue: Stats,
  substats: Stats[]
}>();
const emits = defineEmits<{ (e: "update:modelValue", stat: Stats): void }>();

const changeType = (stat: Stats) => emits("update:modelValue", stat);

watch(props, () => {
  if (!props.modelValue || !props.substats.includes(props.modelValue)){
    changeType(props.substats[0] ?? Stats.NONE);
  }
})
</script>
