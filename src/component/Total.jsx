
import { useSelector } from "react-redux"
const Total = () =>{
    const quantity = useSelector(state => state.cart)
    let total = quantity.reduce((acc,cur)=>{
        return acc + +cur.quantity
        
    },0)
    return (
        <div>
                 Quantity :    {total}
        </div>
    )
}
export default Total