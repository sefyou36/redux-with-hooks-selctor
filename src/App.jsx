import './App.css'
// import { ADD_FRUIT } from './redux/actionType'
import { fruitReducer } from './redux/reducer'
import Cart from './component/Cart';
import AddFruits from './component/AddFruit';
import Total from './component/Total';

// const myFruitsList = [
//   {fruitName: '🥥', id: 1},
//   {fruitName: '🫐', id: 2},
//   {fruitName: '🍉', id: 3},
//   {fruitName: '🍐', id: 4},
//   {fruitName: '🍒', id: 5},
//   {fruitName: '🍑', id: 6},
// ]


// Store Creation



function App() {

  return (

  
      <>
          <h1>Hello from REDUX!!</h1>
          <Total/>
          <Cart/>
          <AddFruits/>
      </>
  
  )
}

export default App
