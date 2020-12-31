export class Person {
    id: string;
    name: string;
}

export abstract class Bill {
    id: string;
    name: string;
}

export class ItemizedBill extends Bill {
    items: FlatBill[];
}

export class FlatBill extends Bill {
    cost: number;
    people: Person[];
}