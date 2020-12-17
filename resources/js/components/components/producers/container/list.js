import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getAllProducers } from '../operations'

const ProducersContainer = ({producers, getAllProducers}) => {
    useEffect(() =>{ getAllProducers()}, [])
    return <ul>
        {producers.list.map(producer =>
            <li key={producer.id}>{producer.name}</li>
        )}
    </ul>
}

const mapStateToProps = state => ({
  producers: state.producers
});
const mapDispatchToProps = dispatch => ({
    getAllProducers: () => dispatch(getAllProducers())
  })
export default connect(mapStateToProps, mapDispatchToProps)(ProducersContainer)
