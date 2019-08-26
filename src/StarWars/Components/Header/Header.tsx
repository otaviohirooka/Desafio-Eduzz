import React from 'react';
import * as ReactRedux from 'react-redux';

interface IProps {
    starWarsReducer: {
        filmsTitle: string;
    }
    searchStarWars: (filmsTitle: string) => void
}

const Header = (props: IProps) => {
    return(
        <div></div>
    );
}