import {useState, useReducer} from "react";

const ACTIONS = {
  ADD_PRODUCT: 'add-product',
  DELETE_PRODUCT: 'delete-product'
}
function reducer(products, action) {
  console.log(products)
  console.log(action)
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return products = [...products, {id: Date.now(), name: action.payload.productName}]
    case ACTIONS.DELETE_PRODUCT:
      return products = products.filter(product => product.id !== action.payload.id)
    default:
      return products
  }

}
const ProductExample = () => {
  const [productName, setProductName] = useState('')
  const [products, dispatch] = useReducer(reducer, [])
  function handleSubmit (e) {
    e.preventDefault()
    console.log('product name: ',productName)
    dispatch({type: ACTIONS.ADD_PRODUCT, payload: {productName: productName}})
    setProductName('')
  }

  return (
    <div>
      <h1>Product List</h1>

      <form onSubmit={handleSubmit}>
       <div className={'product__container'}>
         <label htmlFor={'prod'}>Product name: </label>
         <input value={productName} onChange={e => setProductName(e.target.value)} placeholder={'Name of product to add'} id={'prod'} type={'text'}/>
       </div>
      </form>

      <ul>
        {products.map(product => {
          return (
             <li key={product.id}>
              <span>{product.name}</span>
              <button onClick={() => dispatch({type: ACTIONS.DELETE_PRODUCT, payload: {id: product.id}})}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ProductExample;
