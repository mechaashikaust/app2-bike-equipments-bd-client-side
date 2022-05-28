import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Equipment from '../Equipment/Equipment';
import './Equipments.css'

const Equipments = () => {

    // const [equipments, setEquipments] = useState([]);
 
    // useEffect(() => {
    //     fetch('http://localhost:5000/equipment')
    //         .then(res => res.json())
    //         .then(data => setEquipments(data));
    // }, []);

    const { isLoading, refetch, data: equipments } = useQuery(['equipment'], () =>
        fetch(`http://localhost:5000/equipment`)
            .then(res => res.json())
    )
    if (isLoading) return <Loading></Loading>


    return (
        <div id="equipments" className='container mb-5'>
            <div className="row">
                <h1 className='text-4xl bg-secondary font-bold text-accent text-center mt-5 py-5 mb-5'>Equipments</h1>
                <div className='equipments-container'>
                    {
                        equipments.slice(0,6).map(equipment => <Equipment

                            key={equipment._id}
                            equipment={equipment}

                        >
                        </Equipment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Equipments;