import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 912, 19, 56, 0),
   statBlock(20, 0, 2342, 48, 144, 0),
   statBlock(20, 1, 3024, 63, 186, 0),
   statBlock(40, 1, 4529, 94, 279, 0),
   statBlock(40, 2, 5013, 104, 308, 24),
   statBlock(50, 2, 5766, 119, 355, 24),
   statBlock(50, 3, 6411, 133, 394, 48),
   statBlock(60, 3, 7164, 148, 441, 48),
   statBlock(60, 4, 7648, 158, 470, 48),
   statBlock(70, 4, 8401, 174, 517, 48),
   statBlock(70, 5, 8885, 184, 546, 72),
   statBlock(80, 5, 9638, 200, 593, 72),
   statBlock(80, 6, 10122, 210, 623, 96),
   statBlock(90, 6, 10875, 225, 669, 96)
 ]
 ;

const Xiangling: Character = {
  name: "Xiangling",
  element: Element.PYRO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ELEMENTAL_MASTERY,
  stats,
};

export default Xiangling;
