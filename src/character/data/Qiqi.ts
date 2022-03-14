import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 963, 22, 72, 0),
   statBlock(20, 0, 2498, 58, 186, 0),
   statBlock(20, 1, 3323, 77, 248, 0),
   statBlock(40, 1, 4973, 115, 371, 0),
   statBlock(40, 2, 5559, 129, 415, 0.055),
   statBlock(50, 2, 6396, 148, 477, 0.055),
   statBlock(50, 3, 7178, 167, 535, 0.111),
   statBlock(60, 3, 8023, 186, 598, 0.111),
   statBlock(60, 4, 8610, 200, 642, 0.111),
   statBlock(70, 4, 9463, 220, 706, 0.111),
   statBlock(70, 5, 10050, 233, 749, 0.166),
   statBlock(80, 5, 10912, 253, 814, 0.166),
   statBlock(80, 6, 11499, 267, 857, 0.222),
   statBlock(90, 6, 12368, 287, 922, 0.222)
 ];

const Qiqi: Character = {
  name: "Qiqi",
  element: Element.CRYO,
  weapon: WeaponType.SWORD,
  ascensionStat: LevelUpStat.HEALING_BONUS,
  stats,
};

export default Qiqi;

