import {useParams} from "react-router-dom";

function ProductDetails() {
  let params = useParams()
  console.log(params.id)
  return (
    <div>
      <h1>Product details page</h1>
      <h2>Params id: {params.id}</h2>
    </div>
  );
}

export default ProductDetails;
