import './Price.scss';

function Price({ price, onSale }) {
  return (
    <>
      <div className="price-container">
        <h1>{price}</h1>
        {onSale && <p>$169.99</p>}
      </div>
    </>
  );
}

export default Price;
