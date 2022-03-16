import { statBlock, CharacterStats } from "../../types/characterStats";
import { LevelUpStat } from "../../types/levelUpStat";
import { Element } from "../../types/element";
import { Character } from "../../types/character";
import { WeaponType } from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 1030, 27, 58, 0),
  statBlock(20, 0, 2671, 69, 152, 0),
  statBlock(20, 1, 3554, 92, 202, 0),
  statBlock(40, 1, 5317, 138, 302, 0),
  statBlock(40, 2, 5944, 154, 337, 0.096),
  statBlock(50, 2, 6839, 177, 388, 0.096),
  statBlock(50, 3, 7675, 199, 436, 0.192),
  statBlock(60, 3, 8579, 222, 487, 0.192),
  statBlock(60, 4, 9207, 238, 523, 0.192),
  statBlock(70, 4, 10119, 262, 574, 0.192),
  statBlock(70, 5, 10746, 278, 610, 0.288),
  statBlock(80, 5, 11669, 302, 662, 0.288),
  statBlock(80, 6, 12296, 318, 698, 0.384),
  statBlock(90, 6, 13226, 342, 751, 0.384),
];
const Eula: Character = {
  name: "Eula",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.CRIT_DAMAGE,
  weapon: WeaponType.CLAYMORE,
  stats,
};

export default Eula;
