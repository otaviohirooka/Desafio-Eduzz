import React from 'react';
import * as ReactRedux from 'react-redux';

import * as sw from '../../Reducers/Reducers';
import { directive } from '@babel/types';

interface IProps {
    starWarsReducer: {
        filmsTitle: string;
    }
    searchStarWars: (filmsTitle: string) => void
}

class SearchStarWars extends React.Component<IProps> {
    title = (filmsTitle: string) => () => {
        this.props.searchStarWars(filmsTitle);
    }

    render() {
        return (
            <div></div>
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        starWarsReducers: state.starWarsReducers,
    }
}

const mapDispatchToProps = {
    searchStarWars: sw.searchStarWars,
}

const connect = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connect(SearchStarWars);
