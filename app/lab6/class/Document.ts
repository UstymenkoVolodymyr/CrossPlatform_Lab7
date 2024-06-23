import { IShow } from "./IShow";
export abstract class Document implements IShow {
    nn!: string;
    date!: string;
    seller!: string;
    buyer!: string;
    constructor(nn: string, date: string, seller: string, buyer: string) {
        this.nn = nn;
        this.date = date;
        this.seller = seller;
        this.buyer = buyer;
    }
    abstract show(): void;
}