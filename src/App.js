import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$99.95'},
    {name: 'Illustrator', price: '$60.63'}, 
    {name: 'Pdf Reader', price: '$10.00'},
    {name: 'Fokira Reader', price: 'Free'},
    {name: 'Notun Ekta', price: 'Magna'}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
        <User></User>
        <Counter></Counter>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
      </header>
    </div>
  );
}
function User(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div>
      <h2>Dynamic Arko</h2>
      <ul>
        {
          user.map(user => <li>{user.name}</li>) 
        }
        <p>
        {user.map(user => <li>{user.email}</li>)}
        </p>
      </ul>
    </div>
  )
}

function Counter(){
  const[count, setCount] = useState(10);
  const increaseHandler = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {increaseHandler}>Increase</button>
      <button onMouseMove = {()=> setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Product(props){
  const {name, price} = props.product;
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '300px',
    float: 'left',
    color: 'black'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
    <h4>{props.product.price}</h4>
    <button>Buy Now</button>
    </div>
  )
}

export default App;
