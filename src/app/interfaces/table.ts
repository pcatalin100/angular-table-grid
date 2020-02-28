export interface IHeader {
    key: string;
    label: string;
    width?: number;
    position?: string;
    fixedSide?: string;
}

export interface IContent {
    id: string;
    name: string;
    type: string;
    color: string;
    fuel: string;
    country: string;
    horsePower: string;
    isSelected: boolean
}
