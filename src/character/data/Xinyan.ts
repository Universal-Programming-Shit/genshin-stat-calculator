import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 939, 21, 67, 0),
   statBlock(20, 0, 2413, 54, 172, 0),
   statBlock(20, 1, 3114, 69, 222, 0),
   statBlock(40, 1, 4665, 103, 333, 0),
   statBlock(40, 2, 5163, 115, 368, 0.06),
   statBlock(50, 2, 5939, 132, 423, 0.06),
   statBlock(50, 3, 6604, 147, 471, 0.12),
   statBlock(60, 3, 7379, 164, 526, 0.12),
   statBlock(60, 4, 7878, 175, 562, 0.12),
   statBlock(70, 4, 8653, 192, 617, 0.12),
   statBlock(70, 5, 9151, 203, 652, 0.18),
   statBlock(80, 5, 9927, 220, 708, 0.18),
   statBlock(80, 6, 10425, 231, 743, 0.24),
   statBlock(90, 6, 11201, 249, 799, 0.24)
 ]
 ;

const Xinyan: Character = {
  name: "Xinyan",
  element: Element.PYRO,
  weapon: WeaponType.CLAYMORE,
  ascensionStat: LevelUpStat.ATTACK,
  stats,
};

export default Xinyan;
