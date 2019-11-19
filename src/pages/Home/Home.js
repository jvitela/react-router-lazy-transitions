import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';

export default class Home extends Component {
   static defaultProps = {
      history: null,
      links: { success: '/' }
   };

   static async getInitialProps() {
      // console.log('Home::getInitialProps');
      return {};
   }

   onNavigate() {
      this.props.history.push('/search'); // this.props.links.success);
   }

   // componentDidMount() { console.log('Home::componentDidMount'); }
   // componentWillUnmount() { console.log('Home::componentWillUnmount'); }

   render() {
      console.log('Home::render'); //, this.props);
      return (
         <div className="w-full">
            <div className="max-w-3xl mx-auto flex p-6 bg-white rounded-lg shadow mt-4">
               <div className="flex-shrink-0">
                  <img src={logo} className="app-logo h-32 w-32" alt="logo" />
               </div>
               <div className="pt-1">
                  <h4 className="text-xl text-gray-900 leading-tight">
                     Home
                  </h4>
                  <p className="text-base text-gray-600 leading-normal mb-2">
                     Cupcake ipsum dolor sit. Amet jelly-o caramels liquorice apple pie. Brownie lemon drops cookie tart gummies jelly beans I love soufflé. Caramels apple pie powder tootsie roll I love jelly beans dessert danish I love. Halvah I love pie bear claw wafer macaroon halvah sesame snaps. Liquorice marzipan brownie icing.
                  </p>
                  <p className="text-base text-gray-600 leading-normal mb-2">
                     <Link to={this.props.links.success} className="text-blue-500 hover:text-blue-700 underline">
                        Navigate using a link
                     </Link>
                  </p>
                  <p className="text-base text-gray-600 leading-normal mb-2">
                     <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={this.onNavigate.bind(this)}
                     >
                        Navigate Imperatively
                     </button>
                  </p>
               </div>
            </div>
         </div>
      );
   }
};
