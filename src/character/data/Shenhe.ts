import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 1011, 24, 65, 0),
  statBlock(20, 0, 2624, 61, 168, 0),
  statBlock(20, 1, 3491, 82, 223, 0),
  statBlock(40, 1, 5224, 122, 334, 0),
  statBlock(40, 2, 5840, 137, 373, 0.072),
  statBlock(50, 2, 6719, 157, 429, 0.072),
  statBlock(50, 3, 7540, 176, 482, 0.144),
  statBlock(60, 3, 8429, 197, 538, 0.144),
  statBlock(60, 4, 9045, 211, 578, 0.144),
  statBlock(70, 4, 9941, 232, 635, 0.144),
  statBlock(70, 5, 10557, 247, 674, 0.216),
  statBlock(80, 5, 11463, 268, 732, 0.216),
  statBlock(80, 6, 12080, 282, 772, 0.288),
  statBlock(90, 6, 12993, 304, 830, 0.288),
];
const Shenhe: Character = {
  name: "Shenhe",
  element: Element.CRYO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ATTACK,
  stats,
};

export default Shenhe;
