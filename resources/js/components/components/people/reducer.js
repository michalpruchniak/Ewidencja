const INITIAL_PEOPLE = {
  list: []
}

const people = (state = INITIAL_PEOPLE, action) => {
  switch(action.type){
    case 'ADD_PERSON':
      return {
        ...state,
        list: [...state.list, action.item]
      }
    default:
      return state
  }
}

export default people
