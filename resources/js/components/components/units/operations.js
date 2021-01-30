import actions from './actions'
import address from '../../address'

const fetchUnits = async () => {
  const response = await fetch(address + '/units', { method: 'GET' })
  const json = await response.json();

  return json;
}

export const getAllUnits = () =>
async (dispatch) => {
  const units = await fetchUnits()

  units.map(unit => dispatch(actions.add(unit)))
  }
