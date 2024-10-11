import CustomerCounter from "./Counter"
import CustomerClass from "./CustomerClass";

function App() {

  let result=100;

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <p>function component</p>
        <CustomerCounter customers={result}/>
        <hr />
        
        <p>class component</p>
        <CustomerClass/>
      </div>
    </>
  )
}

export default App
