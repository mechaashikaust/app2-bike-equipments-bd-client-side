import React from 'react';

const DoctorsTable = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>

            <td><div className="avatar">
                <div className="w-14 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
 
            <td>{name}</td>

            <td>{specialty}</td>

            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>

        </tr>
    );  
};

export default DoctorsTable;