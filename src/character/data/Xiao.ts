import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 991, 27, 62, 0),
  statBlock(20, 0, 2572, 71, 161, 0),
  statBlock(20, 1, 3422, 94, 215, 0),
  statBlock(40, 1, 5120, 141, 321, 0),
  statBlock(40, 2, 5724, 157, 359, 0.048),
  statBlock(50, 2, 6586, 181, 413, 0.048),
  statBlock(50, 3, 7391, 203, 464, 0.096),
  statBlock(60, 3, 8262, 227, 519, 0.096),
  statBlock(60, 4, 8866, 243, 556, 0.096),
  statBlock(70, 4, 9744, 267, 612, 0.096),
  statBlock(70, 5, 10348, 284, 649, 0.144),
  statBlock(80, 5, 11236, 308, 705, 0.144),
  statBlock(80, 6, 11840, 325, 743, 0.192),
  statBlock(90, 6, 12736, 349, 799, 0.192),
];
const Xiao: Character = {
  name: "Xiao",
  element: Element.ANEMO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.CRIT_RATE,
  stats,
};

export default Xiao;
