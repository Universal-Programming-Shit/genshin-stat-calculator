import { statBlock, CharacterStats } from "../../types/characterStats";
import { LevelUpStat } from "../../types/levelUpStat";
import { Element } from "../../types/element";
import { Character } from "../../types/character";
import { WeaponType } from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 801, 24, 48, 0),
  statBlock(20, 0, 2077, 63, 124, 0),
  statBlock(20, 1, 2764, 84, 165, 0),
  statBlock(40, 1, 4136, 125, 247, 0),
  statBlock(40, 2, 4623, 140, 276, 0.072),
  statBlock(50, 2, 5319, 161, 318, 0.072),
  statBlock(50, 3, 5970, 180, 357, 0.144),
  statBlock(60, 3, 6673, 202, 399, 0.144),
  statBlock(60, 4, 7161, 216, 428, 0.144),
  statBlock(70, 4, 7870, 238, 470, 0.144),
  statBlock(70, 5, 8358, 253, 500, 0.216),
  statBlock(80, 5, 9076, 274, 542, 0.216),
  statBlock(80, 6, 9563, 289, 572, 0.288),
  statBlock(90, 6, 10287, 311, 615, 0.288),
];
const Klee: Character = {
  name: "Klee",
  element: Element.PYRO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.CATALYST,
  stats,
};

export default Klee;
