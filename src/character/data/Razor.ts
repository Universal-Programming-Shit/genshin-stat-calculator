import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 1003, 20, 63, 0),
  statBlock(20, 0, 2577, 50, 162, 0),
  statBlock(20, 1, 3326, 65, 209, 0),
  statBlock(40, 1, 4982, 97, 313, 0),
  statBlock(40, 2, 5514, 108, 346, 0.075),
  statBlock(50, 2, 6343, 124, 398, 0.075),
  statBlock(50, 3, 7052, 138, 443, 0.15),
  statBlock(60, 3, 7881, 154, 495, 0.15),
  statBlock(60, 4, 8413, 164, 528, 0.15),
  statBlock(70, 4, 9241, 180, 580, 0.15),
  statBlock(70, 5, 9773, 191, 613, 0.225),
  statBlock(80, 5, 10602, 207, 665, 0.225),
  statBlock(80, 6, 11134, 217, 699, 0.3),
  statBlock(90, 6, 11962, 234, 751, 0.3),
];
const Razor: Character = {
  name: "Razor",
  element: Element.ELECTRO,
  weapon: WeaponType.CLAYMORE,
  ascensionStat: LevelUpStat.PHYSICAL_DAMAGE,
  stats,
};

export default Razor;
