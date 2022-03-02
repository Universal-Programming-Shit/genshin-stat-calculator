import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 784, 20, 49, 0),
  statBlock(20, 0, 2014, 52, 126, 0),
  statBlock(20, 1, 2600, 67, 163, 0),
  statBlock(40, 1, 3895, 100, 244, 0),
  statBlock(40, 2, 4311, 111, 271, 0.06),
  statBlock(50, 2, 4959, 127, 311, 0.06),
  statBlock(50, 3, 5514, 141, 346, 0.12),
  statBlock(60, 3, 6161, 158, 387, 0.12),
  statBlock(60, 4, 6578, 169, 413, 0.12),
  statBlock(70, 4, 7225, 185, 453, 0.12),
  statBlock(70, 5, 7641, 196, 480, 0.18),
  statBlock(80, 5, 8289, 213, 520, 0.18),
  statBlock(80, 6, 8705, 223, 546, 0.24),
  statBlock(90, 6, 9352, 240, 587, 0.24),
];
const Yanfei: Character = {
  name: "Yanfei",
  element: Element.PYRO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.CATALYST,
  stats,
};

export default Yanfei;
