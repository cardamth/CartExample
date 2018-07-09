var Cart = /** @class */ (function () {
    function Cart(name, count, price) {
        this._name = "";
        this._count = 0;
        this._price = 0.00;
        this._imported = false;
        this._taxExempt = false;
        this._imported = name.indexOf("imported") > 0;
        this._taxExempt = this.TaxExemptItem(name);
        this._name = name.replace(" imported", "");
        this._count = count;
        this._price = price;
    }
    Object.defineProperty(Cart.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (name) {
            this._count = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "imported", {
        get: function () {
            return this._imported;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "taxExempt", {
        get: function () {
            return this._taxExempt;
        },
        enumerable: true,
        configurable: true
    });
    Cart.prototype.TaxExemptItem = function (value) {
        var exemptList = ["book", "chocolate", "pill"];
        for (var _i = 0, exemptList_1 = exemptList; _i < exemptList_1.length; _i++) {
            var exemptItem = exemptList_1[_i];
            if (value.indexOf(exemptItem) > 0) {
                return true;
            }
        }
        return false;
    };
    return Cart;
}());
//# sourceMappingURL=Cart.js.map