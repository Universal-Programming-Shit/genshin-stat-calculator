<template>
  <div>
    <label>
      More rolls
      <input v-model="moreRolls" type="checkbox" :disabled="stars === 1" />
    </label>
  </div>
  <div class="substat-container">
    <SubStatRow
      v-model="firstSubstat"
      :stars="stars"
      :base-rolls="firstRequiredRolls"
      :available-rolls="firstAvailableRolls"
      :available-sub-stats="firstAvailableSubstats"
    />
    <SubStatRow
      v-model="secondSubstat"
      :stars="stars"
      :base-rolls="secondRequiredRolls"
      :available-rolls="secondAvailableRolls"
      :available-sub-stats="secondAvailableSubstats"
    />
    <SubStatRow
      v-model="thirdSubstat"
      :stars="stars"
      :base-rolls="thirdRequiredRolls"
      :available-rolls="thirdAvailableRolls"
      :available-sub-stats="thirdAvailableSubstats"
    />
    <SubStatRow
      v-model="forthSubstat"
      :stars="stars"
      :base-rolls="forthRequiredRolls"
      :available-rolls="forthAvailableRolls"
      :available-sub-stats="forthAvailableSubstats"
    />
  </div>
</template>

<script setup lang="ts">
import SubStatRow from "./SubStatRow.vue";
import { computed, defineProps, ref } from "vue";
import { ArtifactSubStat } from "../../types/artifact";
import { Stats } from "../../types/stats";
import { Stars } from "../../types/stars";
import add from "../../util/add";

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
    Math.floor(props.level / 4)
);

function usedRolls(stat: ArtifactSubStat) {
  return stat.rolls.reduce(add, 0);
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

const firstRequiredRolls = computed<number>(() =>
  props.stars >= 3 ||
  (props.stars === 2 && moreRolls.value) ||
  availableRolls.value > 0
    ? 1
    : 0
);
const secondRequiredRolls = computed<number>(() =>
  props.stars >= 4 ||
  (props.stars === 3 && moreRolls.value) ||
  availableRolls.value - firstRequiredRolls.value > 0
    ? 1
    : 0
);
const thirdRequiredRolls = computed<number>(() =>
  props.stars >= 5 ||
  (props.stars === 4 && moreRolls.value) ||
  availableRolls.value - firstRequiredRolls.value - secondRequiredRolls.value >
    0
    ? 1
    : 0
);
const forthRequiredRolls = computed<number>(() =>
  (props.stars === 5 && moreRolls.value) ||
  availableRolls.value -
    firstRequiredRolls.value -
    secondRequiredRolls.value -
    thirdRequiredRolls.value >
    0
    ? 1
    : 0
);

const firstAvailableRolls = computed(() =>
  Math.max(
    availableRolls.value -
      usedRolls(secondSubstat.value) -
      usedRolls(thirdSubstat.value) -
      usedRolls(forthSubstat.value) -
      firstRequiredRolls.value -
      secondRequiredRolls.value -
      thirdRequiredRolls.value -
      forthRequiredRolls.value,
    0
  )
);
const secondAvailableRolls = computed(() =>
  Math.max(
    availableRolls.value -
      usedRolls(firstSubstat.value) -
      usedRolls(thirdSubstat.value) -
      usedRolls(forthSubstat.value) -
      firstRequiredRolls.value -
      secondRequiredRolls.value -
      thirdRequiredRolls.value -
      forthRequiredRolls.value,
    0
  )
);
const thirdAvailableRolls = computed(() =>
  Math.max(
    availableRolls.value -
      usedRolls(firstSubstat.value) -
      usedRolls(secondSubstat.value) -
      usedRolls(forthSubstat.value) -
      firstRequiredRolls.value -
      secondRequiredRolls.value -
      thirdRequiredRolls.value -
      forthRequiredRolls.value,
    0
  )
);
const forthAvailableRolls = computed(() =>
  Math.max(
    availableRolls.value -
      usedRolls(firstSubstat.value) -
      usedRolls(secondSubstat.value) -
      usedRolls(thirdSubstat.value) -
      firstRequiredRolls.value -
      secondRequiredRolls.value -
      thirdRequiredRolls.value -
      forthRequiredRolls.value,
    0
  )
);

const firstAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
    (stat) =>
      stat !== secondSubstat.value.type &&
      stat !== thirdSubstat.value.type &&
      stat !== forthSubstat.value.type
  );
});
const secondAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
    (stat) =>
      stat !== firstSubstat.value.type &&
      stat !== thirdSubstat.value.type &&
      stat !== forthSubstat.value.type
  );
});
const thirdAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
    (stat) =>
      stat !== secondSubstat.value.type &&
      stat !== firstSubstat.value.type &&
      stat !== forthSubstat.value.type
  );
});
const forthAvailableSubstats = computed(() => {
  return props.availableSubStats.filter(
    (stat) =>
      stat !== secondSubstat.value.type &&
      stat !== thirdSubstat.value.type &&
      stat !== firstSubstat.value.type
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

.substat-container {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 4px;
}

.substat-container * {
  margin: 4px;
}
</style>
