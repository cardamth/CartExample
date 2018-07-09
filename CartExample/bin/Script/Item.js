"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Item = Item;
//# sourceMappingURL=Item.js.map