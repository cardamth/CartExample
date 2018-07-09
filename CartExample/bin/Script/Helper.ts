class Helper {
    exemptList: string[] = ["book", "chocolate", "pill"];

    constructor() { }

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

    round(number :number, precision: number) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };
}