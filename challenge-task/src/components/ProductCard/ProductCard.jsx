import './ProductCard.scss';
import Image from './Image.jsx';
import ProductCategory from './ProductCategory.jsx';
import Heading from './Heading.jsx';
import Paragraph from './Paragraph.jsx';
import Price from './Price.jsx';
import Button from './Button.jsx';

function ProductCard({ srcMobile, srcDesktop, altText, category, heading, paragraph, price, onSale }) {
  return (
    <>
      <div className="card">
        <Image srcMobile={srcMobile} srcDesktop={srcDesktop} src={srcDesktop} altText={altText} />
        <div className="card-details">
          <ProductCategory content={category} />
          <Heading content={heading} />
          <Paragraph content={paragraph} />
          <Price price={price} onSale={onSale} />
          <Button />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
