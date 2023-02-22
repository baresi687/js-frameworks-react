function Heading({name, age, color, fontSize}) {
  const headingStyle = {
    color: color ? color : 'black',
    backgroundColor: 'yellow',
    fontSize: fontSize ? fontSize : '1.5rem'
  }

  return (
    <h1 style={headingStyle}>Hello I am {name ? name : 'No user'}. My age is {age ? age : 'unknown'}</h1>
  )
}

export default Heading
