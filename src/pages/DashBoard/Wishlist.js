import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import House from '../Houses/House';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../Contexts/ContextProvider';

const Wishlist = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://rent-roll-server-zahid67635.vercel.app/wishlist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setList(data)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }, [user?.email, list])
    return (
        <div>
            {
                loading ? <div className='h-screen flex items-center justify-center'><Spinner></Spinner></div> :
                    <> <h1 className='text-xl font-semibold md:text-2xl mx-3'>You have {list?.length ? list.length : 0} Liked Houses for Renting:</h1>
                        <div className="divider px-3 md:px-0"></div>
                        <div className='grid md:grid-cols-3 gap-5'>
                            {
                                list?.map((l, i) => <House key={i} info={l} like={true}></House>)
                            }
                        </div></>
            }
        </div>
    );
};

export default Wishlist;