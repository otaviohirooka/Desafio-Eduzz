import React from 'react';

import * as sw from '../Reducers/Reducers';
import { directive } from '@babel/types';

interface IProps {
    starWarsReducer: {
        filmsTitle: string;
    }
    searchStarWars: (filmsTitle: string) => void
}

class StarWarsApi extends React.Component<IProps> {
    title = (filmsTitle: string) => () => {
        this.props.searchStarWars(filmsTitle);
    }

    render() {
        return (
            
        )
    }

}

export default StarWarsApi;