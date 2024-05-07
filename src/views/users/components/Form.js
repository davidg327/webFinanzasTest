import React from 'react';

const FormUsers = ({close, handleUser, handleChange, focusUser}) => {
    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crear usuario</h5>
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="input1">Nombre</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   defaultValue={focusUser.name}
                                   onChange={handleChange}
                                   placeholder="Nombre" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="input2">Identificación</label>
                            <input
                                type="text"
                                className="form-control"
                                name="identification"
                                defaultValue={focusUser.identification}
                                onChange={handleChange}
                                placeholder="Identificación" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="input3">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                defaultValue={focusUser.phone}
                                onChange={handleChange}
                                placeholder="Teléfono" />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="input4">Correo electrónico</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                defaultValue={focusUser.email}
                                onChange={handleChange}
                                placeholder="Correo" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={close}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={handleUser}>Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FormUsers;
