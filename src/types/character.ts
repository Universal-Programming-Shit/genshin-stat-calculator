import {Element} from "./element";
import {LevelUpStat} from "./levelUpStat";
import {CharacterStats} from "./characterStats";
import {WeaponType} from "./weaponType";

export interface Character {
  name: string;
  element: Element;
  ascensionStat: LevelUpStat,
  stats: CharacterStats[]
  weapon: WeaponType
}
