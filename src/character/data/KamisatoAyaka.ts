import {CharacterStats, statBlock} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1001, 27, 61, 0),
  statBlock(20, 0, 2597, 79, 158, 0),
  statBlock(20, 1, 3455, 92, 211, 0),
  statBlock(40, 1, 5170, 138, 315, 0),
  statBlock(40, 2, 5779, 154, 352, 0.096),
  statBlock(50, 2, 6649, 177, 405, 0.096),
  statBlock(50, 3, 7462, 198, 455, 0.192),
  statBlock(60, 3, 8341, 222, 509, 0.192),
  statBlock(60, 4, 8951, 238, 546, 0.192),
  statBlock(70, 4, 9838, 262, 600, 0.192),
  statBlock(70, 5, 10448, 278, 637, 0.288),
  statBlock(80, 5, 11345, 302, 692, 0.288),
  statBlock(80, 6, 11954, 318, 729, 0.384),
  statBlock(90, 6, 12858, 342, 784, 0.384),
];
const KamisatoAyaka: Character = {
  name: "Kamisato Ayaka",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.CRIT_DAMAGE,
  weapon: WeaponType.SWORD,
  stats,
};

export default KamisatoAyaka;
