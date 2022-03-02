import {Weapon} from "../../types/weapon";
import catalysts from "./catalysts";
import swords from "./swords";
import bows from "./bows";
import claymores from "./claymores";
import polearms from "./polearms";
import {WeaponType} from "../../types/weaponType";


export default {
  [WeaponType.SWORD]: swords,
  [WeaponType.BOW]: bows,
  [WeaponType.CATALYST]: catalysts,
  [WeaponType.CLAYMORE]: claymores,
  [WeaponType.POLEARM]: polearms} as {[key: WeaponType]: Weapon[]};
