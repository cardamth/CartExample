var Helper = /** @class */ (function () {
    function Helper() {
        this.exemptList = ["book", "chocolate", "pill"];
    }
    Helper.prototype.FormatDuplicateDescription = function (data) {
        return "'" + data + "'";
    };
    Helper.prototype.RoundNickel = function (data) {
        return Math.ceil(data * 20) / 20;
    };
    Helper.prototype.FirstCharacterUpper = function (data) {
        switch (data) {
            case null: return "";
            case "": return "";
            default: return data.substring(0, 1).toUpperCase() + data.substring(1);
        }
    };
    Helper.prototype.round = function (number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
    ;
    return Helper;
}());
//# sourceMappingURL=Helper.js.map