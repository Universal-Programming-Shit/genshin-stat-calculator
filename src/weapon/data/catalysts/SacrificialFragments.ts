import {statBlock, Weapon, WeaponStats} from "../../../types/weapon";
import {LevelUpStat} from "../../../types/levelUpStat";
import {WeaponType} from "../../../types/weaponType";

const stats: WeaponStats[] = [
  statBlock(1, 41, 48),
  statBlock(20, 99, 85),
  statBlock(40, 184, 124),
  statBlock(50, 238, 143),
  statBlock(60, 293, 162),
  statBlock(70, 347, 182),
  statBlock(80, 401, 201),
  statBlock(90, 454, 221),
];

const SacrificialFragments: Weapon = {
  name: "Sacrificial Fragments",
  type: WeaponType.CATALYST,
  subStat: LevelUpStat.ELEMENTAL_MASTERY,
  stats,
};

export default SacrificialFragments;
