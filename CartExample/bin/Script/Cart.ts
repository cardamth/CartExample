interface ICart {
    name: string;
    count: number;
    price: number;
    imported: boolean;
    taxExempt: boolean;
}

class Cart implements ICart {
    private _name: string = "";
    private _count: number = 0;
    private _price: number = 0.00;
    private _imported: boolean = false;
    private _taxExempt: boolean = false;

    constructor(name: string, count: number, price: number) {
        this._imported = name.indexOf("imported") > 0;
        this._taxExempt = this.TaxExemptItem(name);
        this._name = name.replace(" imported", "");
        this._count = count;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get count(): number {
        return this._count;
    }
    set count(name: number) {
        this._count = name;
    }
    get price(): number {
        return this._price;
    }
    set price(price: number) {
        this._price = price;
    }
    get imported(): boolean {
        return this._imported;
    }
    get taxExempt() {
        return this._taxExempt;
    }

    private TaxExemptItem(value: string): boolean {
        const exemptList: string[] = ["book", "chocolate", "pill"];

        for (var exemptItem of exemptList) {
            if (value.indexOf(exemptItem) > 0) {
                return true;
            }
        }
        return false;
    }
}