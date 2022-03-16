import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1001, 18, 75, 0),
  statBlock(20, 0, 2597, 46, 194, 0),
  statBlock(20, 1, 3455, 61, 258, 0),
  statBlock(40, 1, 5170, 91, 386, 0),
  statBlock(40, 2, 5779, 102, 431, 0.048),
  statBlock(50, 2, 6649, 117, 496, 0.048),
  statBlock(50, 3, 7462, 132, 557, 0.096),
  statBlock(60, 3, 8341, 147, 622, 0.096),
  statBlock(60, 4, 8951, 158, 668, 0.096),
  statBlock(70, 4, 9838, 174, 734, 0.096),
  statBlock(70, 5, 10448, 185, 779, 0.144),
  statBlock(80, 5, 11345, 199, 846, 0.144),
  statBlock(80, 6, 11954, 211, 892, 0.192),
  statBlock(90, 6, 12858, 227, 959, 0.192),
];
const AratakiItto: Character = {
  name: "Arataki Itto",
  element: Element.GEO,
  ascensionStat: LevelUpStat.CRIT_RATE,
  weapon: WeaponType.CLAYMORE,
  stats,
};

export default AratakiItto;
