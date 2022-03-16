import { CharacterStats, statBlock } from "../../types/characterStats";
import { Character } from "../../types/character";
import { Element } from "../../types/element";
import { LevelUpStat } from "../../types/levelUpStat";
import { WeaponType } from "../../types/weaponType";

const stats: CharacterStats[] = [
  statBlock(1, 0, 821, 18, 48, 0),
  statBlock(20, 0, 2108, 46, 123, 0),
  statBlock(20, 1, 2721, 59, 159, 0),
  statBlock(40, 1, 4076, 88, 239, 0),
  statBlock(40, 2, 4512, 98, 264, 0.06),
  statBlock(50, 2, 5189, 113, 304, 0.06),
  statBlock(50, 3, 5770, 125, 338, 0.12),
  statBlock(60, 3, 6448, 140, 378, 0.12),
  statBlock(60, 4, 6884, 149, 403, 0.12),
  statBlock(70, 4, 7561, 164, 443, 0.12),
  statBlock(70, 5, 7996, 174, 468, 0.18),
  statBlock(80, 5, 8674, 188, 508, 0.18),
  statBlock(80, 6, 9110, 198, 534, 0.24),
  statBlock(90, 6, 9787, 212, 573, 0.24),
];

const Ningguang: Character = {
  name: "Ningguang",
  element: Element.GEO,
  ascensionStat: LevelUpStat.ELEMENTAL_DAMAGE,
  weapon: WeaponType.CATALYST,
  stats,
};

export default Ningguang;
