"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./Item");
var ShoppingList = /** @class */ (function () {
    function ShoppingList(solutionString) {
        this.solutionString = solutionString;
    }
    ShoppingList.prototype.testMe = function () {
        alert("test");
    };
    ShoppingList.prototype.createShoppingList = function (itemData) {
        var exemptList = ["book", "chocolate", "pill"];
        var currencyFormat = "N2";
        var ItemList;
        var existingItems = "  ";
        for (var x = 0; x < itemData.length; x++) {
            var help = new Helper();
            var tax = new Taxes();
            if (itemData[count].indexOf("at") <= 0) {
                throw "Invalid List, no 'at' for item " + (x + 1);
            }
            var itemCountNameAndPrice = itemData[x].split(" at ");
            if (itemData[x].length <= 3) {
                throw "Invalid List, does not contain all variables";
            }
            var count = Number(itemCountNameAndPrice[0].substring(0, itemCountNameAndPrice[0].indexOf(" ")));
            var itemDescription = itemCountNameAndPrice[0].substring(itemCountNameAndPrice[0].indexOf(" "));
            var price = Number(itemCountNameAndPrice[1]);
            if (existingItems.indexOf(help.FormatDuplicateDescription(itemDescription)) > 0) {
                ItemList.forEach(function (item) {
                    if (itemDescription.indexOf(item.ItemName) >= 0) {
                        item.ItemCount += 1;
                    }
                });
            }
            else {
                var itemToAdd = new Item_1.Item(count, itemDescription, price);
                ItemList.push(itemToAdd);
                existingItems += help.FormatDuplicateDescription(itemDescription);
            }
            var printedSalesTax = 0;
            var itemTotal = 0;
            var totalSalesTax = 0;
            var totalAmount = 0;
            ItemList.forEach(function (item) {
                printedSalesTax = help.RoundNickel((item.ItemTaxExempt ? 0 : item.ItemPrice * tax.importTax));
                printedSalesTax += help.RoundNickel((item.ItemImported ? item.ItemPrice * tax.importTax : 0));
                itemTotal = (item.ItemPrice * item.ItemCount) + (printedSalesTax * item.ItemCount);
                totalSalesTax += help.RoundNickel(item.ItemTaxExempt ? 0 : item.ItemPrice * tax.salesTax) * item.ItemCount + help.RoundNickel(item.ItemImported ? item.ItemPrice * tax.importTax : 0) * item.ItemCount;
                totalAmount += itemTotal;
                this.solutionString += help.FirstCharacterUpper((item.ItemImported ? "imported " : "") + item.ItemName.replace("imported ", "").trim()) + ": " + itemTotal.toFixed(2) + (item.ItemCount <= 1 ? "" : " (" + item.ItemCount + " @" + help.round(item.ItemPrice + printedSalesTax, 2) + ")") + "\n";
            });
            this.solutionString += "Sales Taxes: " + totalSalesTax.toFixed(2) + "\n";
            this.solutionString += "Total: " + totalAmount.toFixed(2);
        }
        return this.solutionString;
    };
    return ShoppingList;
}());
//# sourceMappingURL=ShoppingList.js.map