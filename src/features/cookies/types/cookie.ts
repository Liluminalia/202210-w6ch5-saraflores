export type ProtoCookie = {
    price: number;
};
export type Cookie = {
    id: number;
    brand: string;
    kind: string;
    price: number;
    description: string;
    selected: boolean;
    img: string;
};
export class CookieModel {
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
