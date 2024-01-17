import { addFruit, clearAll } from "../redux/action"
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from "react"
const AddFruits = () =>{

    const fruit = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [myFruit,setMyFruit] = useState({id:0,fruit:'',quantity:0})

    useEffect(()=>{
        console.log(">>>>>>>>",addFruit)
        console.log(myFruit)
    })

    const handleChange = (e) =>{
        const {value,name} = e.target
            setMyFruit( {...myFruit,[name]:value})
    }


        return(
            <div className="flex justify-center">
            <div className="m-5 p-3 w-96 h-56 border-yellow-500 bg-green-300">

                <h1>Add Fruits to Cart</h1>

                    <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left">ID :</label>
                    <input className="rounded mt-3" name="id" onChange={handleChange}/><br/>

                    <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left" >FRUIT :</label>
                    <input className="rounded mt-3"  name="fruit" onChange={handleChange}/><br/>

                    <label className="inline border-indigo-300 bg-green-700 w-20 text-base font-normal text-left" >QUANTITY :</label>
                    <input className="rounded mt-3" type="number"  name="quantity" onChange={handleChange}/><br/>

                <button className="bg-blue-700 mt-3" onClick={()=>dispatch(addFruit(myFruit.id,myFruit.fruit,myFruit.quantity))}>SUBMIT</button>
                <button className="bg-red-700 mt-3" onClick={()=>dispatch(clearAll())}>Clear</button>

            </div>
            </div>
        )
}



export default AddFruits