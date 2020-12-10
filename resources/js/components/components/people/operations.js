import actions from './actions'

const fetchPeople = async () => {
  const response = await fetch('http://localhost:8000/people', { method: 'GET' })
  const json = await response.json();

  return json;
}

export const getAllPeople = () =>
async (dispatch) => {
  const people = await fetchPeople()
  people.map(person => dispatch(actions.add(person)))
  }
