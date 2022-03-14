import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1211, 8, 68, 0),
  statBlock(20, 0, 3141, 21, 177, 0),
  statBlock(20, 1, 4179, 29, 235, 0),
  statBlock(40, 1, 6253, 43, 352, 0),
  statBlock(40, 2, 6990, 48, 394, 0.096),
  statBlock(50, 2, 8042, 55, 453, 0.096),
  statBlock(50, 3, 9026, 62, 508, 0.192),
  statBlock(60, 3, 10089, 69, 568, 0.192),
  statBlock(60, 4, 10826, 74, 610, 0.192),
  statBlock(70, 4, 11899, 81, 670, 0.192),
  statBlock(70, 5, 12637, 86, 712, 0.288),
  statBlock(80, 5, 13721, 94, 733, 0.288),
  statBlock(80, 6, 14459, 99, 815, 0.384),
  statBlock(90, 6, 15552, 106, 876, 0.384),
];
const HuTao: Character = {
  name: "HuTao",
  element: Element.PYRO,
  ascensionStat: LevelUpStat.CRIT_DAMAGE,
  weapon: WeaponType.POLEARM,
  stats,
};

export default HuTao;

