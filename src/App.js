import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


  function App(){
    const players = ["mushfique", "Mustafizur", "Tamim","Sakib"]

    const productNames =[
      {name :"Illustrator", price: "$90.45"},
      {name: "Photoshop", price: "$102.34"},
      {name: "Pdf Reader", price: "$109.34"},
      {name: "premier Video", price: "$202.34"}
    ]
    // const products = productNames.map(product => product.name)
    // console.log(products);
  
   

  return (
    <div className="App">
      <header className="App-header">
        <ul>
            {
              players.map(player => <li>{player}</li>)
            }
        </ul>
        <Person name = "Rubel" Profession ="cricketer"></Person>
        <Person name = "Soumya" Profession ="cricketer"></Person>
        <Person name = "Mashrafi" Profession ="cricketer and politician"></Person>
        <Person name = "sakib al hasan" Profession ="cricketer"></Person>
        <Person name = {players[0]} Profession ="cricketer"></Person>
        <Person name = {players[1]} Profession ="cricketer"></Person>
        <Person name = {players[2]} Profession ="cricketer"></Person>
        <Person name = {players[3]} Profession ="cricketer"></Person>
        <Counter></Counter>
        <Users></Users>

            <ol>
              {
                productNames.map(products => <li>{products.name}</li>)
              }
            </ol>
            {
              productNames.map(products => <Product product ={products}></Product>)
            }
        {/* <Product product={productNames[0]} ></Product>
        <Product product={productNames[0]} ></Product>
        <Product product={productNames[0]} ></Product>
        <Product product={productNames[0]} ></Product> */}
      </header>
    </div>
  );
}
function Person(props){
  const style = {
    borderRadius : '5px',
    backgroundColor : 'gray',
    margin : '20px',
    border : '1px solid lightGrey',
    padding : '20px'

  }
  return (
    <div style = {style}>
    <h1>name :{props.name}</h1>
  <h3>Profession : {props.Profession}</h3>
    </div>
  )
}
function Product(props) {
  const{name, price} = props.product

  const productStyle = {
    borderRadius : '5px',
    backgroundColor : 'grey',
    margin :'50px',
    border : '1px solid lightGrey',
    height : '200px',
    width :'400px',
    float :'left'
  }
  return(
    <div style ={productStyle}>
      <h2>Name: {name}</h2>
  <h1>Price: {price}</h1>
      <button>Buy Now</button>
    </div>
  )
  
}
function Counter() {
  const [count, setCount] = useState(1);
  const handleIncrease = () =>  setCount(count + 1);
  // {
  //   // const newCount = count + 1;
   
  // }
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
  
}
function Users(){
  const[users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  
  return(
    <div>
    <h3>Dynamic users : {users.length}</h3>
    {
      // console.log(users)
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    }
  </div>
  )
}

export default App
