import React from 'react'

const Device = ({device}) => {
    return (
        <div className="card">
            <div className="card-header">
                <b>{device.id}. {device.name} / {device.inventory}</b>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-7">
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <td><b>Numer inwentarzowy</b></td>
                                    <td>{device.inventory}</td>
                                </tr>
                                <tr>
                                    <td><b>Cena zakupu</b></td>
                                    <td>
                                        {device.purchase_price}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-5">
                        Dodaj do dok. przekazania
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Device;