
export class Item {
    private _name: string = "";
    private _count: number = 0;
    private _price: number = 0.00;
    private _imported: boolean = false;
    private _taxExempt: boolean = false;


    public constructor(count: number, name: string, price: number) {
        this._imported = name.indexOf("imported") > 0;
        this._taxExempt = this.TaxExemptItem(name);
        this._name = name;
        this._count = count;
        this._price = price;
    }


    public set ItemName(value: string) {
        this._name = value;
    }
    public get ItemName() {
        return this._name;
    }

    public set ItemCount(value: number) {
        this._count = value;
    }
    public get ItemCount() {
        return this._count;
    }

    public set ItemPrice(value: number) {
        this._price = value;
    }
    public get ItemPrice() {
        return this._price;
    }

    public get ItemImported() {
        return this._imported;
    }

    public get ItemTaxExempt() {
        return this._taxExempt;
    }

    public LineOfCartItem(): string {
        return this._name + " " + this._price;
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