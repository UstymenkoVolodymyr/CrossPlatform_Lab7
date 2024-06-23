export abstract class PrintedProduct {
    name!: string;
    constructor(name: string) {
        this.name = name;
    }
    show() { return "Назва: " + this.name; }
    abstract CirculationCost(): number;
}