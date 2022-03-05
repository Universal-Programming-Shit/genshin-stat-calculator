import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1003, 19, 54, 0),
  statBlock(20, 0, 2366, 48, 140, 0),
  statBlock(20, 1, 3054, 62, 180, 0),
  statBlock(40, 1, 4574, 93, 270, 0),
  statBlock(40, 2, 5063, 103, 299, 0.06),
  statBlock(50, 2, 5824, 118, 344, 0.06),
  statBlock(50, 3, 6475, 131, 382, 0.12),
  statBlock(60, 3, 7236, 147, 427, 0.12),
  statBlock(60, 4, 7725, 157, 456, 0.12),
  statBlock(70, 4, 8485, 172, 501, 0.12),
  statBlock(70, 5, 8974, 182, 530, 0.18),
  statBlock(80, 5, 9734, 198, 575, 0.18),
  statBlock(80, 6, 10223, 208, 603, 0.24),
  statBlock(90, 6, 10984, 223, 648, 0.24),
];
const Chongyun: Character = {
  name: "Chongyun",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.ATTACK_PERC,
  weapon: WeaponType.CLAYMORE,
  stats,
};

export default Chongyun;
