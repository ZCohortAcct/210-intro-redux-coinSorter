// actions => {type: 'instuctions', payload: 'value 4 manipulation' }
const ADD_PENNY = {type: 'PENNY', payload: .01} 
const ADD_NICKEL = {type: 'NICKEL', payload: .05} 
const ADD_DIME = {type: 'DIME', payload: .10} 
const ADD_QUARTER = {type: 'QUARTER', payload: .25} 

const coinReducer = (state={pennies: 0, nickels: 0, dimes: 0, quarters: 0, total_value: 0}, action) => {
   switch (action.type) {
    case 'PENNY':
       return { ...state,
        pennies: state.pennies + 1,
        total_value: state.total_value + action.payload
       }
    case 'NICKEL':
       return { ...state,
        nickels: state.pennies + 1,
        total_value: state.total_value + action.payload
       }
    case 'DIME':
       return {...state,
        dimes: state.pennies + 1,
        total_value: state.total_value + action.payload
       }
    case 'QUARTER':
       return {...state,
        quarters: state.pennies + 1,
        total_value: state.total_value + action.payload
       }
    default:
      return state
   }
}

// actionCreator ~> REACT syntax
 // add code

function createStore(reducer) {
 let state = reducer(undefined, {type: 'INITIAL STATE'})
 return {
  dispatch: function(instructs) { state = reducer(state, instructs) },
  getState: function() { console.log(state); return state }
}
}

function updateDOM(store, coin, coinValue=0) {
  const coinCountSpan = document.getElementById(`${coin}-count`)
  const coinValueSpan = document.getElementById(`${coin}-value`)

  const totalValueSpan = document.getElementById('total-value')

  const pluralCoin = (coin == 'penny') ? 'pennies' : coin + 's'

  coinCountSpan.innerText = store[pluralCoin]
  totalValueSpan.innerText = store['total_value'].toFixed(2)

}

function updateTotalDOMCount(store) {

}

// create store
const sortCoins = createStore(coinReducer)
sortCoins.getState()

document.addEventListener('submit', function(e){
  e.preventDefault() // no pager refresh

  const coin = document.getElementById('add-coin-input').value.toLowerCase()
  let value;

  // debugger
  switch (coin.toUpperCase()) {
    case 'PENNY':
      sortCoins.dispatch(ADD_PENNY)
      break;
    case 'NICKEL':
      sortCoins.dispatch(ADD_NICKEL)
      break;
    case 'DIME':
      sortCoins.dispatch(ADD_DIME)
      break;
    case 'QUARTER':
      sortCoins.dispatch(ADD_QUARTER)
      break;
  }

  updateDOM(sortCoins.getState(), coin)
})

// btn = document.getElementById('get-total-count')
// btn.addEventListener('click', function(){
//  // add code


//   updateTotalDOMCount()
// })

