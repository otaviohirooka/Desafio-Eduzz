import React from 'react';
import * as ReactRedux from 'react-redux';

interface IProps {
    starWarsReducer: {
        filmsTitle: string;
    }
    searchStarWars: (filmsTitle: string) => void
}

const Button = (props: IProps) => {
    return(
        <div></div>
    );
}