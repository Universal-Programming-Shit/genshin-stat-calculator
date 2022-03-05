import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1144, 19, 60, 0),
  statBlock(20, 0, 2967, 48, 155, 0),
  statBlock(20, 1, 3948, 64, 206, 0),
  statBlock(40, 1, 5908, 96, 309, 0),
  statBlock(40, 2, 6605, 108, 345, 0.055),
  statBlock(50, 2, 7599, 124, 397, 0.055),
  statBlock(50, 3, 8528, 139, 446, 0.111),
  statBlock(60, 3, 9533, 155, 499, 0.111),
  statBlock(60, 4, 10230, 166, 535, 0.111),
  statBlock(70, 4, 11243, 183, 588, 0.111),
  statBlock(70, 5, 11940, 194, 624, 0.166),
  statBlock(80, 5, 12965, 211, 678, 0.166),
  statBlock(80, 6, 13662, 222, 715, 0.222),
  statBlock(90, 6, 14695, 239, 769, 0.222),
];
const Jean: Character = {
  name: "Jean",
  element: Element.ANEMO,
  ascensionStat: LevelUpStat.HEALING_BONUS,
  weapon: WeaponType.SWORD,
  stats,
};

export default Jean;
