
import './App.css';
const Item = ({ name, isPacked }) => {
  //Conditional Statement with operator if true condition then you can show
  <li className="item">
    {name} {isPacked && '✔'}
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
