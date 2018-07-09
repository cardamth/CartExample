"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///import { Item } from "./Item";
var Item = /** @class */ (function () {
    function Item(count, name, price) {
        this._name = "";
        this._count = 0;
        this._price = 0.00;
        this._imported = false;
        this._taxExempt = false;
        this._imported = name.indexOf("imported") > 0;
        this._taxExempt = this.TaxExemptItem(name);
        this._name = name;
        this._count = count;
        this._price = price;
    }
    Object.defineProperty(Item.prototype, "ItemName", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ItemCount", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ItemPrice", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ItemImported", {
        get: function () {
            return this._imported;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "ItemTaxExempt", {
        get: function () {
            return this._taxExempt;
        },
        enumerable: true,
        configurable: true
    });
    Item.prototype.LineOfCartItem = function () {
        return this._name + " " + this._price;
    };
    Item.prototype.TaxExemptItem = function (value) {
        var exemptList = ["book", "chocolate", "pill"];
        for (var _i = 0, exemptList_1 = exemptList; _i < exemptList_1.length; _i++) {
            var exemptItem = exemptList_1[_i];
            if (value.indexOf(exemptItem) > 0) {
                return true;
            }
        }
        return false;
    };
    return Item;
}());
var TestA = /** @class */ (function () {
    function TestA(greeting) {
        this.greeting = greeting;
        this.salesTax = .1;
        this.importTax = .05;
    }
    TestA.prototype.FormatDuplicateDescription = function (data) {
        return "'" + data + "'";
    };
    TestA.prototype.RoundNickel = function (data) {
        return Math.ceil(data * 20) / 20;
    };
    TestA.prototype.FirstCharacterUpper = function (data) {
        switch (data) {
            case null: return "";
            case "": return "";
            default: return data.substring(0, 1).toUpperCase() + data.substring(1);
        }
    };
    TestA.prototype.round = function (number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
    ;
    TestA.prototype.testList = function () {
        //itemData: string        
        var testData = "1 book at 12.49";
        var itemData = testData.split("\n");
        var exemptList = ["book", "chocolate", "pill"];
        var currencyFormat = "N2";
        var existingItems = "  ";
        var ItemList;
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
                    if (itemDescription.indexOf(item.ItemName) >= 0) {
                        item.ItemCount += 1;
                    }
                });
            }
            else {
                var itemToAdd = new Item(count, itemDescription, price);
                ItemList.push(itemToAdd);
                existingItems += this.FormatDuplicateDescription(itemDescription);
            }
            var printedSalesTax = 0;
            var itemTotal = 0;
            var totalSalesTax = 0;
            var totalAmount = 0;
            ItemList.forEach(function (item) {
                printedSalesTax = this.RoundNickel((item.ItemTaxExempt ? 0 : item.ItemPrice * this.importTax));
                printedSalesTax += this.RoundNickel((item.ItemImported ? item.ItemPrice * this.importTax : 0));
                itemTotal = (item.ItemPrice * item.ItemCount) + (printedSalesTax * item.ItemCount);
                totalSalesTax += this.RoundNickel(item.ItemTaxExempt ? 0 : item.ItemPrice * this.salesTax) * item.ItemCount + this.RoundNickel(item.ItemImported ? item.ItemPrice * this.importTax : 0) * item.ItemCount;
                totalAmount += itemTotal;
                this.solutionString += this.FirstCharacterUpper((item.ItemImported ? "imported " : "") + item.ItemName.replace("imported ", "").trim()) + ": " + itemTotal.toFixed(2) + (item.ItemCount <= 1 ? "" : " (" + item.ItemCount + " @" + this.round(item.ItemPrice + printedSalesTax, 2) + ")") + "\n";
            });
            this.greeting += "Sales Taxes: " + totalSalesTax.toFixed(2) + "\n";
            this.greeting += "Total: " + totalAmount.toFixed(2);
        }
        return "<h1>" + this.greeting + "</h1>";
    };
    TestA.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return TestA;
}());
;
var greeter = new TestA("1 book at 12.49");
document.body.innerHTML = greeter.testList();
//document.body.innerHTML = testData.createShoppingList("1 book at 12.49");
//# sourceMappingURL=Tester.js.map