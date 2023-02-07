import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>User</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Request</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>01777711111</p>
                        </td>
                        <td>zoom@la.com</td>
                        <th>
                            <button className="btn btn-outline bg-green-500 text-white btn-xs">Accept</button>
                            <button className="btn btn-outline btn-xs">Reject</button>
                        </th>
                    </tr>

                </tbody>

            </table>
        </div>
    );
};

export default Table;