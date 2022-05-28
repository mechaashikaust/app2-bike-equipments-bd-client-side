import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModalOrders from './DeleteConfirmModalOrders';
import OrdersTable from './OrdersTable';

const ManageAllOrders = () => {

    const [deletingEquipment, setDeletingEquipment] = useState(null);

    const { isLoading, refetch, data: bookings } = useQuery(['bookings'], () =>
        fetch(`https://afternoon-sea-84552.herokuapp.com/booking`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>

    console.log(bookings);

    return (
        <div>

            <h2 className="text-2xl">Manage Orders: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((equipment, index) => <OrdersTable
                                key={equipment._id}
                                equipment={equipment}
                                index={index}
                                refetch={refetch}
                                setDeletingEquipment={setDeletingEquipment}
                            ></OrdersTable>)
                        }
                    </tbody>
                </table>
            </div>

            {deletingEquipment && <DeleteConfirmModalOrders
                deletingEquipment={deletingEquipment}
                refetch={refetch}
                setDeletingEquipment={setDeletingEquipment}
            ></DeleteConfirmModalOrders>}


        </div>
    );
};

export default ManageAllOrders;