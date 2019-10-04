import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Search(props) {
    const [isLoading, setLoading] = useState(false);
    // console.log("Search::render", { isLoading }, props);
    props = {
        links: { success: '/' },
        ...props
    };
    return (
        <div className="Search">
            <h2>Search Page</h2>
            <p>
                Candy dessert croissant jelly-o biscuit pastry sesame snaps gummi bears. Marshmallow wafer powder lollipop. Halvah pudding soufflé cheesecake icing. Donut marshmallow gummies oat cake cheesecake I love. Chocolate cake bonbon icing chocolate bar muffin pudding gingerbread I love sesame snaps. Soufflé jujubes macaroon chocolate bar oat cake icing jelly beans gingerbread.
            </p>

            <button
                type="button"
                onClick={() => props.navigate(props.links.cancel)}
            >
                Back
            </button>
            {isLoading
                ? 'isLoading..'
                : (
                    <Link to={props.links.success} onClick={() => setLoading(true)}>
                        Next
                    </Link>
                )
            }
        </div>
    );
};
