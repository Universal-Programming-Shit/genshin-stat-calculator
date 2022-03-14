import {statBlock} from "../../types/characterStats";
import {Character} from "../../types/character";
import {Element} from "../../types/element";
import {WeaponType} from "../../types/weaponType";
import {LevelUpStat} from "../../types/levelUpStat";

const stats = [
   statBlock(1, 0, 1030, 20, 60, 0),
   statBlock(20, 0, 2647, 52, 153, 0),
   statBlock(20, 1, 3417, 67, 197, 0),
   statBlock(40, 1, 5118, 100, 296, 0),
   statBlock(40, 2, 5665, 111, 327, 0.06),
   statBlock(50, 2, 6516, 127, 376, 0.06),
   statBlock(50, 3, 7245, 141, 418, 0.12),
   statBlock(60, 3, 8096, 158, 468, 0.12),
   statBlock(60, 4, 8643, 169, 499, 0.12),
   statBlock(70, 4, 9493, 185, 548, 0.12),
   statBlock(70, 5, 10040, 196, 580, 0.18),
   statBlock(80, 5, 10891, 213, 629, 0.18),
   statBlock(80, 6, 11438, 223, 661, 0.24),
   statBlock(90, 6, 12289, 240, 710, 0.24)
 ]
 ;

const Rosaria: Character = {
  name: "Rosaria",
  element: Element.CRYO,
  weapon: WeaponType.POLEARM,
  ascensionStat: LevelUpStat.ATTACK,
  stats,
};

export default Rosaria;
