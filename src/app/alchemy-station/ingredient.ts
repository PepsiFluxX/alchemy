import { stringify } from 'querystring';

export enum BondType { A = 'A', B = 'B', C = 'C', D = 'D', T = 'T', NULL = 'X' };

export class Effect {
    public myDesc: string;
    public myActiveBond: BondType;

    
    public get bondType() : BondType {
        return this.myActiveBond;
    }

    public get desc() : string {
        return this.myDesc;
    }

    constructor(){
        this.myActiveBond = BondType.NULL;
        this.myDesc = '------------------------------';
    }
    
}

export class Ingredient {

    bond: BondType;
    effect: Effect[];

    name: string;
    numBonds: number;

    icon: string;

    constructor(){
        this.effect = new Array<Effect>(3);
        for(let i=0; i<this.effect.length; i++){
            this.effect[i] = new Effect();
        }
    }
}
