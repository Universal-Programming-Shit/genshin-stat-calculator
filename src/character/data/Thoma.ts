import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 866, 17, 63, 0),
   statBlock(20, 0, 2225, 43, 162, 0),
   statBlock(20, 1, 2872, 56, 209, 0),
   statBlock(40, 1, 4302, 84, 313, 0),
   statBlock(40, 2, 4762, 93, 346, 0.06),
   statBlock(50, 2, 5478, 107, 398, 0.06),
   statBlock(50, 3, 6091, 119, 443, 0.12),
   statBlock(60, 3, 6806, 133, 495, 0.12),
   statBlock(60, 4, 7266, 142, 528, 0.12),
   statBlock(70, 4, 7981, 156, 580, 0.12),
   statBlock(70, 5, 8440, 165, 613, 0.18),
   statBlock(80, 5, 9156, 179, 665, 0.18),
   statBlock(80, 6, 9616, 188, 699, 0.24),
   statBlock(90, 6, 10331, 202, 751, 0.24)
 ]
 ;

const Thoma: Character = {
  name: "Thoma",
  element: Element.PYRO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ATTACK,
  stats,
};

export default Thoma;
