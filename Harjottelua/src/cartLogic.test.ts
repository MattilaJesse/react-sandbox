import { describe, it, expect } from 'vitest';
import { calculateTotal, isProductInCart } from './cartLogic';
import type { StoreItem } from './types';

describe('Cart Logic Tests', () => {
  const mockItems: StoreItem[] = [
    { 
        id: 1, 
        title: 'Testituote 1', 
        price: 15, 
        image: 'kuva1.jpg', 
        description: 'Kuvaus 1' 
    },
    { 
        id: 2, 
        title: 'Testituote 2', 
        price: 25, 
        image: 'kuva2.jpg', 
        description: 'Kuvaus 2' 
    },
  ];

  it('should calculate the total price correctly (15 + 25 = 40)', () => {
    const total = calculateTotal(mockItems);
    expect(total).toBe(40);
  });

  it('should return true if item is in cart', () => {
    const isInCart = isProductInCart(mockItems, 1);
    expect(isInCart).toBe(true);
  });

  it('should return false if item is not in cart', () => {
    const isInCart = isProductInCart(mockItems, 999);
    expect(isInCart).toBe(false);
  });
});