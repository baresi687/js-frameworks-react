function Image({ srcMobile, srcDesktop, altText }) {
  const styling = {
    display: 'block',
    width: '100%',
  };

  return (
    <>
      <picture>
        <source media="(max-width: 767px)" srcSet={srcMobile} />
        <source media="(max-width: 768px)" srcSet={srcDesktop} />
        <img style={styling} src={srcDesktop} alt={altText} />
      </picture>
    </>
  );
}

export default Image;
