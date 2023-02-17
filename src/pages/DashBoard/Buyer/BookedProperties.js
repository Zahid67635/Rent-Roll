import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../../../Components/Spinner';
import { AuthContext } from '../../../Contexts/ContextProvider';
import HomeCard from './HomeCard';

const BookedProperties = () => {
    const { user } = useContext(AuthContext)
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProperties(data)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }, [user?.email])
    console.log(properties)
    return (
        <div className='mt-10'>
            {
                loading ? <div className='h-screen flex items-center justify-center'><Spinner></Spinner></div> :
                    <><h1 className='text-2xl font-semibold'>You have {properties?.length} Bookings for Renting:</h1>
                        <div className="divider"></div>
                        <div className='grid md:grid-cols-3 gap-5'>
                            {
                                properties.map((p, i) => <HomeCard info={p} key={i}></HomeCard>)
                            }
                        </div></>
            }
        </div >

    );
};

export default BookedProperties;