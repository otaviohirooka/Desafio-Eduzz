import '../../css/index.css';

import React from 'react';

import Logo_alianca from "../../img/Logo_alianca.jpg";
import Logo_imperio from "../../img/Logo_imperio.jpg";

const Header = () => {
    return(
        <header className="header">
            <img className="img-alianca"src={Logo_alianca} 
                                        alt="Logo da Aliança Rebelde com naves lideradas pela Millennium Falcon"
                                        title="Logo da Aliança Rebelde com naves lideradas pela Millennium Falcon"/>
            <div className="header-center">
                <h3 className="about-light">
                    On the light side you will have the 
                    balance between light and darkness and
                    feel everything around you. Join in!
                </h3>
                <h3 className="about-dark">
                    On the dark side you will have absolute
                    and unlimited power and have everything
                    you want. Join in!
                </h3>
            </div>
            <img className="img-imperio"src={Logo_imperio} 
                                        alt="Logo do Império Galático e frota estelar lideradas pelo Cruzador Estelar"
                                        title="Logo do Império Galático e frota estelar lideradas pelo Cruzador Estelar"/>
        </header>
    );
}

export default Header;