import React from 'react';
import { Link } from 'react-router-dom'

export function NoneFound({ links }) {
    return (
        <div className="w-full">
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-4">

                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-full" role="alert">
                    <p className="font-bold">None Found</p>
                    <p className="mb-2">The page you requested does not exists</p>
                </div>
                <Link 
                    to={links.home}
                    className="text-blue-500 hover:text-blue-700 underline p-2 mr-6"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}
