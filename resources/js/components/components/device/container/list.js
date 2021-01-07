import React, { useEffect, useState, useRef } from 'react'
import { connect} from 'react-redux'
import Device from './device'

const perSite = 10;

const DevicesContainer = ({ devices, units }) => {
    const inputName = useRef('');
    const inputUnit = useRef('');
    const [isLoaded, setIsLoaded] = useState(false);

    const [allItems, setAllItems] = useState(devices.list);
    const [pageNumber, setPageNumber] = useState(1);

    const totalItems = allItems.length;
    const from = (pageNumber - 1) * perSite;
    const to = ((pageNumber - 1) * perSite) + perSite;
    const pages = Math.ceil(totalItems / perSite);

    const handlePageClick = (i) => {
        setPageNumber(i);
    }

    const search = (e) => {
        e.preventDefault();
        setIsLoaded(true);
        const name = inputName.current.value
        const unit = parseInt(inputUnit.current.value)
        console.log(unit)

        let tmp = devices.list;
        setTimeout(() => {
            tmp = tmp.filter((x) => { if (name) { return x.name.includes(name.trim()) } else { return x } })
                     .filter((x) => { if(unit) { return x.unit_id === unit } else { return x } })
            setPageNumber(1);
            setAllItems(tmp);
            setIsLoaded(false);
        }, 400)


    }

    const Pagination = ({ pages }) => {
        let list = []
        for (let i = 1; i <= pages; i++) {
            list.push(<li key={i} onClick={() => handlePageClick(i)}>{i}</li>)
        }
        return list;
    }

    return (
        <React.Fragment>
                <form onSubmit={search}>
                    <div className="row">
                        <div className="col-12">
                            <input type="text" placeholder="Nazwa" className="form-control" ref={inputName} />
                        </div>
                        <div className="col-12">
                            <select className="form-control" ref={inputUnit}>
                                    <option>Wszystkie</option>
                                {units.list.map(unit =>
                                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-12">
                                <button type="submit" className="btn btn-primary">Szukaj</button>
                        </div>
                    </div>

                </form>
            {isLoaded ? <span>Loading...</span> : ''}
            {allItems.slice(from, to).map(device =>
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
    devices: state.devices,
    units: state.units
})

export default connect(mapStateToProps, null)(DevicesContainer);