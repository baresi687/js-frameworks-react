import {useState, useEffect} from "react";

const ShowingMessage = () => {

  useEffect(() =>{
    const timer =setInterval(() => {
      console.log('Timer is running')
    }, 1000)

    return () => clearInterval(timer)

  },[])

  return (
    <div>
      <h1>Hello Show message</h1>
    </div>
  );
};

const SecondExample = () => {
  const [showComponent, setShowComponent] = useState(true)

  function handleBtnClick () {
    setShowComponent(!showComponent)
  }

  return (
    <div>
      {showComponent && <ShowingMessage/>}
      <button onClick={handleBtnClick}>{showComponent ? 'Hide' : 'Show'} Component</button>
    </div>
  );
};

export default SecondExample;
