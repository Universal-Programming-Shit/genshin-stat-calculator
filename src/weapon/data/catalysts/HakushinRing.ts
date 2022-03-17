import { statBlock, Weapon, WeaponStats } from "../../../types/weapon";
import { LevelUpStat } from "../../../types/levelUpStat";
import { WeaponType } from "../../../types/weaponType";

const stats: WeaponStats[] = [
  statBlock(1, 44, 0.067),
  statBlock(20, 119, 0.118),
  statBlock(40, 226, 0.172),
  statBlock(50, 293, 0.199),
  statBlock(60, 361, 0.226),
  statBlock(70, 429, 0.252),
  statBlock(80, 497, 0.279),
  statBlock(90, 565, 0.306),
];

const HakushinRing: Weapon = {
  name: "Hakushin Ring",
  type: WeaponType.CATALYST,
  subStat: LevelUpStat.ENERGY_RECHARGE,
  stats,
};

export default HakushinRing;
