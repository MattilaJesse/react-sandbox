import { useState, useEffect } from 'react';
import type { StoreItem } from '../types';
import Modal from './Modal';

const ProductCatalog = () => {
  const [items, setItems] = useState<StoreItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<StoreItem | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        const data: StoreItem[] = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Virhe tuotteiden haussa:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (isLoading) {
    return <p className="p-10 text-center font-bold">Loading products...</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Product Catalog</h2>
      
      {/* Tuoteristikko */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedItem(item)}
            className="border p-4 rounded-xl shadow cursor-pointer hover:scale-105 transition-transform bg-white flex flex-col items-center"
          >
            <img src={item.image} alt={item.title} className="h-40 w-full object-contain mb-4" />
            <h3 className="font-bold text-center line-clamp-1">{item.title}</h3>
            <p className="text-blue-600 font-bold mt-2">${item.price}</p>
          </div>
        ))}
      </div>

      {/* Modalin renderöinti - Huomaa selectedItem && varmistus */}
      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <div className="text-center flex flex-col items-center">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.title} 
              className="h-64 w-full object-contain mb-4" 
            />
            <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
            <p className="text-green-600 font-bold text-xl mb-4">${selectedItem.price}</p>
            <p className="text-gray-700 text-sm leading-relaxed text-left">
              {selectedItem.description}
            </p>
            <button 
              onClick={() => setSelectedItem(null)}
              className="mt-6 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductCatalog;