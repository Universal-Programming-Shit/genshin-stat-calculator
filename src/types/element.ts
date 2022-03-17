export enum Element {
  ANEMO = "Anemo",
  GEO = "Geo",
  PYRO = "Pyro",
  HYDRO = "Hydro",
  ELECTRO = "Electro",
  CRYO = "Cryo",
  DENDRO = "Dendro",
}

export function getColor(element: Element) {
  switch (element) {
    case Element.ANEMO:
      return "#75c3a9";
    case Element.GEO:
      return "#fab72e";
    case Element.PYRO:
      return "#ef7a35";
    case Element.HYDRO:
      return "#4bc3f1";
    case Element.ELECTRO:
      return "#b18fc2";
    case Element.CRYO:
      return "#a0d7e4";
    case Element.DENDRO:
      return "#a6c938";
    default:
      return "#FFF";
  }
}
