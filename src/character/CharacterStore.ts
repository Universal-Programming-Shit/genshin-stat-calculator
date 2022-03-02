import {defineStore} from "pinia";
import data from "./data";
import clamp from "../util/clamp";
import getElem from "../util/getElem";
import {CharacterStats} from "../types/characterStats";
import {Character} from "../types/character";
import { useStorage } from '@vueuse/core'

export const useCharacterStore = defineStore("character", {
  state: () => useStorage("character", {
    selectedCharacterIndex: 0,
    activeStatsIndex: 0,
  }),
  getters: {
    name: (): string => this.selectedCharacter.name,
    selectedCharacter: (state): Character => getElem(data, state.selectedCharacterIndex),
    selectedStats: (state): CharacterStats => getElem(state.selectedCharacter.stats, state.activeStatsIndex),
  },
  actions: {
    selectCharacter(i: number) {
      this.selectedCharacterIndex = clamp(i, 0, data.length-1);
      this.activeStatsIndex = clamp(this.activeStatsIndex, 0, this.selectedCharacter.stats.length-1);
    },
    selectStats(i: number) {
      this.activeStatsIndex = clamp(i, 0, this.selectedCharacter.stats.length-1);
    },
  },
});
