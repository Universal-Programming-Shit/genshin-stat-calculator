import { defineStore } from "pinia";
import { useCharacterStore } from "./character/CharacterStore";
import { useWeaponStore } from "./weapon/WeaponStore";
import { LevelUpStat } from "./types/levelUpStat";
import { useArtifactStore } from "./artifact/ArtifactStore";

export const useStatStore = defineStore("stat", {
  state: () => ({}),
  getters: {
    hp: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const base = characterStore.selectedStats.baseHp;

      const characterMult =
        characterStore.selectedCharacter.ascensionStat === LevelUpStat.HP
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponMult =
        weaponStore.selectedWeapon.subStat === LevelUpStat.HP
          ? weaponStore.selectedStats.subStatValue
          : 0;
      const artifactMult = artifactStore.hpPerc ?? 0;
      const totalMult = 1 + characterMult + weaponMult + artifactMult;

      const flat = artifactStore.hpFlat;

      return base * totalMult + flat;
    },
    attack: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const characterBase = characterStore.selectedStats.baseAtk;
      const weaponBase = weaponStore.selectedStats.flatAttack;
      const base = characterBase + weaponBase;

      const characterMult =
        characterStore.selectedCharacter.ascensionStat === LevelUpStat.ATTACK
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponMult =
        weaponStore.selectedWeapon.subStat === LevelUpStat.ATTACK
          ? weaponStore.selectedStats.subStatValue
          : 0;
      const totalMult = 1 + characterMult + weaponMult + artifactStore.atkPerc;

      const flat = artifactStore.atkFlat;

      return base * totalMult + flat;
    },
    defense: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const base = characterStore.selectedStats.baseDef;

      const characterMult =
        characterStore.selectedCharacter.ascensionStat === LevelUpStat.DEFENSE
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponMult =
        weaponStore.selectedWeapon.subStat === LevelUpStat.DEFENSE
          ? weaponStore.selectedStats.subStatValue
          : 0;
      const totalMult = 1 + characterMult + weaponMult + artifactStore.defPerc;

      const flat = artifactStore.defFlat;

      return base * totalMult + flat;
    },
    elementalMastery: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const characterFlat =
        characterStore.selectedCharacter.ascensionStat ===
        LevelUpStat.ELEMENTAL_MASTERY
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponFlat =
        weaponStore.selectedWeapon.subStat === LevelUpStat.ELEMENTAL_MASTERY
          ? weaponStore.selectedStats.subStatValue
          : 0;

      return characterFlat + weaponFlat + artifactStore.elementalMastery;
    },
    energyRecharge: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const characterMult =
        characterStore.selectedCharacter.ascensionStat ===
        LevelUpStat.ENERGY_RECHARGE
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponMult =
        weaponStore.selectedWeapon.subStat === LevelUpStat.ENERGY_RECHARGE
          ? weaponStore.selectedStats.subStatValue
          : 0;
      const totalMult =
        0.05 + characterMult + weaponMult + artifactStore.energyRecharge;

      return totalMult;
    },
    critRate: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const characterMult =
        characterStore.selectedCharacter.ascensionStat === LevelUpStat.CRIT_RATE
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponMult =
        weaponStore.selectedWeapon.subStat === LevelUpStat.CRIT_RATE
          ? weaponStore.selectedStats.subStatValue
          : 0;
      const totalMult =
        0.05 + characterMult + weaponMult + artifactStore.critRate;

      return totalMult;
    },
    critDamage: () => {
      const characterStore = useCharacterStore();
      const weaponStore = useWeaponStore();
      const artifactStore = useArtifactStore();

      const characterMult =
        characterStore.selectedCharacter.ascensionStat ===
        LevelUpStat.CRIT_DAMAGE
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const weaponMult =
        weaponStore.selectedWeapon.subStat === LevelUpStat.CRIT_DAMAGE
          ? weaponStore.selectedStats.subStatValue
          : 0;
      const totalMult =
        0.5 + characterMult + weaponMult + artifactStore.critDamage;

      return totalMult;
    },
    elementalDamage: () => {
      const characterStore = useCharacterStore();
      const artifactStore = useArtifactStore();

      const characterMult =
        characterStore.selectedCharacter.ascensionStat ===
        LevelUpStat.ELEMENTAL_DAMAGE
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const totalMult = characterMult + artifactStore.elementalDamage;

      return totalMult;
    },
    healingBonus: () => {
      const characterStore = useCharacterStore();
      const artifactStore = useArtifactStore();

      const characterMult =
        characterStore.selectedCharacter.ascensionStat ===
        LevelUpStat.HEALING_BONUS
          ? characterStore.selectedStats.ascentionStatValue
          : 0;
      const totalMult = characterMult + artifactStore.healingBonus;

      return totalMult;
    },
  },
});
