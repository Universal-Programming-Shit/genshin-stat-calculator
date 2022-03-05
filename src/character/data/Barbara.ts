import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 821, 13, 56, 0),
  statBlock(20, 0, 2108, 34, 144, 0),
  statBlock(20, 1, 2721, 44, 186, 0),
  statBlock(40, 1, 4076, 66, 279, 0),
  statBlock(40, 2, 4512, 73, 308, 0.06),
  statBlock(50, 2, 5189, 84, 355, 0.06),
  statBlock(50, 3, 5770, 94, 394, 0.12),
  statBlock(60, 3, 6448, 105, 441, 0.12),
  statBlock(60, 4, 6884, 112, 470, 0.12),
  statBlock(70, 4, 7561, 123, 517, 0.12),
  statBlock(70, 5, 7996, 130, 546, 0.18),
  statBlock(80, 5, 8674, 141, 593, 0.18),
  statBlock(80, 6, 9110, 148, 623, 0.24),
  statBlock(90, 6, 9787, 159, 669, 0.24),
];
const Barbara: Character = {
  name: "Barbara",
  element: Element.HYDRO,
  ascensionStat: LevelUpStat.HP_PERC,
  weapon: WeaponType.CATALYST,
  stats,
};

export default Barbara;
