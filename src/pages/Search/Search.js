import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Search(props) {
    const [isLoading, setLoading] = useState(false);
    console.log("Search::render"); //, { isLoading }, props);
    return (
        <div className="w-full">
            <div className="max-w-3xl mx-auto flex p-6 bg-white rounded-lg shadow mt-4">
                <div className="pt-1">
                    <h4 className="text-xl text-gray-900 leading-tight">
                        Second page
                    </h4>
                    <p className="text-base text-gray-600 leading-normal mb-2">
                        Candy dessert croissant jelly-o biscuit pastry sesame snaps gummi bears. Marshmallow wafer powder lollipop. Halvah pudding soufflé cheesecake icing. Donut marshmallow gummies oat cake cheesecake I love. Chocolate cake bonbon icing chocolate bar muffin pudding gingerbread I love sesame snaps. Soufflé jujubes macaroon chocolate bar oat cake icing jelly beans gingerbread.
                    </p>
                    <p className="text-base text-gray-600 leading-normal mb-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                setLoading('back');
                                props.history.push(props.links.cancel);
                            }}
                        >
                            {isLoading === 'back' ? 'Loading..' : 'Back'}
                        </button>
                        <Link
                            to={props.links.success}
                            onClick={() => setLoading('next')}
                            className="text-blue-500 hover:text-blue-700 underline p-2 mr-6"
                        >
                            {isLoading === 'next' ? 'Loading..' : 'Next'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

// const delay = time => (new Promise(resolve => setTimeout(resolve, time)));
// Search.getInitialProps = async () => {
//     await delay(1000);
// };