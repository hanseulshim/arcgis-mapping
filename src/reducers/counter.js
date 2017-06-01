const counter = (state = {counter: 0}, action) => {
  switch(action.type){
    case 'INCREMENT_COUNTER':
      console.log(state)
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT_COUNTER':
      console.log(state)
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export default counter;
