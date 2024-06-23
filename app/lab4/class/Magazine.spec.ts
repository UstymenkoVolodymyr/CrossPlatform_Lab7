import { Magazine } from "./Magazine";
describe("Тестування класу Magazine", () => {
    let magazine: Magazine;
    beforeEach(() => {
        magazine = new Magazine("Журнал", 1000, 100);
    });
    it("Створення екземпляру класу", () => {
        expect(magazine).toBeTruthy();
    });
    it("Створення екземпляру класу з від'ємним тиражем", () => {
        expect(() => new Magazine("Журнал", -1000, 100)).toThrow(new Error ("circulation < 0!"));
    });
    it("Створення екземпляру класу з від'ємною ціною", () => {
        expect(() => new Magazine("Журнал", 1000, -100)).toThrow(new Error ("price < 0!"));
    });
    it("Виведення властивостей об'єкта класу", () => {
        let result: string = "Назва: Журнал Ціна: 100 Тираж: 1000";
        expect(magazine.show()).toEqual(result);
    });
    it("Розрахунок вартості тиражу", () => {
        expect(magazine.CirculationCost()).toEqual(100 * 1000);
    });
});