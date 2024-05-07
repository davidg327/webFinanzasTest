import React from 'react';
import {useSelector} from "react-redux";

const TableHistory = ({close}) => {
    const {histories} = useSelector(state => state.history);
    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Historial</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        <div style={{overflowX: 'auto', width: '100%'}}>
                            <table className="table" style={{position: 'sticky', top: 0, zIndex: 1}}>
                                <thead>
                                <tr>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Abonado</th>
                                    <th scope="col">Estado</th>
                                </tr>
                                </thead>
                                <tbody>
                                {histories.length > 0 && histories.map((history, index) => (
                                    <tr key={index}>
                                        <td className="border">{history.date.substring(0, 10)}</td>
                                        <td className="border">{history.payment}</td>
                                        <td className="border">{history.state.name}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TableHistory;
