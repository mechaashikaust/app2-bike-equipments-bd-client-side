import React from 'react';

const OrdersTable = ({ equipment, index, refetch, setDeletingEquipment }) => {
    const { user, email, itemName, price, img, paid } = equipment;

    return (
        <tr>
            <th>{index + 1}</th>

            <td>{user}</td>

            <td>{email}</td>

            <td>{itemName}</td>

            <td>{price}</td>



            <td>{
                paid
                ?
                'paid'
                :
                'pay'

            }</td>

            <td>
                {
                    paid
                    ?
                    ''
                    :
                    <label onClick={() => setDeletingEquipment(equipment)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                }
            </td>

        </tr>
    );
};

export default OrdersTable;