import ProductCatalog from './components/ProductCatalog';
// import TeamCard from './components/TeamCard'; // Jos haluat pitää vanhat tallessa

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Voit jättää TeamCardit tähän jos haluat, 
          mutta uusi tehtävä vaatii ProductCatalogin: */}
      <ProductCatalog />
    </div>
  );
}

export default App;