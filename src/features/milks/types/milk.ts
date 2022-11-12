export type ProtoMilk = {
    brand: string;
    kind: string;
    price: number;
    selected: boolean;
    description: string;
    img: string;
};
export type Milk = {
    id: number;
    brand: string;
    kind: string;
    price: number;
    description: string;
    selected: boolean;
    img: string;
};

export class MilkModel {
    selected: boolean;
    constructor(
        public brand: string,
        public kind: string,
        public price: number,
        public description: string,
        public img: string
    ) {
        this.selected = false;
    }
}
