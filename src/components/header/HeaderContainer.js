import React, {Component} from 'react';
import HeaderLogo from '../../components/header/HeaderLogo';
import './header.css';

class HeaderContainer extends Component{
    render(){
        return(
            <div className='header'>
                <HeaderLogo />
            </div>
        )
    }
}

export default HeaderContainer;
