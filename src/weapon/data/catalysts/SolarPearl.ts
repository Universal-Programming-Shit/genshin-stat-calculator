import { statBlock, Weapon, WeaponStats } from "../../../types/weapon";
import { LevelUpStat } from "../../../types/levelUpStat";
import { WeaponType } from "../../../types/weaponType";

const stats: WeaponStats[] = [
  statBlock(1, 42, 0.06),
  statBlock(20, 109, 0.106),
  statBlock(40, 205, 0.155),
  statBlock(50, 266, 0.179),
  statBlock(60, 327, 0.203),
  statBlock(70, 388, 0.227),
  statBlock(80, 449, 0.251),
  statBlock(90, 510, 0.276),
];

const SolarPearl: Weapon = {
  name: "Solar Pearl",
  type: WeaponType.CATALYST,
  subStat: LevelUpStat.CRIT_RATE,
  stats,
};

export default SolarPearl;
