import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1094, 19, 54, 0),
  statBlock(20, 0, 2811, 48, 140, 0),
  statBlock(20, 1, 3628, 63, 180, 0),
  statBlock(40, 1, 5435, 94, 270, 0),
  statBlock(40, 2, 6015, 104, 299, 0.06),
  statBlock(50, 2, 6919, 119, 344, 0.06),
  statBlock(50, 3, 7694, 133, 382, 0.12),
  statBlock(60, 3, 8597, 148, 427, 0.12),
  statBlock(60, 4, 9178, 158, 456, 0.12),
  statBlock(70, 4, 10081, 174, 501, 0.12),
  statBlock(70, 5, 10662, 184, 530, 0.18),
  statBlock(80, 5, 11565, 200, 575, 0.18),
  statBlock(80, 6, 12146, 210, 603, 0.24),
  statBlock(90, 6, 13050, 225, 648, 0.24),
];
const Beidou: Character = {
  name: "Beidou",
  element: Element.ELECTRO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.CLAYMORE,
  stats,
};

export default Beidou;
