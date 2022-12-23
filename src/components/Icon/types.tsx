export enum IconTypes {
  Arrow_NE = "Arrow_NE",
  Arrow_Right = "Arrow_Right",
}

export interface IconInterface {
  type: IconTypes.Arrow_NE | IconTypes.Arrow_Right | "default";
}
