import { useSelector,useDispatch } from "react-redux"
import { decrementByOne, deleteFruit, incrementByOne } from "../redux/action";

const Cart = () => { 

    const fruit = useSelector(state => state.cart);
    const dispatch = useDispatch();
   
    // const increment = (id) => {
    //     dispatch({type:"INCREMENT_BY_ONE",payload:id})
    // }
    // const decrement = () => {
    //     dispatch({type:"DECREMENT_BY_ONE"})
    // }

    return ( 
    <div className="flex justify-center">  
    
        <div className=" m-5 p-2.5 w-96 border-green-400 rounded bg-gray-600">
            <h1>My Cart</h1>
                <div className="flex-auto flex-col">
                    
                    {fruit.map((item)=>(
                        <div key={item.id} className="w-52 mt-1 p-1 border-orange-400 bg-red-400 rounded">
                            <span className="inline-block w-16 border-indigo-900">id: {item.id} Product:{item.fruit} Quantity : {item.quantity}</span>
                            
                            <button className="bg-green-500 w-4 " onClick={()=>{dispatch(incrementByOne(item.id))}}>+</button>
                            <button className="bg-red-600 w-4" onClick={()=>{dispatch(decrementByOne(item.id))}} >-</button>
                            <button className="bg-red-600 w-4 space-x-4" onClick={()=>{dispatch(deleteFruit(item.id))}} >x</button>
                            
                        </div>
                    ))}
                </div>


        </div>

    </div>
    )
}


export default Cart
