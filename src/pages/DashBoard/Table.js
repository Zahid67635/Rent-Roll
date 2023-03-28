import React, { useEffect, useState } from 'react';
import TableData from './TableData';

const Table = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState({})
    useEffect(() => {
        fetch('https://rent-roll-server.vercel.app/hostRequests')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(er => console.log(er))
    }, [status])
    return (
        <div className="overflow-x-auto w-full mt-5 px-1">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>NID No.</th>
                        <th>NID</th>
                        <th>Request</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((r, i) => <TableData key={i} r={r} setStatus={setStatus}></TableData>)
                    }
                </tbody>

            </table >
        </div >
    );
};

export default Table;