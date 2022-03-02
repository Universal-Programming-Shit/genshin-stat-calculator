import {statBlock, Weapon, WeaponStats} from "../../../types/weapon";
import {LevelUpStat} from "../../../types/levelUpStat";
import {WeaponType} from "../../../types/weaponType";

const stats: WeaponStats[] = [
  statBlock(1, 39, 0.077),
  statBlock(90, 401, 0.352),
];

const ThrillingTalesofDragonSlayers: Weapon = {
  name: "Thrilling Tales of Dragon Slayers",
  type: WeaponType.CATALYST,
  subStat: LevelUpStat.HP,
  stats,
};

export default ThrillingTalesofDragonSlayers;
