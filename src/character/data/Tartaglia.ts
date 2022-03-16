import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 1020, 23, 63, 0),
  statBlock(20, 0, 2646, 61, 165, 0),
  statBlock(20, 1, 3521, 81, 219, 0),
  statBlock(40, 1, 5268, 121, 328, 0),
  statBlock(40, 2, 5889, 135, 366, 0.072),
  statBlock(50, 2, 6776, 156, 421, 0.072),
  statBlock(50, 3, 7604, 175, 473, 0.144),
  statBlock(60, 3, 8500, 195, 528, 0.144),
  statBlock(60, 4, 9121, 210, 567, 0.144),
  statBlock(70, 4, 10025, 231, 623, 0.144),
  statBlock(70, 5, 10647, 245, 662, 0.216),
  statBlock(80, 5, 11561, 266, 719, 0.216),
  statBlock(80, 6, 12182, 280, 757, 0.288),
  statBlock(90, 6, 13103, 301, 815, 0.288),
];
const Tartaglia: Character = {
  name: "Tartaglia",
  element: Element.HYDRO,
  weapon: WeaponType.BOW,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  stats,
};

export default Tartaglia;
