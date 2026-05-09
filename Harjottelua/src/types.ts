import type { ReactNode } from 'react';

export interface StoreItem {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

// Tämä auttaa Modalin kanssa myöhemmin
export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}