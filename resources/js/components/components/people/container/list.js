import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getAllPeople } from '../operations'

const PeopleContainer = ({people, getAllPeople}) => {
    useEffect(() =>{ getAllPeople()}, [])
    return <ul>
        {people.list.map(person =>
            <li key={person.id}>{person.name}</li>
        )}
    </ul>
}

const mapStateToProps = state => ({
  people: state.people
});
const mapDispatchToProps = dispatch => ({
    getAllPeople: () => dispatch(getAllPeople())
  })
export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
