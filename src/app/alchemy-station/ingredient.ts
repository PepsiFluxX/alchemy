enum BondType { A = 1, B, C, G, P, T };

class Effect {
    private myDesc: string;
    private myActiveBond: BondType;

    
    public get bondType() : BondType {
        return this.myActiveBond;
    }

    public get desc() : string {
        return this.myDesc;
    }
    
}

export class Ingredient {

    bond: BondType;
    effect: Effect;

    name: string;
    numBonds: number;

    icon: string;
}
