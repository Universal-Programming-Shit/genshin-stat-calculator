import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 770, 20, 50, 0),
  statBlock(20, 0, 1979, 53, 128, 0),
  statBlock(20, 1, 2555, 68, 165, 0),
  statBlock(40, 1, 3827, 102, 247, 0),
  statBlock(40, 2, 4236, 113, 274, 0.06),
  statBlock(50, 2, 4872, 130, 315, 0.06),
  statBlock(50, 3, 5418, 144, 350, 0.12),
  statBlock(60, 3, 6054, 161, 391, 0.12),
  statBlock(60, 4, 6463, 172, 418, 0.12),
  statBlock(70, 4, 7099, 189, 459, 0.12),
  statBlock(70, 5, 7508, 200, 485, 0.18),
  statBlock(80, 5, 8144, 216, 526, 0.18),
  statBlock(80, 6, 8553, 227, 553, 0.24),
  statBlock(90, 6, 9189, 244, 594, 0.24),
];
const Fischl: Character = {
  name: "Fischl",
  element: Element.ELECTRO,
  ascensionStat: LevelUpStat.ATTACK,
  weapon: WeaponType.BOW,
  stats,
};

export default Fischl;
