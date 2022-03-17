import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 775, 14, 59, 0),
  statBlock(20, 0, 1991, 37, 151, 0),
  statBlock(20, 1, 2570, 47, 195, 0),
  statBlock(40, 1, 3850, 71, 293, 0),
  statBlock(40, 2, 4261, 78, 324, 0.06),
  statBlock(50, 2, 4901, 90, 373, 0.06),
  statBlock(50, 3, 5450, 100, 414, 0.12),
  statBlock(60, 3, 6090, 112, 463, 0.12),
  statBlock(60, 4, 6501, 120, 494, 0.12),
  statBlock(70, 4, 7141, 131, 543, 0.12),
  statBlock(70, 5, 7552, 139, 574, 0.18),
  statBlock(80, 5, 8192, 151, 623, 0.18),
  statBlock(80, 6, 8603, 158, 654, 0.24),
  statBlock(90, 6, 9243, 170, 703, 0.24),
];
const Sucrose: Character = {
  name: "Sucrose",
  element: Element.ANEMO,
  weapon: WeaponType.CATALYST,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  stats,
};

export default Sucrose;
