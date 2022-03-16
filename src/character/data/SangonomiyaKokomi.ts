import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 1049, 18, 51, 0),
  statBlock(20, 0, 2720, 47, 133, 0),
  statBlock(20, 1, 3619, 63, 177, 0),
  statBlock(40, 1, 5416, 94, 264, 0),
  statBlock(40, 2, 6055, 105, 295, 0.072),
  statBlock(50, 2, 6966, 121, 340, 0.072),
  statBlock(50, 3, 7818, 136, 381, 0.144),
  statBlock(60, 3, 8738, 152, 426, 0.144),
  statBlock(60, 4, 9377, 163, 457, 0.144),
  statBlock(70, 4, 10306, 179, 503, 0.144),
  statBlock(70, 5, 10945, 190, 534, 0.216),
  statBlock(80, 5, 11885, 207, 580, 0.216),
  statBlock(80, 6, 12524, 218, 611, 0.288),
  statBlock(90, 6, 13471, 234, 657, 0.288),
];
const SangonomiyaKokomi: Character = {
  name: "Sangonomiya Kokomi",
  element: Element.HYDRO,
  weapon: WeaponType.CATALYST,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  stats,
};

export default SangonomiyaKokomi;
