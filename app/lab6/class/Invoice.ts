import { Document } from "./Document";
import { ITotalPrice } from "./ITotalPrice";
export class Invoice extends Document implements ITotalPrice {
    ware_description!: string;
    ware_number!: number;
    unit_price!: number;
    total_price!: number;
    constructor(
        nn: string, date: string, seller: string, buyer: string,
        ware_d: string, ware_n: number, unit_p: number
    ) {
        if (ware_n < 0) throw new Error ("ware_number < 0!");
        if (unit_p < 0) throw new Error ("unit_price < 0!");
        super(nn, date, seller, buyer);
        this.ware_description = ware_d;
        this.ware_number = ware_n;
        this.unit_price = unit_p;
    }
    totalPrice() {
        this.total_price = this.ware_number * this.unit_price;
    }
    show() {
        let a = "\nНомер документа: " + this.nn + "\nДата складання: " + this.date;
        let b = "\nПродавець: "+ this.seller + "\nПокупець: "+ this.buyer;
        let c = "\nОпис товарів: " + this.ware_description + "\nКількість товарів: " + this.ware_number;
        let d = "\nЦіна за одиницю: "+ this.unit_price + "\nСума до сплати: "+ this.total_price;
        return a + b + c + d;
    }
}