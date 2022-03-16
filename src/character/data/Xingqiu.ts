import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 857, 17, 64, 0),
  statBlock(20, 0, 2202, 43, 163, 0),
  statBlock(20, 1, 2842, 56, 211, 0),
  statBlock(40, 1, 4257, 84, 316, 0),
  statBlock(40, 2, 4712, 93, 349, 0.06),
  statBlock(50, 2, 5420, 107, 402, 0.06),
  statBlock(50, 3, 6027, 119, 447, 0.12),
  statBlock(60, 3, 6735, 133, 499, 0.12),
  statBlock(60, 4, 7190, 142, 533, 0.12),
  statBlock(70, 4, 7897, 156, 585, 0.12),
  statBlock(70, 5, 8352, 165, 619, 0.18),
  statBlock(80, 5, 9060, 179, 671, 0.18),
  statBlock(80, 6, 9515, 188, 705, 0.24),
  statBlock(90, 6, 10223, 202, 758, 0.24),
];
const Xingqiu: Character = {
  name: "Xingqiu",
  element: Element.HYDRO,
  weapon: WeaponType.SWORD,
  ascensionStat: LevelUpStat.ATTACK,
  stats,
};

export default Xingqiu;
