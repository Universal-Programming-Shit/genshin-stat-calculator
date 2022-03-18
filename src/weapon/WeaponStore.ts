import { defineStore } from "pinia";
import { useCharacterStore } from "../character/CharacterStore";
import data from "./data";
import { WeaponType } from "../types/weaponType";
import getElem from "../util/getElem";
import { Weapon, WeaponStats } from "../types/weapon";
import { useStorage } from "@vueuse/core";
import { LevelUpStat } from "../types/levelUpStat";

export const useWeaponStore = defineStore("weapon", {
  state: () =>
    useStorage("weapon", {
      selectedWeaponIndex: 0,
      selectedStatIndex: 0,
    }),
  getters: {
    availableWeapons(): Weapon[] {
      return data[useCharacterStore().selectedCharacter.weapon] ?? [];
    },
    selectedWeapon(): Weapon {
      return (
        getElem(this.availableWeapons, this.selectedWeaponIndex) ?? {
          name: "UNKNOWN",
          subStat: LevelUpStat.DEFENSE,
          type: WeaponType.SWORD,
          stats: [],
        }
      );
    },
    selectedStats(): WeaponStats {
      return (
        getElem(this.selectedWeapon.stats, this.selectedStatIndex) ?? {
          flatAttack: 0,
          subStatValue: 0,
          level: 0,
        }
      );
    },
  },
});
