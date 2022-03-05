import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 802, 18, 50, 0),
  statBlock(20, 0, 2061, 46, 129, 0),
  statBlock(20, 1, 2661, 59, 167, 0),
  statBlock(40, 1, 3985, 88	, 250, 0),
  statBlock(40, 2, 4411, 98, 277, 0.06),
  statBlock(50, 2, 5074, 113, 318, 0.06),
  statBlock(50, 3, 5642, 125, 354, 0.12),
  statBlock(60, 3, 6305, 140, 396, 0.12),
  statBlock(60, 4, 6731, 149, 422, 0.12),
  statBlock(70, 4, 7393, 164, 464, 0.12),
  statBlock(70, 5, 7818, 174, 491, 0.18),
  statBlock(80, 5, 8481, 188, 532, 0.18),
  statBlock(80, 6, 8907, 198, 559, 0.24),
  statBlock(90, 6, 9570, 212, 601, 0.24),
];
const Diona: Character = {
  name: "Diona",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.BOW,
  stats,
};

export default Diona;
