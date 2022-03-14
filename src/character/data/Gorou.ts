import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 802, 15, 54, 0),
  statBlock(20, 0, 2061, 39, 140, 0),
  statBlock(20, 1, 2661, 51, 180, 0),
  statBlock(40, 1, 3985, 76, 270, 0),
  statBlock(40, 2, 4411, 84, 299, 0.06),
  statBlock(50, 2, 5074, 97, 344, 0.06),
  statBlock(50, 3, 5642, 108, 382, 0.12),
  statBlock(60, 3, 6305, 120, 427, 0.12),
  statBlock(60, 4, 6731, 128, 456, 0.12),
  statBlock(70, 4, 7393, 141, 501, 0.12),
  statBlock(70, 5, 7818, 149, 530, 0.18),
  statBlock(80, 5, 8481, 162, 575, 0.18),
  statBlock(80, 6, 8907, 170, 603, 0.24),
  statBlock(90, 6, 9570, 183, 648, 0.24),
];
const Gorou: Character = {
  name: "Gorou",
  element: Element.GEO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.BOW,
  stats,
};

export default Gorou;
