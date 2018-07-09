import { InterfaceItem } from "./interface/InterfaceItem";
///import { Item } from "./Item";

class Item {
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

class TestA {
    public salesTax: number = .1;
    public importTax: number = .05;

    constructor(public greeting: string) {

    }


    FormatDuplicateDescription(data: string): string {
        return "'" + data + "'";
    }

    RoundNickel(data: number): number {
        return Math.ceil(data * 20) / 20;
    }

    FirstCharacterUpper(data: string): string {
        switch (data) {
            case null: return "";
            case "": return "";
            default: return data.substring(0, 1).toUpperCase() + data.substring(1);
        }
    }

    round(number: number, precision: number) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };



    testList() {
        //itemData: string        
        var testData: string = "1 book at 12.49";

        var itemData: string[] = testData.split("\n");
        let exemptList: string[] = ["book", "chocolate", "pill"];
        var currencyFormat = "N2";
        var existingItems: string = "  ";
        var ItemList: Item[];


        for (var count = 0; count < itemData.length; count++) {
            //var help: Helper = new Helper();
            //var tax: Taxes = new Taxes();            
            if (itemData[count].indexOf("at") <= 0) {
                throw "Invalid List, no 'at' for item " + (count + 1);
            }
            var itemCountNameAndPrice = itemData[count].split(" at ");

            if (itemData[count].length <= 3) {
                throw "Invalid List, does not contain all variables";
            }

            var count = Number(itemCountNameAndPrice[0].substring(0, itemCountNameAndPrice[0].indexOf(" ")));
            var itemDescription = itemCountNameAndPrice[0].substring(itemCountNameAndPrice[0].indexOf(" "));
            var price = Number(itemCountNameAndPrice[1]);

            if (existingItems.indexOf(this.FormatDuplicateDescription(itemDescription)) > 0) {
                ItemList.forEach(function (item) {
                    if (itemDescription.indexOf(item.ItemName) >= 0) { item.ItemCount += 1; }
                })
            }
            else {
                var itemToAdd: Item = new Item(count, itemDescription, price);
                ItemList.push(itemToAdd);
                existingItems += this.FormatDuplicateDescription(itemDescription);
            }
            var printedSalesTax: number = 0;
            var itemTotal: number = 0;
            var totalSalesTax: number = 0;
            var totalAmount: number = 0;

            ItemList.forEach(function (item) {
                printedSalesTax = this.RoundNickel((item.ItemTaxExempt ? 0 : item.ItemPrice * this.importTax));
                printedSalesTax += this.RoundNickel((item.ItemImported ? item.ItemPrice * this.importTax : 0));
                itemTotal = (item.ItemPrice * item.ItemCount) + (printedSalesTax * item.ItemCount);
                totalSalesTax += this.RoundNickel(item.ItemTaxExempt ? 0 : item.ItemPrice * this.salesTax) * item.ItemCount + this.RoundNickel(item.ItemImported ? item.ItemPrice * this.importTax : 0) * item.ItemCount;
                totalAmount += itemTotal;
                this.solutionString += this.FirstCharacterUpper((item.ItemImported ? "imported " : "") + item.ItemName.replace("imported ", "").trim()) + ": " + itemTotal.toFixed(2) + (item.ItemCount <= 1 ? "" : " (" + item.ItemCount + " @" + this.round(item.ItemPrice + printedSalesTax, 2) + ")") + "\n";
            })
            this.greeting += "Sales Taxes: " + totalSalesTax.toFixed(2) + "\n";
            this.greeting += "Total: " + totalAmount.toFixed(2);
        }
        return "<h1>" + this.greeting + "</h1>";
    }

    




    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new TestA("1 book at 12.49");

document.body.innerHTML = greeter.testList();
//document.body.innerHTML = testData.createShoppingList("1 book at 12.49");
