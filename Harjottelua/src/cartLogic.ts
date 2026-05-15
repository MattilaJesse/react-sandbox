import type { StoreItem } from './types';

// Laskee ostoskorin yhteishinnan
export const calculateTotal = (cart: StoreItem[]): number => {
  return cart.reduce((sum, item) => sum + item.price, 0);
};

// Tarkistaa onko tuote jo korissa ID:n perusteella
export const isProductInCart = (cart: StoreItem[], productId: number): boolean => {
  return cart.some(item => item.id === productId);
};