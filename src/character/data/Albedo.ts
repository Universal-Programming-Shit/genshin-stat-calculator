import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1030, 20, 68, 0),
  statBlock(20, 0, 2671, 51, 177, 0),
  statBlock(20, 1, 3554, 68, 235, 0),
  statBlock(40, 1, 5317, 101, 352, 0),
  statBlock(40, 2, 5944, 113, 394, 0.072),
  statBlock(50, 2, 6839, 130, 453, 0.072),
  statBlock(50, 3, 7675, 146, 508, 0.144),
  statBlock(60, 3, 8579, 163, 568, 0.144),
  statBlock(60, 4, 9207, 175, 610, 0.144),
  statBlock(70, 4, 10119, 192, 670, 0.144),
  statBlock(70, 5, 10746, 204, 712, 0.216),
  statBlock(80, 5, 11669, 222, 733, 0.216),
  statBlock(80, 6, 12296, 233, 815, 0.288),
  statBlock(90, 6, 13266, 251, 876, 0.288),
];
const Albedo: Character = {
  name: "Albedo",
  element: Element.GEO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.SWORD,
  stats,
};

export default Albedo;
