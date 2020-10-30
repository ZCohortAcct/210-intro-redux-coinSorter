// actions
 // add code

const coinReducer = () {
   // add code
}

// actionCreator ~> REACT syntax
 // add code

function createStore(reducer) {
 // add code

}

function updateDOM(store, coin, coinValue) {
  const coinCountSpan = document.getElementById(`${coin}-count`)
  const coinValueSpan = document.getElementById(`${coin}-value`)

  const totalValueSpan = document.getElementById('total-value')

  // add code

}

function updateTotalDOMCount(store) {

}

// create store


document.addEventListener('submit', function(e){
  e.preventDefault() // no pager refresh

  const coin = document.getElementById('add-coin-input').value.toLowerCase()
  let value;

 // add code


  updateDOM()
})

btn = document.getElementById('get-total-count')
btn.addEventListener('click', function(){
 // add code

  updateTotalDOMCount()
})

