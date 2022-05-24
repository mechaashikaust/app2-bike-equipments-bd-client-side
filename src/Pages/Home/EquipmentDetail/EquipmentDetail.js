import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import UpdateEquipment from '../UpdateEquipment/UpdateEquipment';
// import ManageInventorySection from '../ManageInventorySection/ManageInventorySection'

const EquipmentDetail = () => {

    const { equipmentId } = useParams();
    // const [equipment, setEquipment] = useState({});

    // useEffect(() => {
    //     const url = `http://localhost:5000/equipment/${equipmentId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setEquipment(data));
    // }, [])

        const { isLoading, refetch, data: equipment } = useQuery(['equipment',equipmentId], () =>
        fetch(`http://localhost:5000/equipment/${equipmentId}`)
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>

    return (
        <div className='marginTop'>
            <div className='d-flex'>
                <div className='equipment '>
                    <img className='w-50 img-fluid' src={equipment.img} alt="" />

                </div>

                <div className='text-center equipment'>

                    <h2><span className='text-warning'>Name : </span> {equipment.name}</h2>
                    <p><span className='text-warning'>Price : </span> {equipment.price}</p>
                    <p><small><span className='text-warning'>Description : </span>{equipment.description}</small></p>
                    <p><small><span className='text-warning'>Minimum Order : </span>{equipment.minimumOrderQuantity}</small></p>
                    <p><small><span className='text-warning'>Available Quantity : </span>{equipment.availableQuantity}</small></p>

                    <Link to={`/checkout/${equipmentId}`}>
                        <button className='btn btn-secondary'>Stock Equipment</button>
                    </Link>

                    <Link to={`/updateequipment/${equipment._id}`}> <button className='btn btn-warning fw-bold btn-gradient'>Update</button></Link>

               

                </div>
            </div>
            {/* <div className='mt-5'>
                <ManageInventorySection></ManageInventorySection>               () => addition(equipment.minimumOrderQuantity)
            </div> */}
        </div>
    );
};

export default EquipmentDetail;