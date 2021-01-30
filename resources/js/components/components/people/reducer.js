import types from './types'
const INITIAL_PEOPLE = {
  list: []
}

const people = (state = INITIAL_PEOPLE, action) => {
  switch(action.type){
    case types.add_person:
      return {
        ...state,
        list: [...state.list, action.item]
      }
    default:
      return state
  }
}

export default people
