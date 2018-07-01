const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      break;
    case 'UPDATE_CART':
      return {
        ...state,
        cart: state.cart.map(item => {
          console.log(item)
          item.product === action.payload.product ? action.payload : item
        })
      }
      break;
    case 'DELETE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
      break;
    default:
      return state;
      break;

  }
}

export default cartReducer