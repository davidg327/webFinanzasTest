import React from 'react';
import {useSelector} from "react-redux";

const FormExpense = ({close, handleExpense, handleChange}) => {
    const {nameUsers} = useSelector(state => state.user);
    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crear Gasto</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="input1">Nombre</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                //defaultValue={focusUser.name}
                                   onChange={handleChange}
                                   placeholder="Nombre"/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="input1">Monto deuda</label>
                            <input type="text"
                                   className="form-control"
                                   name="amount"
                                //defaultValue={focusUser.name}
                                   onChange={handleChange}
                                   placeholder="Monto"/>
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
                        <div className="form-group mt-2">
                            <label htmlFor="input1">Usuario</label>
                            <select  className="form-control"  name="user_id" onChange={handleChange}>
                                <option value="">Selecciona una opción</option>
                                {nameUsers.length > 0 && nameUsers.map((user, index) => (
                                    <option value={user.id} key={index}>{user.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={close}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={handleExpense}>Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormExpense;
