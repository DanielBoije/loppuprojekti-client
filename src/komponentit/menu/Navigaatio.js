import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigaatio.css'


// class Navigaatio extends Component {
//     render() {

    const Navigaatio = props => {
        return (
            <ul className='nav-links'>
                <li>
                <NavLink to="/">Koti</NavLink> 
                </li>
                <li>
                <NavLink to="/lomakkeet">Johto</NavLink> 
                </li>
                <li>
                <NavLink to="/lomake">Henkilöstö</NavLink>
                </li>
                <li>
                <NavLink to="/tilastot">Tilastot</NavLink>
                </li>
                <li>
                <NavLink to="/lista">Lista</NavLink>
                </li>
            </ul>
        );
    }


export default Navigaatio;