import React from 'react';

const Pagination = () => {
    return (
        <div className="flex justify-center space-x-1 text-gray-800">
            <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100 hover:text-violet-600 hover:border-violet-600">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50 hover:text-violet-600 hover:border-violet-600">1</button>
            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100 hover:text-violet-600 hover:border-violet-600" title="Page 2">2</button>
            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100 hover:text-violet-600 hover:border-violet-600" title="Page 3">3</button>
            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100 hover:text-violet-600 hover:border-violet-600" title="Page 4">4</button>
            <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-50 border-gray-100 hover:text-violet-600 hover:border-violet-600">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>

    );
};

export default Pagination;