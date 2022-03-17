import { statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { WeaponType } from "../../types/weaponType";
import { LevelUpStat } from "../../types/levelUpStat";

const stats = [
  statBlock(1, 0, 791, 25, 48, 0),
  statBlock(20, 0, 2053, 65, 124, 0),
  statBlock(20, 1, 2731, 87, 165, 0),
  statBlock(40, 1, 4086, 130, 247, 0),
  statBlock(40, 2, 4568, 145, 276, 0.048),
  statBlock(50, 2, 5256, 167, 318, 0.048),
  statBlock(50, 3, 5899, 187, 357, 0.096),
  statBlock(60, 3, 6593, 209, 399, 0.096),
  statBlock(60, 4, 7075, 225, 428, 0.096),
  statBlock(70, 4, 7777, 247, 470, 0.096),
  statBlock(70, 5, 8259, 262, 500, 0.144),
  statBlock(80, 5, 8968, 285, 542, 0.144),
  statBlock(80, 6, 9450, 300, 572, 0.192),
  statBlock(90, 6, 10164, 323, 615, 0.192),
];
const Yoimiya: Character = {
  name: "Yoimiya",
  element: Element.PYRO,
  weapon: WeaponType.BOW,
  ascensionStat: LevelUpStat.CRIT_RATE,
  stats,
};

export default Yoimiya;
