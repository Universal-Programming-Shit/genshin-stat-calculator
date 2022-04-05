<template>
  <div class="row">
    <SubStatTypeSelection v-model="type" :substats="substats" />
    <SubStatRollsSlider
      v-model="rollAmount"
      :max-rolls="baseRolls ? availableRolls : 0"
    />
    <SubStatValueSelection
      v-model="rolls"
      :is-percentage="isPercentage(type)"
      :roll-amount="baseRolls ? rollAmount + 1 : 0"
      :roll-value="rollValue"
    />
  </div>
</template>

<script setup lang="ts">
import { isPercentage, Stats } from "../../types/stats";
import { computed, ref, watch } from "vue";
import { ArtifactSubStat, subStatScalings } from "../../types/artifact";
import { Stars } from "../../types/stars";
import SubStatTypeSelection from "./SubStatTypeSelection.vue";
import SubStatRollsSlider from "./SubStatRollsSlider.vue";
import SubStatValueSelection from "./SubStatValueSelection.vue";

const props = defineProps<{
  modelValue: ArtifactSubStat;
  stars: Stars;
  availableSubStats: Stats[];
  availableRolls: number;
  baseRolls: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", subStat: ArtifactSubStat): void;
}>();

const substats = computed<Stats[]>(() => [
  ...(props.baseRolls ? props.availableSubStats : [Stats.NONE]),
]);

const type = ref<Stats>(props.modelValue.type);
const rollAmount = ref<number>(props.modelValue.rolls?.length ?? 0);
const rolls = ref<number[]>([0]);

const rollValue = computed<number>(
  () => subStatScalings[props.stars]?.[type.value] ?? 0
);

watch([type, rolls, rollAmount], () => {
  if (!props.baseRolls) {
    emits("update:modelValue", { type: Stats.NONE, rolls: [] });
    return;
  }

  emits("update:modelValue", { type: type.value, rolls: rolls.value });
});
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: darkorange;
  min-width: 0;
}

.row * {
  background-color: transparent;
}
</style>
