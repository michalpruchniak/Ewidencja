import React, { useEffect, useState } from 'react'
import { connect} from 'react-redux'
import Device from './device'

const DevicesContainer = ({ devices }) => {
    const [pageNumber, setPageNumber] = useState(2);
    const [perSite, setPerSite] = useState(10);
    const [totalItems, setTotalItems] = useState(devices.list.length);
    const from = (pageNumber - 1) * perSite;
    const to = ((pageNumber - 1) * perSite) + perSite;
    const countSites = Math.ceil(totalItems / perSite)

    const pages = Math.ceil(totalItems / perSite);
    const Pagination = ({pages}) => {
        let list = []
        for(let i = 1; i<=pages; i++){
            list.push(<li key={i}>{i}</li>)
        }
        return list;
    }

    return (
        <React.Fragment>
            {devices.list.slice(from, to).map(device =>
                <Device key={device.id} device={device} />
            )}
            <div className="row">
                <ul>
                    <Pagination pages={pages} />
                </ul>
            </div>
        </React.Fragment>
    );
}
const mapStateToProps = state => ({
    devices: state.devices
})

export default connect(mapStateToProps, null)(DevicesContainer);