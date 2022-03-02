import {CharacterStats, statBlock} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";


const stats: CharacterStats[] = [
  statBlock(1, 0, 810, 22, 51, 0),
  statBlock(20, 0, 2102, 58, 132, 0),
  statBlock(20, 1, 2797, 77, 176, 0),
  statBlock(40, 1, 4185, 115, 263, 0),
  statBlock(40, 2, 4678, 129, 294, 0.08),
  statBlock(50, 2, 5383, 148, 338, 0.08),
  statBlock(50, 3, 6041, 167, 379, 0.16),
  statBlock(60, 3, 6752, 186, 424, 0.16),
];

const Mona: Character = {
  name: "Mona",
  element: Element.HYDRO,
  ascensionStat: LevelUpStat.ENERGY_RECHARGE,
  weapon: WeaponType.CATALYST,
  stats,
};

export default Mona;
