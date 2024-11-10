import { Dispatch, SetStateAction } from "react";

export class Shot {
    private _type: Shot.Type = Shot.Type.Unknown;

    // constructor() { }
    set type(t: Shot.Type) { this._type = t; }
    get type(): Shot.Type { return this._type; }
}

export namespace Shot {
    export enum Type { Blank, Live, Unknown }
}

export class Chamber {
    private readonly _shots: Array<Shot>;
    private readonly _blank: number;
    private readonly _live: number;

    constructor(shots: Array<Shot>, l: number, r: number) {
        this._shots = shots;
        this._live = l;
        this._blank = r;
    }

    private shots_of(type: Shot.Type): number { return this._shots.reduce((prev, shot) => prev += shot.type == type ? 1 : 0, 0) }

    get live(): number { return this._live }
    get blank(): number { return this._blank }

    get known_live(): number { return this.shots_of(Shot.Type.Live) }
    get known_blank(): number { return this.shots_of(Shot.Type.Blank) }

    get unknown_live(): number { return this._live - this.known_live }
    get unknown_blank(): number { return this._blank - this.known_blank }
    get unknown_shots(): number { return this.shots_of(Shot.Type.Unknown) }

    get next_live_chance(): number { return this.unknown_shots > 0 ? this.unknown_live / this.unknown_shots : 0; }

    get shots(): Array<Shot> { return this._shots; }
}

type Setter = Dispatch<SetStateAction<number>>;
export type RoundsDataSet = {
    rounds: { lives: number, blanks: number },
    set: { Lives: Setter, Blanks: Setter }
};