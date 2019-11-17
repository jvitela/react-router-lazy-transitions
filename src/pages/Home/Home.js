import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './Home.css';

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
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>
                  Cupcake ipsum dolor sit. Amet jelly-o caramels liquorice apple pie. Brownie lemon drops cookie tart gummies jelly beans I love soufflé. Caramels apple pie powder tootsie roll I love jelly beans dessert danish I love. Halvah I love pie bear claw wafer macaroon halvah sesame snaps. Liquorice marzipan brownie icing.
               </p>
               <p>
                  <Link to={this.props.links.success} className="App-link">
                     Navigate using a link
                  </Link>
               </p>
               <p>
                  <button
                     className="btn"
                     onClick={this.onNavigate.bind(this)}
                  >
                     Navigate Imperatively
                  </button>
               </p>
            </header>
         </div>
      );
   }
};
