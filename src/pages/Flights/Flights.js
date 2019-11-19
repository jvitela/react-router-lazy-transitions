import React from 'react'
import { Link } from 'react-router-dom'
import { sleep } from 'Utils'

export default function Flights(props) {
    console.log('Flights::render'); //, props);
    props = {
        links: { cancel: '/' },
        ...props
    };
    return (
        <div className="w-full">
            <div className="max-w-3xl mx-auto flex p-6 bg-white rounded-lg shadow mt-4">
                <div className="pt-1">
                    <h4 className="text-xl text-gray-900 leading-tight">
                        Third page
                    </h4>
                    <p className="text-base text-gray-600 leading-normal mb-2">
                        Cupcake ipsum dolor sit amet. Chocolate cake pudding candy marshmallow chocolate gummies macaroon muffin. Wafer cupcake pie. Wafer cookie danish pudding candy canes. Tart cotton candy gingerbread pie. Biscuit macaroon muffin liquorice liquorice.
                    </p>
                    <p className="text-base text-gray-600 leading-normal mb-2">
                        Brownie pudding jelly-o cheesecake dessert biscuit soufflé chocolate bar lemon drops. Liquorice pastry jujubes lollipop wafer pudding marzipan. Candy cookie soufflé sweet muffin donut jelly. Lollipop fruitcake pudding toffee topping tootsie roll cake. Ice cream pastry marzipan dessert. Dessert gummi bears cheesecake liquorice soufflé chocolate bar. Lemon drops pastry cotton candy.
                    </p>
                    <p className="text-base text-gray-600 leading-normal mb-2">
                        <Link
                            to={props.links.cancel}
                            className="text-blue-500 hover:text-blue-700 underline p-2 mr-6"
                        >
                            Back
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

Flights.defaultProps = {
};

Flights.getInitialProps = async function () {
    // console.log('Flights::getInitialProps start');
    await sleep(500);
    // console.log('Flights::getInitialProps end');
    return {};
}
