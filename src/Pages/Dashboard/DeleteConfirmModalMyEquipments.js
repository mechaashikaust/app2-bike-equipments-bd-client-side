import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModalMyEquipments = ({ deletingEquipment, setDeletingEquipment }) => {
    const { name, _id } = deletingEquipment;


    const handleDelete = (id) => {

        const url = `https://afternoon-sea-84552.herokuapp.com/booking/${id}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {

                // const remaining = equipments.filter(equipment => _id !== id);
                // setDeletingEquipment(remaining);

                if (_id !== id) {
                    setDeletingEquipment();
                }


                if (result.deletedCount) {
                    toast('Successfully Deleted Equipment');
                    setDeletingEquipment(null);
                }
                console.log(result);

            });

    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete  ${name}!</h3>
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

export default DeleteConfirmModalMyEquipments;