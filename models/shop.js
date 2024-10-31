import { ShopItem } from './shop';

export interface ShopCategory {
  id: string;
  displayName: string;
  items: ShopItem[];
}

export interface ShopData {
  categories: ShopCategory[];
}