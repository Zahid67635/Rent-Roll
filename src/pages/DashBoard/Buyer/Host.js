import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/ContextProvider';

const Host = () => {
    const { user } = useContext(AuthContext)
    const [state, setState] = useState(true)
    const [req, setReq] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://rent-roll-server.vercel.app/hostRequests/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReq(data)
                console.log(data);
                setLoading(!state)
            })
            .catch(er => console.log(er))
    }, [user?.email, state, req])
    const handleSubmit = (e) => {
        e.preventDefault()
        const nidNo = e.target.nidNo.value
        const nidPhoto = e.target.nidPhoto.files[0]
        const apiKey = process.env.REACT_APP_imgBB_Key
        const url = `https://api.imgbb.com/1/upload?key=${apiKey}`
        const formData = new FormData()
        formData.append('image', nidPhoto)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const imgUrl = imgData.data.display_url
                console.log(imgUrl)
                const nidInfo = {
                    nidNo,
                    nidImgUrl: imgUrl,
                    email: user?.email,
                    photo: user?.photoURL,
                    status: 'pending'
                }
                hostStatus(nidInfo)
                toast.success('Request sent!! Please Wait for response')
                setState(!state)
            })
            .catch(er => console.log(er))

        e.target.reset()
    }
    const hostStatus = (data) => {
        fetch(`https://rent-roll-server.vercel.app/hostRequests/${data?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(er => console.log(er))
    }
    return (
        <>
            <form className='md:w-1/2 w-3/4 mx-auto my-10' onSubmit={handleSubmit}>

                {
                    req?.email === user?.email ? <><p className='text-center font-semibold text-xl'>Request has been sent. Please wait for validation...</p></> : <><h1 className='font-bold text-2xl text-purple-700 mb-4'>Send a Request for Hosting : </h1><fieldset className="md:w-1/2 my-3 space-y-1 text-gray-800">
                        <div className="flex">
                            <span className="flex items-center md:px-3 px-4 pointer-events-none sm:text-sm text-xs rounded-l-md bg-gray-300">NID No.</span>
                            <input type="number" name="nidNo" id="url" placeholder="xxxxxxxxxx" className="md:flex flex-1 px-1 md:py-2 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 text-gray-800 bg-gray-100 focus:ring-sky-600" required />
                        </div>
                    </fieldset>
                        <h2 className='font-semibold mt-4'>Please provide your valid NID photo clearly -</h2>
                        <input type="file" name="nidPhoto" className="file-input file-input-bordered file-input-sm w-full max-w-xs" required />
                        <div className='w-1/2 mx-auto mt-4'>
                            <button type='submit' className="btn btn-outline btn-sm mx-auto">Request</button>
                        </div></>
                }
            </form>


        </>
    );
};

export default Host;