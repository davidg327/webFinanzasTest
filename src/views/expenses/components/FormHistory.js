import React from 'react';

const FormHistory = ({close, handleHistory, handleChange}) => {

    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crear Abono</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="input1">Valor</label>
                            <input type="text"
                                   className="form-control"
                                   name="payment"
                                //defaultValue={focusUser.name}
                                   onChange={handleChange}
                                   placeholder="Valor"/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="input1">Fecha</label>
                            <input type="date"
                                   className="form-control"
                                   name="date"
                                //defaultValue={focusUser.name}
                                   onChange={handleChange}
                                   placeholder="Fecha"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={close}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={handleHistory}>Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormHistory;
