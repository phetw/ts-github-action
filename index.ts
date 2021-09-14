export default class Students {
    age: number;
    name: string;
    roll_no: number;

    constructor(age: number, name: string, roll_no: number) {
        this.age = age;
        this.name = name;
        this.roll_no = roll_no;
    }

    getRollNo (): number {
        return this.roll_no;
    }

    getName (): string {
        return this.name;
    }

    getAge (): number {
        return this.age;
    }
}