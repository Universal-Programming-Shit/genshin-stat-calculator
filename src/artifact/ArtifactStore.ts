import { defineStore } from "pinia";
import { Artifact, mainStatScalings, subStatScalings } from "../types/artifact";
import { ArtifactType } from "../types/artifactType";
import { Stats } from "../types/stats";
import add from "../util/add";
import { Stars } from "../types/stars";
import { useStorage } from "@vueuse/core";

const calculateStats = (type: Stats, artifacts: Artifact[]): number => {
  const mainStats = artifacts
    ?.filter((a) => a.mainStat === type)
    .map((a) => mainStatScalings[a.stars]?.[a.mainStat]?.(a.level) ?? 0)
    .reduce(add, 0);
  const subStats = artifacts
    .flatMap((a) =>
      a.subStats
        .filter((substat) => substat.type === type)
        .map((substat) =>
          substat.rolls
            .map(
              (roll) => roll * (subStatScalings[a.stars]?.[substat.type] ?? 0)
            )
            .reduce(add, 0)
        )
    )
    .reduce(add, 0);
  return mainStats + subStats ?? 0;
};

export const useArtifactStore = defineStore("artifact", {
  state: () =>
    useStorage("artifact", {
      [ArtifactType.FLOWER]: {
        type: ArtifactType.FLOWER,
        stars: Stars.S5,
        level: 1,
        mainStat: Stats.HP_FLAT,
        subStats: [{}, {}, {}, {}],
      } as Artifact,
      [ArtifactType.FEATHER]: {
        type: ArtifactType.FEATHER,
        stars: Stars.S5,
        level: 1,
        mainStat: Stats.ATTACK_FLAT,
        subStats: [{}, {}, {}, {}],
      } as Artifact,
      [ArtifactType.SANDS]: {
        type: ArtifactType.SANDS,
        stars: Stars.S5,
        level: 1,
        mainStat: Stats.HP_PERC,
        subStats: [{}, {}, {}, {}],
      } as Artifact,
      [ArtifactType.GOBLET]: {
        type: ArtifactType.GOBLET,
        stars: Stars.S5,
        level: 1,
        mainStat: Stats.HP_PERC,
        subStats: [{}, {}, {}, {}],
      } as Artifact,
      [ArtifactType.CIRCLET]: {
        type: ArtifactType.CIRCLET,
        stars: Stars.S5,
        level: 1,
        mainStat: Stats.HP_PERC,
        subStats: [{}, {}, {}, {}],
      } as Artifact,
    }),
  getters: {
    artifacts: function (state): Artifact[] {
      return [
        state[ArtifactType.FLOWER],
        state[ArtifactType.FEATHER],
        state[ArtifactType.SANDS],
        state[ArtifactType.GOBLET],
        state[ArtifactType.CIRCLET],
      ];
    },
    atkPerc(): number {
      return calculateStats(Stats.ATTACK_PERC, this.artifacts);
    },
    atkFlat(): number {
      return calculateStats(Stats.ATTACK_FLAT, this.artifacts);
    },
    defPerc(): number {
      return calculateStats(Stats.DEF_PERC, this.artifacts);
    },
    defFlat(): number {
      return calculateStats(Stats.DEF_FLAT, this.artifacts);
    },
    critRate(): number {
      return calculateStats(Stats.CRIT_RATE, this.artifacts);
    },
    critDamage(): number {
      return calculateStats(Stats.CRIT_DAMAGE, this.artifacts);
    },
    hpPerc(): number {
      return calculateStats(Stats.HP_PERC, this.artifacts);
    },
    hpFlat(): number {
      return calculateStats(Stats.HP_FLAT, this.artifacts);
    },
    elementalDamage(): number {
      return calculateStats(Stats.ELEMENTAL_DAMAGE, this.artifacts);
    },
    physicalDamage(): number {
      return calculateStats(Stats.PHYSICAL_DAMAGE, this.artifacts);
    },
    energyRecharge(): number {
      return calculateStats(Stats.ENERGY_RECHARGE, this.artifacts);
    },
    elementalMastery(): number {
      return calculateStats(Stats.ELEMENTAL_MASTERY, this.artifacts);
    },
    healingBonus(): number {
      return calculateStats(Stats.HEALING_BONUS, this.artifacts);
    },
  },
});
