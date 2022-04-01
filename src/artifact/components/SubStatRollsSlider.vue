<template>
  <input
      :value="props.modelValue"
      :disabled="!maxRolls"
      type="range"
      :step="1"
      :min="0"
      :max="maxRolls"
      @input="changeRolls(Number.parseInt($event.target.value, 10))"
  />
</template>
<script setup lang="ts">

import {watch} from "vue";

const props = defineProps<{
  modelValue: number,
  maxRolls: number
}>();

const emits = defineEmits<{ (e: "update:modelValue", value: number): void }>();

const changeRolls = (rolls: number)=> emits("update:modelValue", rolls)

watch(props, ()=>{
  if(!props.modelValue || props.maxRolls < props.modelValue){
    changeRolls(Math.min(props.maxRolls, props.modelValue));
  }
}, {immediate: true})

</script>
