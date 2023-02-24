import './Image.scss';

function Image({ srcMobile, srcDesktop, altText }) {
  return (
    <>
      <picture>
        <source media="(max-width: 767px)" srcSet={srcMobile} />
        <source media="(max-width: 768px)" srcSet={srcDesktop} />
        <img src={srcDesktop} alt={altText} />
      </picture>
    </>
  );
}

export default Image;
