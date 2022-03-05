import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1039, 23, 63, 0),
  statBlock(20, 0, 2695, 60, 163, 0),
  statBlock(20, 1, 3586, 68, 217, 0),
  statBlock(40, 1, 5366, 80, 324, 0),
  statBlock(40, 2, 5999, 119, 363, 28.8),
  statBlock(50, 2, 6902, 133, 417, 28.8),
  statBlock(50, 3, 7747, 153, 468, 57.6),
  statBlock(60, 3, 8659, 172, 523, 57.6),
  statBlock(60, 4, 9292, 192, 562, 57.6),
  statBlock(70, 4, 10213, 206, 617, 57.6),
  statBlock(70, 5, 10846, 241, 656, 86.4),
  statBlock(80, 5, 11777, 262, 712, 86.4),
  statBlock(80, 6, 12410, 276, 750, 115.2),
  statBlock(90, 6, 13348, 297, 807, 115.2),
];
const KaedeharaKazuha: Character = {
  name: "KaedeharaKazuha",
  element: Element.ANEMO,
  ascensionStat: LevelUpStat.ELEMENTAL_MASTERY,
  weapon: WeaponType.SWORD,
  stats,
};

export default KaedeharaKazuha;
