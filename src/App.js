
import './App.css';
const Item =({name,isPacked})=>{
  //Conditional Statement with ternary operator if condition is true then you can show
  <li>
    {isPacked ? name + ' ✔' : name}
  </li>
}
function App() {
  return (
    <section>
      <h1>How to set Conditional Rendering in React</h1>
      <ul>
        <Item 
          isPacked={true}
          name="You Can pick item"
          />
          <Item 
          isPacked={true}
          name="Welcome to our store"
          />
           <Item 
          isPacked={false}
          name="Thank You"
          />
      </ul>
    </section>
  );
}

export default App;
