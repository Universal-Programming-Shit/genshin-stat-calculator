import { statBlock, CharacterStats } from "../../types/characterStats";
import { LevelUpStat } from "../../types/levelUpStat";
import { Element } from "../../types/element";
import { Character } from "../../types/character";
import { WeaponType } from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1011, 26, 61, 0),
  statBlock(20, 0, 2621, 68, 158, 0),
  statBlock(20, 1, 3488, 90, 211, 0),
  statBlock(40, 1, 5219, 135, 315, 0),
  statBlock(40, 2, 5834, 151, 352, 0.048),
  statBlock(50, 2, 6712, 173, 405, 0.048),
  statBlock(50, 3, 7533, 194, 455, 0.096),
  statBlock(60, 3, 8421, 217, 509, 0.096),
  statBlock(60, 4, 9036, 233, 546, 0.096),
  statBlock(70, 4, 9932, 256, 600, 0.096),
  statBlock(70, 5, 10547, 272, 637, 0.144),
  statBlock(80, 5, 11453, 295, 692, 0.144),
  statBlock(80, 6, 12068, 311, 729, 0.192),
  statBlock(90, 6, 12981, 335, 784, 0.192),
];
const Diluc: Character = {
  name: "Diluc",
  element: Element.PYRO,
  ascensionStat: LevelUpStat.CRIT_RATE,
  weapon: WeaponType.CLAYMORE,
  stats,
};

export default Diluc;
