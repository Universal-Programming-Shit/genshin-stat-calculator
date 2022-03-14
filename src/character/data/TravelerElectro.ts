import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 912, 18, 57, 0),
   statBlock(20, 0, 2342, 46, 147, 0),
   statBlock(20, 1, 3024, 59, 190, 0),
   statBlock(40, 1, 4529, 88, 284, 0),
   statBlock(40, 2, 5013, 98, 315, 0.06),
   statBlock(50, 2, 5766, 113, 362, 0.06),
   statBlock(50, 3, 6411, 125, 405, 0.12),
   statBlock(60, 3, 7164, 140, 450, 0.12),
   statBlock(60, 4, 7648, 149, 480, 0.12),
   statBlock(70, 4, 8401, 164, 527, 0.12),
   statBlock(70, 5, 8885, 174, 558, 0.18),
   statBlock(80, 5, 9638, 188, 605, 0.18),
   statBlock(80, 6, 10122, 198, 635, 0.24),
   statBlock(90, 6, 10875, 212, 683, 0.24)
 ]
 ;

const TravelerElectro: Character = {
  name: "Traveler",
  element: Element.ELECTRO,
  weapon: WeaponType.SWORD,
  ascensionStat: LevelUpStat.ATTACK,
  stats,
};

export default TravelerElectro;
