export interface InterfaceItem {
    name: string;
    count: number;
    price: number;
    imported: (name: string) => boolean;
    taxExempt: (name: string) => boolean;
}