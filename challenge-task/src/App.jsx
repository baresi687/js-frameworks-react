import './App.scss';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import cardImageMobile from './assets/image-product-mobile.jpg';
import cardImageDesktop from './assets/image-product-desktop.jpg';
function App() {
  return (
    <div className="App">
      <ProductCard
        srcMobile={cardImageMobile}
        srcDesktop={cardImageDesktop}
        altText="Perfume"
        category="PERFUME"
        heading="Gabrielle Essence Eau De Parfum"
        paragraph=" A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        price="$149.99"
        onSale
      />
    </div>
  );
}
export default App;
