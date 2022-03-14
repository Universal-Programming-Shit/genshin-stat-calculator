import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 994, 20, 62, 0),
   statBlock(20, 0, 2553, 53, 160, 0),
   statBlock(20, 1, 3296, 68, 207, 0),
   statBlock(40, 1, 4937, 102, 310, 0),
   statBlock(40, 2, 5464, 113, 343, 24),
   statBlock(50, 2, 6285, 130, 395, 24),
   statBlock(50, 3, 6988, 144, 439, 48),
   statBlock(60, 3, 7809, 161, 491, 48),
   statBlock(60, 4, 8337, 172, 524, 48),
   statBlock(70, 4, 9157, 189, 575, 48),
   statBlock(70, 5, 9684, 200, 608, 72),
   statBlock(80, 5, 10505, 216, 660, 72),
   statBlock(80, 6, 11033, 227, 693, 96),
   statBlock(90, 6, 11854, 244, 745, 96)
 ]
 ;

const Sayu: Character = {
  name: "Sayu",
  element: Element.ANEMO,
  weapon: WeaponType.CLAYMORE,
  ascensionStat: LevelUpStat.ELEMENTAL_MASTERY,
  stats,
};

export default Sayu;
