import { PrintedProduct } from "./PrintedProduct";
export class Poster extends PrintedProduct {
    circulation!: number;
    width!: number;
    height!: number;
    price_cm2!: number;
    constructor(name: string, circulation: number, width: number, height: number, price_cm2: number) {
        if (circulation < 0) throw new Error ("circulation < 0!");
        if (width < 0) throw new Error ("width < 0!");
        if (height < 0) throw new Error ("height < 0!");
        if (price_cm2 < 0) throw new Error ("price_cm2 < 0!");
        super(name);
        this.circulation = circulation;
        this.width = width;
        this.height = height;
        this.price_cm2 = price_cm2;
    }
    override show() {
        let a: string =  "Назва: " + this.name + " Ширина: " + this.width + " Висота: " + this.height;
        let b: string = " Ціна за кв. сантиметр: "+ this.price_cm2 + " Тираж: "+ this.circulation;
        return a + b;
    }
    CirculationCost() {
        let area = this.width * this.height;
        return area * this.price_cm2 * this.circulation;
    }
}