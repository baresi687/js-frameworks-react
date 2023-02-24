import "./App.css";

const products = [
  { id: 0, name: "Milk", price: "300" },
  { id: 1, name: "Candy", price: "200" },
  { id: 2, name: "Bread", price: "100" },
  { id: 3, name: "Eggs", price: "500" },
];

function App() {
  const productList = products.map(({ id, name, price }, index) => {
    // If you want to limit items displayed
    if (index >= 2) {
      return null;
    }
    return (
      <li key={id}>
        Product: {name}. Price: {price}
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{productList}</ul>
    </div>
  );
}

export default App;
