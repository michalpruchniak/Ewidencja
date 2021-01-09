import React, { useState, useRef } from 'react'
import { connect} from 'react-redux'
import Device from './device'

const perSite = 10;

const DevicesContainer = ({ devices, units, producers, types }) => {
    const inputName = useRef('');
    const inputUnit = useRef('');
    const inputStatus = useRef('');
    const inputProducent = useRef('');
    const inputInventory = useRef('');
    const inputType = useRef('');
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
        const status = parseInt(inputStatus.current.value)
        const producent = parseInt(inputProducent.current.value)
        const inventory = inputInventory.current.value
        const type = parseInt(inputType.current.value)

        let tmp = devices.list;
        setTimeout(() => {
            tmp = tmp.filter((x) => { if (name) { return x.name.includes(name.trim()) } else { return x } })
                     .filter((x) => { if(unit) { return x.unit_id === unit } else { return x } })
                     .filter((x) => { if(status) { return x.status === status } else { return x } })
                     .filter((x) => { if(producent) { return x.producers_id === producent } else { return x } })
                     .filter((x) => { if (inventory) { return x.inventory.includes(inventory.trim()) } else { return x } })
                     .filter((x) => { if (type) { return x.type_id === type } else { return x } })

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
                    <div className="col-12 break-15"><b>Wyników:</b> {totalItems}</div>
                        <div className="col-12 break-15">
                            <label htmlFor="name">Nazwa</label>
                            <input id="name" type="text" placeholder="Nazwa" className="form-control" ref={inputName} />
                        </div>

                        <div className="col-12 break-15">
                            <label htmlFor="inventory">Numer inventarzowy</label>
                            <input id="inventory" type="text" placeholder="Numer inwentarzoy" className="form-control" ref={inputInventory} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 break-15">
                            <label htmlFor="units">Jednostki</label>
                            <select id="units" className="form-control" ref={inputUnit}>
                                    <option>Wszystkie</option>
                                {units.list.map(unit =>
                                    <option key={unit.id} value={unit.id}>{unit.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 break-15">
                            <label htmlFor="producers">Producenci</label>
                            <select id="producers" className="form-control" ref={inputProducent}>
                                    <option>Producent</option>
                                {producers.list.map(producent =>
                                    <option key={producent.id} value={producent.id}>{producent.name}</option>
                                )}
                            </select>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 break-15">
                            <label htmlFor="types">Typ</label>
                            <select id="types" className="form-control" ref={inputType}>
                                    <option>Typ</option>
                                {types.list.map(type =>
                                    <optgroup key={type.id} label={type.name}>

                                        {type.child && type.child.length && type.child.map(element => {
                                            return <option value={element.id} key={element.id}>{element.name}</option>
                                        }
                                        )}
                                    </optgroup>
                                )}
                            </select>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 break-15">
                            <label htmlFor="status">Status</label>
                            <select id="status" className="form-control" ref={inputStatus}>
                                    <option>Status</option>
                                    <option value="1">Aktywny</option>
                                    <option value="2">Zablokowany</option>
                                    <option value="3">Zwrócony</option>
                                    <option value="4">Wybrakowany</option>
                            </select>
                        </div>
                        <div className="col-12 break-15">
                                <button type="submit" className="btn btn-primary">Szukaj</button>
                        </div>
                    </div>

                </form>
                <hr />
            {isLoaded ? <span>Loading...</span> : ''}
            {allItems.slice(from, to).map(device =>
                <Device key={device.id} device={device} type="list"/>
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
    units: state.units,
    producers: state.producers,
    types: state.types
})

export default connect(mapStateToProps, null)(DevicesContainer);