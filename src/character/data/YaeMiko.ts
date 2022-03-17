import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 807, 26, 44, 0),
  statBlock(20, 0, 2065, 69, 115, 0),
  statBlock(20, 1, 2787, 91, 153, 0),
  statBlock(40, 1, 4170, 137, 229, 0),
  statBlock(40, 2, 4662, 153, 256, 0.048),
  statBlock(50, 2, 5364, 176, 294, 0.048),
  statBlock(50, 3, 6020, 197, 330, 0.096),
  statBlock(60, 3, 6729, 220, 369, 0.096),
  statBlock(60, 4, 7220, 236, 396, 0.096),
  statBlock(70, 4, 7936, 260, 435, 0.096),
  statBlock(70, 5, 8428, 276, 462, 0.144),
  statBlock(80, 5, 9151, 300, 502, 0.144),
  statBlock(80, 6, 9643, 316, 529, 0.192),
  statBlock(90, 6, 10372, 340, 569, 0.192),
];
const YaeMiko: Character = {
  name: "Yae Miko",
  element: Element.ELECTRO,
  weapon: WeaponType.CATALYST,
  ascensionStat: LevelUpStat.CRIT_RATE,
  stats,
};

export default YaeMiko;
