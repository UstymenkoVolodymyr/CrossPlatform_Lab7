import { Document } from "./Document";
import { ITotalPrice } from "./ITotalPrice";
export class Receipt extends Document implements ITotalPrice {
    purpose!: string;
    ware_number!: number;
    unit_price!: number;
    total_price!: number;
    constructor(
        nn: string, date: string, seller: string, buyer: string,
        purpose: string, ware_n: number, unit_p: number
    ) {
        if (ware_n < 0) throw new Error ("ware_number < 0!");
        if (unit_p < 0) throw new Error ("unit_price < 0!");
        super(nn, date, seller, buyer);
        this.ware_number = ware_n;
        this.unit_price = unit_p;
        this.purpose = purpose;
    }
    totalPrice() {
        this.total_price = this.ware_number * this.unit_price;
    }
    show() {
        let a = "\nНомер документа: " + this.nn + "\nДата складання: " + this.date;
        let b = "\nПродавець: "+ this.seller + "\nПокупець: "+ this.buyer;
        let c = "\nПризначення платежу: " + this.purpose;
        let d = "\nСума платежу: "+ this.total_price;
        return a + b + c + d;
    }
}