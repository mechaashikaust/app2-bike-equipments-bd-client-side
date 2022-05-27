import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useTotalitems from '../../hooks/useTotalitems';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorsTable from './DoctorsTable'

const ManageDoctors = () => {

    // const [users] = useTotalitems();

    const [deletingEquipment, setDeletingEquipment] = useState(null);

    // {10} Getting all Doctors 

    const { data: equipments, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/equipment', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())); 

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(users);

    
    return (
        <div>

            <h2 className="text-2xl">Manage Doctors: {equipments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipments.map((equipment, index) => <DoctorsTable
                                key={equipment._id}
                                equipment={equipment}
                                index={index}
                                refetch={refetch}
                                setDeletingEquipment={setDeletingEquipment}
                            ></DoctorsTable>)
                        }
                    </tbody>
                </table>
            </div>

            {deletingEquipment && <DeleteConfirmModal
                deletingEquipment={deletingEquipment}
                refetch={refetch}
                setDeletingEquipment={setDeletingEquipment}
                equipments={equipments}
            ></DeleteConfirmModal>}


        </div>

    );
};

export default ManageDoctors;