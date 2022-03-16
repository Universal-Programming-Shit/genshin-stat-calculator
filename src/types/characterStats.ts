export interface CharacterStats {
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  level: number;
  ascensions: number;
  ascentionStatValue: number;
}

export function statBlock(
  level: number,
  ascensions: number,
  baseHp: number,
  baseAtk: number,
  baseDef: number,
  ascentionStatValue: number
): CharacterStats {
  return { level, ascensions, baseHp, baseAtk, baseDef, ascentionStatValue };
}

export const StatNames = {
  name: "Name",
  level: "Level",
  baseHp: "Base HP",
  baseAtk: "Base Attack",
  baseDef: "Base Defense",
  element: "Element",
  ascensions: "Ascensions",
  ascensionStat: "Ascension Stat",
  ascentionStatValue: "Ascension Stat Value",
};
