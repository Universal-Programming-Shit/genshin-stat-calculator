import { Stats } from "./stats";
import { ArtifactType } from "./artifactType";
import { Stars } from "./stars";
import linearScaling from "../util/linearScaling";

export interface ArtifactSubStat {
  type: Stats;
  rolls: number[];
}

export interface Artifact {
  type: ArtifactType;
  stars: Stars;
  level: number;
  mainStat: Stats;
  subStats: ArtifactSubStat[];
}

export const mainStatScalings: {
  [key: Stars]: { [key: Stats]: (level: number) => number };
} = {
  [Stars.S3]: {
    [Stats.HP_FLAT]: linearScaling(430, 1893, 12),
    [Stats.ATTACK_FLAT]: linearScaling(28, 123, 12),
    [Stats.HP_PERC]: linearScaling(0.052, 0.231, 12),
    [Stats.ATTACK_PERC]: linearScaling(0.052, 0.0231, 12),
    [Stats.DEF_PERC]: linearScaling(0.066, 0.288, 12),
    [Stats.PHYSICAL_DAMAGE]: linearScaling(0.066, 0.288, 12),
    [Stats.ELEMENTAL_DAMAGE]: linearScaling(0.052, 0.231, 12),
    [Stats.ELEMENTAL_MASTERY]: linearScaling(21, 92, 12),
    [Stats.ENERGY_RECHARGE]: linearScaling(0.058, 0.256, 12),
    [Stats.CRIT_RATE]: linearScaling(0.035, 0.154, 12),
    [Stats.CRIT_DAMAGE]: linearScaling(0.07, 0.308, 12),
    [Stats.HEALING_BONUS]: linearScaling(0.04, 0.178, 12),
  },
  [Stars.S4]: {
    [Stats.HP_FLAT]: linearScaling(645, 3571, 16),
    [Stats.ATTACK_FLAT]: linearScaling(42, 232, 16),
    [Stats.HP_PERC]: linearScaling(0.063, 0.348, 16),
    [Stats.ATTACK_PERC]: linearScaling(0.063, 0.348, 16),
    [Stats.DEF_PERC]: linearScaling(0.079, 0.435, 16),
    [Stats.PHYSICAL_DAMAGE]: linearScaling(0.079, 0.435, 16),
    [Stats.ELEMENTAL_DAMAGE]: linearScaling(0.063, 0.348, 16),
    [Stats.ELEMENTAL_MASTERY]: linearScaling(25, 139, 16),
    [Stats.ENERGY_RECHARGE]: linearScaling(0.07, 0.387, 16),
    [Stats.CRIT_RATE]: linearScaling(0.042, 0.232, 16),
    [Stats.CRIT_DAMAGE]: linearScaling(0.084, 0.464, 16),
    [Stats.HEALING_BONUS]: linearScaling(0.048, 0.268, 16),
  },
  [Stars.S5]: {
    [Stats.HP_FLAT]: linearScaling(717, 4780, 20),
    [Stats.ATTACK_FLAT]: linearScaling(47, 311, 20),
    [Stats.HP_PERC]: linearScaling(0.07, 0.466, 20),
    [Stats.ATTACK_PERC]: linearScaling(0.07, 0.466, 20),
    [Stats.DEF_PERC]: linearScaling(0.087, 0.583, 20),
    [Stats.PHYSICAL_DAMAGE]: linearScaling(0.087, 0.583, 20),
    [Stats.ELEMENTAL_DAMAGE]: linearScaling(0.07, 0.466, 20),
    [Stats.ELEMENTAL_MASTERY]: linearScaling(28, 187, 20),
    [Stats.ENERGY_RECHARGE]: linearScaling(0.078, 0.518, 20),
    [Stats.CRIT_RATE]: linearScaling(0.047, 0.311, 20),
    [Stats.CRIT_DAMAGE]: linearScaling(0.093, 0.622, 20),
    [Stats.HEALING_BONUS]: linearScaling(0.054, 0.359, 20),
  },
};

export const subStatScalings: { [key: Stars]: { [key: Stats]: number } } = {
  [Stars.S3]: {
    [Stats.HP_FLAT]: 143.4,
    [Stats.ATTACK_FLAT]: 9.34,
    [Stats.DEF_FLAT]: 11.11,
    [Stats.HP_PERC]: 0.035,
    [Stats.ATTACK_PERC]: 0.035,
    [Stats.DEF_PERC]: 0.0437,
    [Stats.ELEMENTAL_MASTERY]: 13.99,
    [Stats.ENERGY_RECHARGE]: 0.0389,
    [Stats.CRIT_RATE]: 0.0233,
    [Stats.CRIT_DAMAGE]: 0.0466,
  },
  [Stars.S4]: {
    [Stats.HP_FLAT]: 239,
    [Stats.ATTACK_FLAT]: 15.56,
    [Stats.DEF_FLAT]: 18.52,
    [Stats.HP_PERC]: 0.0466,
    [Stats.ATTACK_PERC]: 0.0466,
    [Stats.DEF_PERC]: 0.0583,
    [Stats.ELEMENTAL_MASTERY]: 18.56,
    [Stats.ENERGY_RECHARGE]: 0.0518,
    [Stats.CRIT_RATE]: 0.0311,
    [Stats.CRIT_DAMAGE]: 0.0622,
  },
  [Stars.S5]: {
    [Stats.HP_FLAT]: 298.75,
    [Stats.ATTACK_FLAT]: 19.45,
    [Stats.DEF_FLAT]: 23.15,
    [Stats.HP_PERC]: 0.0583,
    [Stats.ATTACK_PERC]: 0.0583,
    [Stats.DEF_PERC]: 0.0729,
    [Stats.ELEMENTAL_MASTERY]: 23.31,
    [Stats.ENERGY_RECHARGE]: 0.0648,
    [Stats.CRIT_RATE]: 0.0389,
    [Stats.CRIT_DAMAGE]: 0.0777,
  },
};
