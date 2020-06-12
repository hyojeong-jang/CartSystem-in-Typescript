export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface ServerResponse {
  data: ServerData
}

export interface ServerData {
  currency_code?: string
  discounts: DiscountList
  items: ItemList
}

export interface Cart {
  items: Item[]
  discounts: Discount[]
}
export interface DiscountList {
  [key: string]: Discount
}

export interface ItemList {
  [key: string]: Item
}

export interface Discount {
  name: string
  rate: number
}

export interface Item {
  count: number
  name: string
  price: number
}