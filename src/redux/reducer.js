import  * as types  from "./actionType";
import { legacy_createStore as createStore } from "redux";
const initialState ={  cart : [{id:100,fruit:'🍒',quantity : 10}], user:{id:1,name:"Kratos"}} ;


export const fruitReducer = (state = initialState,action) =>{

    switch(action.type){
        case types.ADD_FRUIT :
        return {...state,
            cart : [...state.cart,action.payload]
        }

        case types.DELETE_FRUIT :
        return {...state,
            cart : state.cart.filter((item)=>item.id !== action.payload)
        }

        case types.UPDATE_QUANTITY_FRUIT:
        return {...state,
            cart:state.cart.map(item => item.id === action.payload.id ? {...item,quantity:action.payload.quantity}:item )
        }
        case types.INCREMENT_BY_ONE :
            return {...state,
                cart : state.cart.map((item) => item.id === action.payload? {...item,quantity: +item.quantity + 1}:item)
            }
        case types.DECREMENT_BY_ONE :
            return {...state,
                cart : state.cart.map((item) => item.id === action.payload && item.quantity > 1? {...item,quantity:item.quantity - 1}:item)
            }
        case types.CLEAR_ALL :
            return {...state,
                cart : []
            }
        
        default :
        return state
    }
}
const store = createStore(fruitReducer);

export default store