import React from 'react';
import { useState } from 'react';

const TableData = ({ r, setStatus }) => {
    const { photo, email, nidNo, nidImgUrl, _id, status } = r
    const [loading, setLoading] = useState(false)
    const handleAccept = () => {
        const userType = { usertype: 'owner' }
        const status = { status: 'accepted' }
        fetch(`https://rent-roll-server.vercel.app/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userType)

        }).then(res => res.json())
            .then(data => {

                setLoading(true)
            })
            .catch(er => console.log(er))
        fetch(`https://rent-roll-server.vercel.app/hostRequests/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)

        }).then(res => res.json())
            .then(data => {

                setStatus({ status: "accepted" })
                setLoading(true)
            })
            .catch(er => console.log(er))

    }
    const handleReject = () => {
        fetch(`https://rent-roll-server.vercel.app/hostRequests/${_id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                setStatus({ status: "delete" })
                setLoading(true)
            })
            .catch(er => console.log(er))
    }
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo ? photo : 'https://static.vecteezy.com/system/resources/previews/006/634/891/original/cartoon-a-boy-waving-hand-free-vector.jpg'} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{email}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                <p>{nidNo}</p>
            </td>
            <td><a className='btn-link' target='_blank' href={nidImgUrl}>View NID</a></td>
            <th>
                {
                    status === 'accepted' ? <p>Accepted</p> : <><button onClick={handleAccept} className="btn bg-green-500 text-white btn-xs mr-1">Accept</button>
                        <button onClick={handleReject} className="btn btn-outline btn-xs">Reject</button></>
                }
            </th>
        </tr>
    );
};

export default TableData;