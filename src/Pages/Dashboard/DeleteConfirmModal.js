import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useTotalitems from '../../hooks/useTotalitems';
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const DeleteConfirmModal = ({ deletingEquipment,refetch, setDeletingEquipment, equipments }) => {
    const { name, _id } = deletingEquipment;


    const handleDelete = (id) => {

        const url = `http://localhost:5000/equipment/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {

                const remaining = equipments.filter(equipment => _id !== id);
                setDeletingEquipment(remaining);
                
                if (result.deletedCount) {
                    toast('Successfully Deleted Equipment');
                    setDeletingEquipment(null);
                    refetch();
                }
                

            });

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  ${name}!</h3> */}
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteConfirmModal;