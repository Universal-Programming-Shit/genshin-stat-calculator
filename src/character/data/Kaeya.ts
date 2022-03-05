import {statBlock, CharacterStats} from "../../types/characterStats";
import {LevelUpStat} from "../../types/levelUpStat";
import {Element} from "../../types/element";
import {Character} from "../../types/character";
import {WeaponType} from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 976, 19, 66, 0),
  statBlock(20, 0, 2506, 48, 171, 0),
  statBlock(20, 1, 3235, 62, 220, 0),
  statBlock(40, 1, 4846, 93, 330, 0),
  statBlock(40, 2, 5364, 103, 365, 0.067),
  statBlock(50, 2, 6170, 118, 420, 0.067),
  statBlock(50, 3, 6860, 131, 467, 0.133),
  statBlock(60, 3, 7666, 147, 522, 0.133),
  statBlock(60, 4, 8184, 157, 557, 0.133),
  statBlock(70, 4, 8990, 172, 612, 0.133),
  statBlock(70, 5, 9508, 182, 647, 0.20),
  statBlock(80, 5, 10312, 198, 702, 0.20),
  statBlock(80, 6, 10830, 208, 737, 0.267),
  statBlock(90, 6, 11636, 223, 792, 0.267),
];
const Kaeya: Character = {
  name: "Kaeya",
  element: Element.CRYO,
  ascensionStat: LevelUpStat.ENERGY_RECHARGE,
  weapon: WeaponType.SWORD,
  stats,
};

export default Kaeya;