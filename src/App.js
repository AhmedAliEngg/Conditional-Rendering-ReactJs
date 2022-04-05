
import './App.css';
const Item =({name,isPacked})=>{
  //Conditional Statement if true condition then you can show
  if(isPacked)
  {
    return <li>{name} ✔</li>
  }
  return <li>{name} </li>
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
