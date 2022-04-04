<template>
  <div>
    <div>
      <label>
        More rolls
        <input v-model="moreRolls" type="checkbox" :disabled="stars === 1"/>
      </label>
    </div>
    <div class="substat-container">
      <SubStatRow
          v-model="firstSubstat"
          :stars="stars"
          :base-rolls="firstRequiredRolls"
          :available-rolls="availableRollsMinusUsed"
          :available-sub-stats="firstAvailableSubstats"
      />
      <SubStatRow
          v-model="secondSubstat"
          :stars="stars"
          :base-rolls="secondRequiredRolls"
          :available-rolls="availableRollsMinusUsed"
          :available-sub-stats="secondAvailableSubstats"
      />
      <SubStatRow
          v-model="thirdSubstat"
          :stars="stars"
          :base-rolls="thirdRequiredRolls"
          :available-rolls="availableRollsMinusUsed"
          :available-sub-stats="thirdAvailableSubstats"
      />
      <SubStatRow
          v-model="forthSubstat"
          :stars="stars"
          :base-rolls="forthRequiredRolls"
          :available-rolls="availableRollsMinusUsed"
          :available-sub-stats="forthAvailableSubstats"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SubStatRow from "./SubStatRow.vue";
import {computed, defineProps, ref, watch} from "vue";
import {ArtifactSubStat} from "../../types/artifact";
import {Stats} from "../../types/stats";
import {Stars} from "../../types/stars";

const props = defineProps<{
  stars: Stars;
  level: number;
  availableSubStats: Stats[];
}>();

const moreRolls = ref(false);
const availableRolls = computed(
    () =>
        Math.max(props.stars - 2, 0) +
        (moreRolls.value ? 1 : 0) +
        Math.floor(props.level / 4),
);

function usedRolls(stat: ArtifactSubStat) {
  return stat.rolls.filter(value => value !== 0).length;
}

const firstSubstat = ref<ArtifactSubStat>({
  type: Stats.NONE,
  rolls: [],
});
const secondSubstat = ref<ArtifactSubStat>({
  type: Stats.NONE,
  rolls: [],
});
const thirdSubstat = ref<ArtifactSubStat>({
  type: Stats.NONE,
  rolls: [],
});
const forthSubstat = ref<ArtifactSubStat>({
  type: Stats.NONE,
  rolls: [],
});

watch([firstSubstat, secondSubstat, thirdSubstat, forthSubstat], () => {
  if (forthSubstat.value.type !== Stats.NONE && (
      forthSubstat.value.type === firstSubstat.value.type ||
      forthSubstat.value.type === secondSubstat.value.type ||
      forthSubstat.value.type === thirdSubstat.value.type
  )){
    forthSubstat.value.type = props.availableSubStats.filter(
        (stat) =>
            stat !== firstSubstat.value.type &&
            stat !== secondSubstat.value.type &&
            stat !== thirdSubstat.value.type,
    )[0];
  }
  if (thirdSubstat.value.type !== Stats.NONE && (
      thirdSubstat.value.type === firstSubstat.value.type ||
      thirdSubstat.value.type === secondSubstat.value.type
  )){
    thirdSubstat.value.type = props.availableSubStats.filter(
        (stat) =>
            stat !== firstSubstat.value.type &&
            stat !== secondSubstat.value.type &&
            stat !== forthSubstat.value.type,
    )[0];
  }
  if (secondSubstat.value.type !== Stats.NONE && (
      secondSubstat.value.type === firstSubstat.value.type
  )){
    secondSubstat.value.type = props.availableSubStats.filter(
        (stat) =>
            stat !== firstSubstat.value.type &&
            stat !== thirdSubstat.value.type &&
            stat !== forthSubstat.value.type,
    )[0];
  }
});

const firstRequiredRolls = computed<boolean>(() =>
    props.stars >= 3 ||
    (props.stars === 2 && moreRolls.value) ||
    availableRolls.value > 0
);
const secondRequiredRolls = computed<boolean>(() =>
    props.stars >= 4 ||
    (props.stars === 3 && moreRolls.value) ||
    (availableRolls.value - (firstRequiredRolls.value ? 1: 0) > 0)
);
const thirdRequiredRolls = computed<boolean>(() =>
    props.stars >= 5 ||
    (props.stars === 4 && moreRolls.value) ||
    availableRolls.value - (firstRequiredRolls.value ? 1: 0) - (secondRequiredRolls.value ? 1: 0) >
    0
);
const forthRequiredRolls = computed<boolean>(() =>
    (props.stars === 5 && moreRolls.value) ||
    availableRolls.value -
    (firstRequiredRolls.value ? 1: 0) -
    (secondRequiredRolls.value ? 1: 0) -
   ( thirdRequiredRolls.value ? 1: 0) >
    0
);

const availableRollsMinusUsed = computed(()=>  Math.max(
    availableRolls.value -
    usedRolls(firstSubstat.value) -
    usedRolls(secondSubstat.value) -
    usedRolls(thirdSubstat.value) -
    usedRolls(forthSubstat.value),
    0,
));

const firstAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
      (stat) =>
          stat !== secondSubstat.value.type &&
          stat !== thirdSubstat.value.type &&
          stat !== forthSubstat.value.type,
  );
});
const secondAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
      (stat) =>
          stat !== firstSubstat.value.type &&
          stat !== thirdSubstat.value.type &&
          stat !== forthSubstat.value.type,
  );
});
const thirdAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
      (stat) =>
          stat !== secondSubstat.value.type &&
          stat !== firstSubstat.value.type &&
          stat !== forthSubstat.value.type,
  );
});
const forthAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
      (stat) =>
          stat !== secondSubstat.value.type &&
          stat !== thirdSubstat.value.type &&
          stat !== firstSubstat.value.type,
  );
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

tr td,
tr th {
  outline: black 1px solid;
  padding: 10px;
}

tr td:last-child {
  width: 3em;
}

.substat-container {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 4px;
}

.substat-container * {
  margin: 4px;
}
</style>
