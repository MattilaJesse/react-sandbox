import ProductCatalog from './components/ProductCatalog';
// import TeamCard from './components/TeamCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center justify-center">
      {/* Laitetaan tämä tehtävänannon mukainen otsikko näkyviin */}
      <h1 className="text-3xl font-bold text-gray-800">My Tested App</h1>
      
      {/* Kommentoidaan ProductCatalog hetkeksi pois, jotta sivu on mahdollisimman simppeli Verceliä varten */}
      {/* <ProductCatalog /> */}
    </div>
  );
}

export default App;