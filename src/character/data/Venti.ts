import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 820, 20, 52, 0),
   statBlock(20, 0, 2127, 53, 135, 0),
   statBlock(20, 1, 2830, 71, 180, 0),
   statBlock(40, 1, 4234, 106, 269, 0),
   statBlock(40, 2, 4734, 118, 301, 0.08),
   statBlock(50, 2, 5446, 136, 346, 0.08),
   statBlock(50, 3, 6112, 153, 388, 0.16),
   statBlock(60, 3, 6832, 171, 434, 0.16),
   statBlock(60, 4, 7331, 183, 465, 0.16),
   statBlock(70, 4, 8058, 201, 512, 0.16),
   statBlock(70, 5, 8557, 214, 543, 0.24),
   statBlock(80, 5, 9292, 232, 590, 0.24),
   statBlock(80, 6, 9790, 245, 622, 0.32),
   statBlock(90, 6, 10531, 263, 669, 0.32)
 ]
 ;

const Venti: Character = {
  name: "Venti",
  element: Element.ANEMO,
  weapon: WeaponType.BOW,
  ascensionStat: LevelUpStat.ENERGY_RECHARGE,
  stats,
};

export default Venti;
