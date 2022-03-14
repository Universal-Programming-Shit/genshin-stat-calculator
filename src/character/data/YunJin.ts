import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 894, 16, 62, 0),
   statBlock(20, 0, 2296, 41, 156, 0),
   statBlock(20, 1, 2963, 53, 204, 0),
   statBlock(40, 1, 4438, 80, 306, 0),
   statBlock(40, 2, 4913, 88, 339, 0.067),
   statBlock(50, 2, 5651, 101, 389, 0.067),
   statBlock(50, 3, 6283, 113, 433, 0.133),
   statBlock(60, 3, 7021, 126, 484, 0.133),
   statBlock(60, 4, 7495, 134, 517, 0.133),
   statBlock(70, 4, 8233, 148, 567, 0.133),
   statBlock(70, 5, 8707, 156, 600, 0.2),
   statBlock(80, 5, 9445, 169, 651, 0.2),
   statBlock(80, 6, 9919, 178, 684, 0.267),
   statBlock(90, 6, 10657, 191, 734, 0.267)
 ]
 ;

const YunJin: Character = {
  name: "Yun Jin",
  element: Element.GEO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ENERGY_RECHARGE,
  stats,
};

export default YunJin;
