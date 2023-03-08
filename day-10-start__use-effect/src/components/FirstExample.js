import {useState,useEffect} from "react";
function FirstExample() {
  const [resourceType, setResourceType] = useState('albums')
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('ResourceType changed:',resourceType)
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData)
        setItems(jsonData)
      })
  },[resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('albums')}>Album</button>
        <button onClick={() => setResourceType('photos')}>Photos</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
      </div>
      <h1>{resourceType}</h1>
      <div>
        {items.map((item) => {
          return  <ul key={item.id}>
                    <li>{item.id}</li>
                    <li>{item.title}</li>
                    {item.url && <img src={item.url} alt={item.title}/> }
                  </ul>
        })}
      </div>
    </>
  );
}

export default FirstExample;

