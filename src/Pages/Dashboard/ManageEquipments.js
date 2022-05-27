import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useTotalitems from '../../hooks/useTotalitems';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModalManageEquipments from './DeleteConfirmModalManageEquipments';
import EquipmentsTable from './EquipmentsTable'

const ManageEquipments = () => {

    // const [users] = useTotalitems();

    const [deletingEquipment, setDeletingEquipment] = useState(null);

    // {10} Getting all Doctors 

    const { data: equipments, isLoading, refetch } = useQuery('equipments', () => fetch('http://localhost:5000/equipment', {
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
                            equipments.map((equipment, index) => <EquipmentsTable
                                key={equipment._id}
                                equipment={equipment}
                                index={index}
                                refetch={refetch}
                                setDeletingEquipment={setDeletingEquipment}
                            ></EquipmentsTable>)
                        }
                    </tbody>
                </table>
            </div>

            {deletingEquipment && <DeleteConfirmModalManageEquipments
                deletingEquipment={deletingEquipment}
                refetch={refetch}
                setDeletingEquipment={setDeletingEquipment}
            ></DeleteConfirmModalManageEquipments>}


        </div>

    );
};

export default ManageEquipments;