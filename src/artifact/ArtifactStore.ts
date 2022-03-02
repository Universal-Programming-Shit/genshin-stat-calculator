import {defineStore} from "pinia";
import {Artifact, mainStatScalings, subStatScalings} from "../types/artifact";
import {ArtifactType} from "../types/artifactType";
import {Stats} from "../types/stats";
import add from "../util/add";
import {Stars} from "../types/stars";
import { useStorage } from '@vueuse/core'

export const useArtifactStore = defineStore("artifact", {
  state: () => useStorage("artifact", {
    flower: {
      type: ArtifactType.FLOWER,
      stars: Stars.S5,
      level: 1,
      mainStat: Stats.HP_FLAT,
      subStats: [{}, {}, {}, {}],
    } as Artifact,
    feather: {
      type: ArtifactType.FEATHER,
      stars: Stars.S5,
      level: 1,
      mainStat: Stats.ATTACK_FLAT,
      subStats: [{}, {}, {}, {}],
    } as Artifact,
    sands: {
      type: ArtifactType.SANDS,
      stars: Stars.S5,
      level: 1,
      mainStat: Stats.HP_PERC,
      subStats: [{}, {}, {}, {}],
    } as Artifact,
    goblet: {
      type: ArtifactType.GOBLET,
      stars: Stars.S5,
      level: 1,
      mainStat: Stats.HP_PERC,
      subStats: [{}, {}, {}, {}],
    } as Artifact,
    circlet: {
      type: ArtifactType.CIRCLET,
      stars: Stars.S5,
      level: 1,
      mainStat: Stats.HP_PERC,
      subStats: [{}, {}, {}, {}],
    } as Artifact,
  }),
  getters: {
    artifacts: (state): Artifact[] => ([state.flower, state.feather, state.sands, state.goblet, state.circlet]),
    [ArtifactType.FLOWER]: state => state.flower,
    [ArtifactType.FEATHER]: state => state.feather,
    [ArtifactType.SANDS]: state => state.sands,
    [ArtifactType.GOBLET]: state => state.goblet,
    [ArtifactType.CIRCLET]: state => state.circlet,
    atkPerc: state => state.calculateStats(Stats.ATTACK_PERC),
    atkFlat: state => state.calculateStats(Stats.ATTACK_FLAT),
    defPerc: state => state.calculateStats(Stats.DEF_PERC),
    defFlat: state => state.calculateStats(Stats.DEF_FLAT),
    critRate: state => state.calculateStats(Stats.CRIT_RATE),
    critDamage: state => state.calculateStats(Stats.CRIT_DAMAGE),
    hpPerc: state => state.calculateStats(Stats.HP_PERC),
    hpFlat: state => state.calculateStats(Stats.HP_FLAT),
    elementalDamage: state => state.calculateStats(Stats.ELEMENTAL_DAMAGE),
    physicalDamage: state => state.calculateStats(Stats.PHYSICAL_DAMAGE),
    energyRecharge: state => state.calculateStats(Stats.ENERGY_RECHARGE),
    elementalMastery: state => state.calculateStats(Stats.ELEMENTAL_MASTERY),
    healingBonus: state => state.calculateStats(Stats.HEALING_BONUS),
  },
  actions: {
    calculateStats(type: Stats) {
      const artifacts: Artifact[] = this.artifacts;
      const mainStats = artifacts
        .filter(a => a.mainStat === type)
        .map(a => mainStatScalings[a.stars][a.mainStat](a.level))
        .reduce(add, 0);
      const subStats = artifacts
        .flatMap(a => a.subStats
          .filter(substat => substat.type === type)
          .map(substat => substat.rolls
            .map(roll => roll * subStatScalings[a.stars][substat.type])
            .reduce(add, 0)))
        .reduce(add, 0);
      return mainStats + subStats;
    },
  },
});
