import React from 'react';
import * as ReactRedux from 'react-redux';

interface IProps {
    starWarsReducer: {
        filmsTitle: string;
    }
    searchStarWars: (filmsTitle: string) => void
}

class Output extends React.Component <IProps> {
    constructor(props: IProps) {
        super();

    }

    render() {
        return(
            <div></div>
        );
    }
}