export enum Stats {
  CRIT_RATE,
  CRIT_DAMAGE,
  ELEMENTAL_DAMAGE,
  HEALING_BONUS,
  ATTACK_FLAT,
  ATTACK_PERC,
  HP_FLAT,
  HP_PERC,
  DEF_FLAT,
  DEF_PERC,
  ENERGY_RECHARGE,
  ELEMENTAL_MASTERY,
  PHYSICAL_DAMAGE
}

export const isPercentage = stat => stat === Stats.CRIT_RATE ||
  stat === Stats.CRIT_DAMAGE ||
  stat === Stats.ELEMENTAL_DAMAGE ||
  stat === Stats.HEALING_BONUS ||
  stat === Stats.PHYSICAL_DAMAGE ||
  stat === Stats.ATTACK_PERC ||
  stat === Stats.HP_PERC ||
  stat === Stats.DEF_PERC ||
  stat === Stats.ENERGY_RECHARGE;

export function toString(stat: Stats): string {
  switch (stat) {
    case Stats.CRIT_RATE:
      return "Crit Rate";
    case Stats.CRIT_DAMAGE:
      return "Crit Damage";
    case Stats.ELEMENTAL_DAMAGE:
      return "Elemental Damage";
    case Stats.HEALING_BONUS:
      return "Healing Bonus";
    case Stats.ATTACK_FLAT:
      return "Flat Attack";
    case Stats.ATTACK_PERC:
      return "Attack%";
    case Stats.HP_FLAT:
      return "Flat Hp";
    case Stats.HP_PERC:
      return "Hp%";
    case Stats.DEF_FLAT:
      return "Flat Def";
    case Stats.DEF_PERC:
      return "Def%";
    case Stats.ENERGY_RECHARGE:
      return "Energy Recharge";
    case Stats.ELEMENTAL_MASTERY:
      return "Elemental Mastery";
    case Stats.PHYSICAL_DAMAGE:
      return "Physical Damage";
  }
}
