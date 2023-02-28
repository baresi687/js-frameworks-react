import styles from  './PageParagraph.module.css'
function PageParagraph ({children}) {
  return (
    <p className={styles.paragraph}>{children}</p>
  )
}
export default PageParagraph
