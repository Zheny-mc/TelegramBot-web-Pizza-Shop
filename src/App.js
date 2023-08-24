import './App.css';
import Button from './Components/Button/Button'
import Card from "./Components/Card/Card"

const { getData } = require("./db/db");

const foods = getData();

function App() {
  return (
    <div>
      <h1>Im hear !</h1>
      <Button title={'Add'} disable={false} type={'add'}/>
      <Button title={'Remove'} disable={false} type={'remove'}/>
      <Button title={'Checkout'} disable={false} type={'checkout'}/>
      {foods.map(food => {
        return <Card food={food} key={food.id}/>
      })}
    </div>
    
  );
}

export default App;
