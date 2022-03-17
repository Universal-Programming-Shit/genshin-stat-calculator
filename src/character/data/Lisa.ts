import { statBlock, CharacterStats } from "../../types/characterStats";
import { LevelUpStat } from "../../types/levelUpStat";
import { Element } from "../../types/element";
import { Character } from "../../types/character";
import { WeaponType } from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 802, 19, 48, 0),
  statBlock(20, 0, 2061, 50, 123, 0),
  statBlock(20, 1, 2661, 64, 159, 0),
  statBlock(40, 1, 3985, 96, 239, 0),
  statBlock(40, 2, 4411, 107, 264, 24),
  statBlock(50, 2, 5074, 123, 304, 24),
  statBlock(50, 3, 5642, 136, 338, 48),
  statBlock(60, 3, 6305, 153, 378, 48),
  statBlock(60, 4, 6731, 163, 403, 48),
  statBlock(70, 4, 7393, 179, 443, 48),
  statBlock(70, 5, 7818, 189, 468, 72),
  statBlock(80, 5, 8481, 205, 508, 72),
  statBlock(80, 6, 8907, 215, 534, 96),
  statBlock(90, 6, 9570, 232, 573, 96),
];
const Lisa: Character = {
  name: "Lisa",
  element: Element.ELECTRO,
  ascensionStat: LevelUpStat.ELEMENTAL_MASTERY,
  weapon: WeaponType.CATALYST,
  stats,
};

export default Lisa;
