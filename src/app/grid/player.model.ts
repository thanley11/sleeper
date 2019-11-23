export class Player {
    public id: string;
    public rank: number;
    public name: string;
    public position: Position;
    public bye: number;
    public url: string;
    public team: string;
  }

export enum Position {
    QB,
    RB,
    WR,
    TE,
    DEF,
    K
}
