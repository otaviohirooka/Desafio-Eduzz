import '../../css/index.css';

import React from 'react';

import Logo_sw from '../../img/Logo_sw.jpg';

import TitleFilms from '../Section/TitleFilms';

const Section = () => {
    return(
        <section className="section">
            <img className="logo-sw"src={Logo_sw} 
                                    alt="Logo de Star Wars"
                                    title="Logo de Star Wars"/>
            <h1 className="title-section">Search and choose your side</h1>
            <div>
                <TitleFilms />
            </div>
        </section>
    );
}

export default Section;