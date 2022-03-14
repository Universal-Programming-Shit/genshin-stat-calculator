import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";

const stats = [
  statBlock(1, 0, 1005, 26, 61, 0),
  statBlock(20, 0, 2606, 68, 159, 0),
  statBlock(20, 1, 3468, 91, 212, 0),
  statBlock(40, 1, 5189, 136, 317, 0),
  statBlock(40, 2, 5801, 152, 355, 0.08),
  statBlock(50, 2, 6675, 175, 408, 0.08),
  statBlock(50, 3, 7491, 196, 458, 0.16),
  statBlock(60, 3, 8373, 219, 512, 0.16),
  statBlock(60, 4, 8985, 235, 549, 0.16),
  statBlock(70, 4, 9875, 258, 604, 0.16),
  statBlock(70, 5, 10487, 274, 641, 0.24),
  statBlock(80, 5, 11388, 298, 696, 0.24),
  statBlock(80, 6, 12000, 314, 737, 0.32),
  statBlock(90, 6, 12907, 337, 789, 0.32),
];

const RaidenShogun: Character = {
  name: "Raiden Shogun",
  element: Element.ELECTRO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ENERGY_RECHARGE,
  stats,
};

export default RaidenShogun;
