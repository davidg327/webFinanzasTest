import React from 'react';

const TableExpenses = ({expenses, openModalHistories, openHistory, setFocusHistory}) => {
    return (
        <div style={{ overflowX: 'auto', width: '100%' }}>
            <table className="table"  style={{position: 'sticky', top: 0, zIndex: 1 }}>
                <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Acción</th>
                </tr>
                </thead>
                <tbody>
                {expenses.length > 0 && expenses.map((expense, index) => (
                    <tr key={index}>
                        <td className="border">{expense.name}</td>
                        <td className="border">{expense.amount}</td>
                        <td className="border">{expense.date.substring(0, 10)}</td>
                        <td className="border">{expense.state.name}</td>
                        <td className="border"
                            onClick={() => openModalHistories(expense.user.id)}>{expense.user.name}</td>
                        <td className="border">
                            {expense.state.id !== '5' && (
                                <button className="edit-user-btn" onClick={() => {
                                    openHistory();
                                    setFocusHistory(expense);
                                }}>Crear abono
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default TableExpenses;
