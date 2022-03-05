import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 763, 26, 49, 0),
  statBlock(20, 0, 1978, 68, 127, 0),
  statBlock(20, 1, 2632, 90, 169, 0),
  statBlock(40, 1, 3939, 135, 253, 0),
  statBlock(40, 2, 4403, 151, 283, 0.096),
  statBlock(50, 2, 5066, 173, 326, 0.096),
  statBlock(50, 3, 5686, 194, 366, 0.192),
  statBlock(60, 3, 6355, 217, 409, 0.192),
  statBlock(60, 4, 6820, 233, 439, 0.192),
  statBlock(70, 4, 7495, 256, 482, 0.192),
  statBlock(70, 5, 7960, 272, 512, 0.288),
  statBlock(80, 5, 8643, 295, 556, 0.288),
  statBlock(80, 6, 9108, 311, 586, 0.384),
  statBlock(90, 6, 9797, 335, 630, 0.384),
];
const Ganyu: Character = {
  name: "Ganyu",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.CRIT_DAMAGE,
  weapon: WeaponType.BOW,
  stats,
};

export default Ganyu;
