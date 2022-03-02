import {WeaponType} from "./weaponType";
import {LevelUpStat} from "./levelUpStat";

export interface WeaponStats {
  level: number,
  flatAttack: number,
  subStatValue: number
}

export function statBlock(level: number, flatAttack: number, subStatValue: number): WeaponStats{
  return {level, flatAttack, subStatValue};
}
export interface Weapon {
  name: string;
  type: WeaponType;
  subStat: LevelUpStat
  stats: WeaponStats[]
}
