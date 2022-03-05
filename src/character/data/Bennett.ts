import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1039, 16, 65, 0),
  statBlock(20, 0, 2670, 41, 166, 0),
  statBlock(20, 1, 3447, 53, 214, 0),
  statBlock(40, 1, 5163, 80, 321, 0),
  statBlock(40, 2, 5715, 88, 356, 0.067),
  statBlock(50, 2, 6573, 101, 409, 0.067),
  statBlock(50, 3, 7309, 113, 455, 0.133),
  statBlock(60, 3, 8168, 126, 508, 0.133),
  statBlock(60, 4, 8719, 134, 542, 0.133),
  statBlock(70, 4, 9577, 148, 596, 0.133),
  statBlock(70, 5, 10129, 156, 630, 0.20),
  statBlock(80, 5, 10987, 169, 684, 0.20),
  statBlock(80, 6, 11539, 178, 771, 0.267),
  statBlock(90, 6, 12397, 191, 771, 0.267),
];
const Bennett: Character = {
  name: "Bennett",
  element: Element.PYRO,
  ascensionStat: LevelUpStat.ENERGY_RECHARGE,
  weapon: WeaponType.SWORD,
  stats,
};

export default Bennett;
