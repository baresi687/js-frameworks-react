import "./App.css";

function App() {
  let isLoggedIn = true;

  let content;

  if (isLoggedIn) {
    content = (
      <div>
        <h1>Profile</h1>
        <ul>
          <li>Name: Jack</li>
          <li>Age: 32</li>
          <li>Phone number: 35435234</li>
        </ul>
      </div>
    );
  } else {
    content = (
      <div>
        <h2>Login Form</h2>
      </div>
    );
  }

  return (
    <div className="App">
      {content}
      {/*Ternary operators*/}
      <div>{isLoggedIn ? <div>Profile</div> : <div>Sign In</div>}</div>
      {/*Logical operators*/}
      <div>{isLoggedIn && <div>Profile</div>}</div>
      <div>{!isLoggedIn && <div>Sign In</div>}</div>
    </div>
  );
}

export default App;
