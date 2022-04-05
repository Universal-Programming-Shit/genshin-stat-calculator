<template>
  <div>
    {{ isPerc ? (modelValue * 100).toFixed(2) : modelValue.toFixed(0)
    }}{{ isPerc ? "%" : "" }}
  </div>
</template>
<script setup lang="ts">
defineProps<{ modelValue: number; isPerc: boolean }>();
</script>
<style scoped>
.artifact-selection * {
  font-size: xx-large;
  border: none;
  background-color: unset;
  padding: 4px;
  font-family: sans-serif;
}

.artifact-selection > select > option {
  font-size: medium;
}
</style>
