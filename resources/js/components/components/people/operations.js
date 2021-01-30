import actions from './actions'
import address from '../../address'


const fetchPeople = async () => {
  const response = await fetch(address + '/people', { method: 'GET' })
  const json = await response.json();

  return json;
}

export const getAllPeople = () =>
async (dispatch) => {
  const people = await fetchPeople()
  people.map(person => dispatch(actions.add(person)))
  }
