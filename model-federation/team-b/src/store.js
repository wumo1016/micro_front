import { createStore } from 'redux'

function reducer(state = { number: 0 }) {
  return state
}
const store = createStore(reducer)

export default store
