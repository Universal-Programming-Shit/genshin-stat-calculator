import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {LevelUpStat} from "../../types/levelUpStat";
import {WeaponType} from "../../types/weaponType";
import {statBlock} from "../../types/characterStats";

const stats = [
  statBlock(1, 0, 1020, 25, 62, 0),
  statBlock(20, 0, 2646, 65, 161, 0),
  statBlock(20, 1, 3521, 87, 215, 0),
  statBlock(40, 1, 5268, 130, 321, 0),
  statBlock(40, 2, 5889, 145, 359, 0.096),
  statBlock(50, 2, 6776, 167, 413, 0.096),
  statBlock(50, 3, 7604, 187, 464, 0.192),
  statBlock(60, 3, 8500, 209, 519, 0.192),
  statBlock(60, 4, 9121, 225, 556, 0.192),
  statBlock(70, 4, 10025, 247, 612, 0.192),
  statBlock(70, 5, 10647, 262, 649, 0.288),
  statBlock(80, 5, 11561, 285, 705, 0.288),
  statBlock(80, 6, 12182, 300, 743, 0.384),
  statBlock(90, 6, 13103, 323, 799, 0.384),
];
const Keqing: Character = {
  name: "Kequing",
  element: Element.ELECTRO,
  ascensionStat: LevelUpStat.CRIT_DAMAGE,
  weapon: WeaponType.SWORD,
  stats,
};

export default Keqing;
