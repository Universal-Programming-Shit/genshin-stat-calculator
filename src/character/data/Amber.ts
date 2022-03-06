import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 793, 19, 50, 0),
  statBlock(20, 0, 2038, 48, 177, 0),
  statBlock(20, 1, 2630, 62, 129, 0),
  statBlock(40, 1, 3940, 93, 250, 0),
  statBlock(40, 2, 4361, 103, 277, 0.06),
  statBlock(50, 2, 5016, 118, 318, 0.06),
  statBlock(50, 3, 5578, 131, 354, 0.12),
  statBlock(60, 3, 6233, 147, 396, 0.12),
  statBlock(60, 4, 6654, 157, 422, 0.12),
  statBlock(70, 4, 7309, 172, 464, 0.12),
  statBlock(70, 5, 7730, 182, 491, 0.18),
  statBlock(80, 5, 8385, 198, 532, 0.18),
  statBlock(80, 6, 8806, 208, 559, 0.24),
  statBlock(90, 6, 9461, 223, 601, 0.24),
];
const Amber: Character = {
  name: "Amber",
  element: Element.PYRO,
  ascensionStat: LevelUpStat.ATTACK,
  weapon: WeaponType.BOW,
  stats,
};

export default Amber;
