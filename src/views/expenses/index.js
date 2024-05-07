import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {createExpense, getExpense} from "../../state/expense/reducer";
import TableExpenses from "./components/Table";
import FormExpense from "./components/Form";
import {getNameUsers} from "../../state/user/reducer";
import {createHistory, getHistory} from "../../state/history/reducer";
import TableHistory from "./components/TableHistory";
import FormHistory from "./components/FormHistory";

const Expenses = ({}) => {
    const dispatch = useDispatch();

    const {expenses} = useSelector(state => state.expense);

    const [showModal, setShowModal] = useState(false);
    const [showModalHistory, setShowModalHistory] = useState(false);
    const [showModalHistories, setShowModalHistories] = useState('');
    const [focusHistory, setFocusHistory] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        date: '',
        user_id: '',
    });

    const [formDataHistory, setFormDataHistories] = useState({
        payment: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:
                event.target.name === 'amount' || event.target.name === 'user_id'  ?
                    parseInt(event.target.value) :
                    event.target.value,
        });
    };

    const handleChangeHistory = (event) => {
        setFormDataHistories({
            ...formDataHistory,
            [event.target.name]:
                event.target.name === 'payment' ?
                    parseInt(event.target.value) :
                    event.target.value,
        });
    };

    const handleCreate = () => {
        let values = {
            ...formData,
            state_id: 3,
        }
        dispatch(createExpense({values: values}));
        closeModal();
    };

    const handleCreatePayment = () => {
        let values = {
            ...formDataHistory,
            state_id: parseInt(focusHistory.amount) <= parseInt(formDataHistory.payment) ? 5 : 4,
            user_id: parseInt(focusHistory.user.id),
            expense_id: parseInt(focusHistory.id),
        }
        dispatch(createHistory({values: values}));
        closeModalHistory();
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const closeModalHistory = () => {
        setShowModalHistory(false);
    };

    useEffect(() => {
        dispatch(getExpense());
        dispatch(getNameUsers());
    }, []);

    useEffect(() => {
        if(showModalHistories !== ''){
            let values = {
                userId: parseInt(showModalHistories)
            }
            dispatch(getHistory({values: values}))
        }
    }, [showModalHistories]);

    return (
        <div className="container-fluid d-flex" style={{height: '100vh'}}>
            <Navbar/>
            <div className="d-flex flex-column align-items-center w-75 m-5" style={{marginLeft: '5%'}}>
                <button className="create-user-btn" onClick={openModal}>Crear Gasto</button>
                <TableExpenses expenses={expenses}
                               openModalHistories={setShowModalHistories}
                               openHistory={() => setShowModalHistory(true)}
                               setFocusHistory={setFocusHistory}
                />
            </div>
            {showModal && (
                <FormExpense
                    close={closeModal}
                    handleChange={handleChange}
                    handleExpense={handleCreate}
                />
            )}
            {showModalHistories !== '' && (
                <TableHistory
                    close={() => setShowModalHistories('')}
                />
            )}
            {showModalHistory && (
                <FormHistory
                    close={closeModalHistory}
                    handleChange={handleChangeHistory}
                    handleHistory={handleCreatePayment}
                />
            )}
        </div>
    )
}

export default Expenses;
