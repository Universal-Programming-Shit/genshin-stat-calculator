import { defineStore } from "pinia";
import data from "./data";
import getElem from "../util/getElem";
import { CharacterStats } from "../types/characterStats";
import { Character } from "../types/character";
import { useStorage } from "@vueuse/core";

export const useCharacterStore = defineStore("character", {
  state: () =>
    useStorage("character", {
      selectedCharacterIndex: 0,
      selectedStatsIndex: 0,
    }),
  getters: {
    name(): string {
      return this.selectedCharacter.name;
    },
    selectedCharacter: (state): Character =>
      getElem(data, state.selectedCharacterIndex) ?? {
        name: "",
        stats: [],
      },
    selectedStats(): CharacterStats {
      return (
        getElem(this.selectedCharacter.stats, this.selectedStatsIndex) ?? {
          baseDef: 0,
          ascentionStatValue: 0,
          baseAtk: 0,
          baseHp: 0,
          ascensions: 0,
          level: 0,
        }
      );
    },
  },
});
