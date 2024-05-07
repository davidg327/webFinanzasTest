import React from 'react';

const TableUsers = ({users, setFocusUser, openModal}) => {
    return (
        <div style={{ overflowX: 'auto', width: '100%' }}>
            <table className="table"  style={{position: 'sticky', top: 0, zIndex: 1 }}>
                <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Identificación</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acción</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 && users.map((user, index) => (
                    <tr key={index}>
                        <td className="border">{user.name}</td>
                        <td className="border">{user.identification}</td>
                        <td className="border">{user.phone}</td>
                        <td className="border">{user.email}</td>
                        <td className="border">{user.state.name}</td>
                        <td className="border">
                            <button className="edit-user-btn" onClick={() => {
                                setFocusUser(user);
                                openModal();
                            }}>Editar Usuario</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default TableUsers;
