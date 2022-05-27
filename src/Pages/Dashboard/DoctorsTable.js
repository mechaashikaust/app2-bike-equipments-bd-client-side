import React from 'react';

const DoctorsTable = ({ equipment, index, refetch, setDeletingEquipment }) => {
    const { name, price , img } = equipment;

    return (
        <tr>
            <th>{index + 1}</th>

            <td><div className="avatar">
                <div className="w-14 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
 
            <td>{name}</td>

            <td>{price}</td>

            <td>
                <label onClick={() => setDeletingEquipment(equipment)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>

        </tr>
    );  
};

export default DoctorsTable;