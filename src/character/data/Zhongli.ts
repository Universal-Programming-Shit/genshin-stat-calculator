import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 1144, 20, 57, 0),
  statBlock(20, 0, 2967, 51, 149, 0),
  statBlock(20, 1, 3948, 67, 198, 0),
  statBlock(40, 1, 5908, 101, 297, 0),
  statBlock(40, 2, 6605, 113, 332, 0.072),
  statBlock(50, 2, 7599, 130, 382, 0.072),
  statBlock(50, 3, 8528, 146, 428, 0.144),
  statBlock(60, 3, 9533, 163, 479, 0.144),
  statBlock(60, 4, 10230, 175, 514, 0.144),
  statBlock(70, 4, 11243, 192, 564, 0.144),
  statBlock(70, 5, 11940, 204, 599, 0.216),
  statBlock(80, 5, 12965, 222, 651, 0.216),
  statBlock(80, 6, 13662, 233, 686, 0.288),
  statBlock(90, 6, 14695, 251, 738, 0.288),
];
const Zhongli: Character = {
  name: "Zhongli",
  element: Element.GEO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  stats,
};

export default Zhongli;
