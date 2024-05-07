import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import TableUsers from "./components/Table";
import {useDispatch, useSelector} from "react-redux";
import {createUser, getUsers, updateUser} from "../../state/user/reducer";
import FormUsers from "./components/Form";

const Users = ({}) => {
    const dispatch = useDispatch();

    const {users} = useSelector(state => state.user);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        identification: '',
        phone: '',
        email: '',
    });
    const [focusUser, setFocusUser] = useState({});

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setFocusUser({});
    };

    const handleUser = () => {
        if(focusUser?.id){
            handleUpdateUser();
        }else{
            handleCreateUser();
        }
    };

    const handleCreateUser = () => {
        dispatch(createUser({values: formData}));
        closeModal();
    };

    const handleUpdateUser = () => {
        let values = {
            user_id: parseInt(focusUser.id),
            name: formData.name !== '' ? formData.name : focusUser.name,
            identification: formData.identification !== '' ? formData.identification : parseInt(focusUser.identification),
            phone: formData.phone !== '' ? formData.phone : parseInt(focusUser.phone),
            email: formData.email !== '' ? formData.email : focusUser.email,
        };
        dispatch(updateUser({values: values}))
        closeModal();
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:
                event.target.name === 'identification' || event.target.name === 'phone'  ?
                    parseInt(event.target.value) :
                    event.target.value,
        });
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className="container-fluid d-flex" style={{height: '100vh'}}>
            <Navbar/>
            <div className="d-flex flex-column align-items-center w-75 m-5" style={{marginLeft: '5%'}}>
                <button className="create-user-btn" onClick={openModal}>Crear Usuario</button>
                <TableUsers users={users} setFocusUser={setFocusUser} openModal={openModal}/>
            </div>
            {showModal && (
                <FormUsers
                    close={closeModal}
                    handleUser={handleUser}
                    handleChange={handleChange}
                    focusUser={focusUser}
                />
            )}
        </div>
    )
}

export default Users;
