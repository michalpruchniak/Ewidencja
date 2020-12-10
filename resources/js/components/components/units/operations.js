import actions from './actions'

const fetchUnits = async () => {
  const response = await fetch('http://localhost:8000/units', { method: 'GET' })
  const json = await response.json();

  return json;
}

export const getAllUnits = () =>
async (dispatch) => {
  const units = await fetchUnits()

  units.map(unit => dispatch(actions.add(unit)))
  }
