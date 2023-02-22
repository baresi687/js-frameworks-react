function Paragraph({content, children}) {
  return (
    <p>I am {content ? content : 'bad'} {children}</p>
  )
}

export default Paragraph
