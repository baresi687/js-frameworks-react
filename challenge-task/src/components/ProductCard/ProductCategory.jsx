import './ProductCategory.scss';

function ProductCategory({ content }) {
  const styling = {
    letterSpacing: '4px',
    fontSize: '12px',
  };
  return <p style={styling}>{content}</p>;
}

export default ProductCategory;
