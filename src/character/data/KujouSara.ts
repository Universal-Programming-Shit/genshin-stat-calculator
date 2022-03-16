import { statBlock, CharacterStats } from "../../types/characterStats";
import { LevelUpStat } from "../../types/levelUpStat";
import { Element } from "../../types/element";
import { Character } from "../../types/character";
import { WeaponType } from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 802, 16, 53, 0),
  statBlock(20, 0, 2061, 42, 135, 0),
  statBlock(20, 1, 2661, 54, 175, 0),
  statBlock(40, 1, 3985, 81, 262, 0),
  statBlock(40, 2, 4411, 90, 289, 0.06),
  statBlock(50, 2, 5074, 104, 333, 0.06),
  statBlock(50, 3, 5642, 115, 370, 0.12),
  statBlock(60, 3, 6305, 129, 414, 0.12),
  statBlock(60, 4, 6731, 137, 442, 0.12),
  statBlock(70, 4, 7393, 151, 485, 0.12),
  statBlock(70, 5, 7818, 160, 513, 0.18),
  statBlock(80, 5, 8481, 173, 556, 0.18),
  statBlock(80, 6, 8907, 182, 584, 0.24),
  statBlock(90, 6, 9570, 195, 628, 0.24),
];
const KujouSara: Character = {
  name: "Kujou Sara",
  element: Element.ELECTRO,
  ascensionStat: LevelUpStat.ATTACK,
  weapon: WeaponType.BOW,
  stats,
};

export default KujouSara;
