import { PrintedProduct } from "./PrintedProduct";
export class Magazine extends PrintedProduct {
    circulation!: number;
    price!: number;
    constructor(name: string, circulation: number, price: number) {
        if (circulation < 0) throw new Error ("circulation < 0!");
        if (price < 0) throw new Error ("price < 0!");
        super(name);
        this.circulation = circulation;
        this.price = price;
    }
    override show() {
        return "Назва: " + this.name + " Ціна: " + this.price + " Тираж: " + this.circulation;
    }
    CirculationCost() { return this.price * this.circulation; }
}