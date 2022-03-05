import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 848, 18, 53, 0),
  statBlock(20, 0, 2201, 47, 137, 0),
  statBlock(20, 1, 2928, 63, 182, 0),
  statBlock(40, 1, 4382, 94, 272, 0),
  statBlock(40, 2, 4899, 105, 304, 0.072),
  statBlock(50, 2, 5636, 121, 350, 0.072),
  statBlock(50, 3, 6325, 136, 393, 0.144),
  statBlock(60, 3, 7070, 152, 439, 0.144),
  statBlock(60, 4, 7587, 163, 471, 0.144),
  statBlock(70, 4, 8339, 179, 517, 0.144),
  statBlock(70, 5, 8856, 190, 550, 0.216),
  statBlock(80, 5, 9619, 206, 597, 0.216),
  statBlock(80, 6, 10133, 217, 629, 0.288),
  statBlock(90, 6, 10899, 234, 676, 0.288),
];
const Aloy: Character = {
  name: "Aloy",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.BOW,
  stats,
};

export default Aloy;
