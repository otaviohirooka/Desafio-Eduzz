import React from "react";

import AboutFilms from './AboutFilms';

interface ITitleFilms {
    title: string;
    episode_id: number;
}

interface IState {
    titlefilms: ITitleFilms[];
}

class TitleFilms extends React.Component <any, IState> {
    state = {
        titlefilms: []
    };
    
    getTitle = (titlefilms: ITitleFilms[]) => {
        console.log(titlefilms);
        return titlefilms;
        //const filmsNames = ["A New Hope", "Attack of the Clones", "The Phantom Menace", "Revenge of the Sith", "Return of the Jedi", "The Empire Strikes Back", "The Force Awakens"];
        //return titlefilms.filter((sw) => filmsNames.includes(sw.title));
    }
    

    async componentDidMount() {
        const response = await fetch("https://swapi.co/api/films/");
        const allTitle = await response.json();
        
        const titleSw = this.getTitle(allTitle);
        this.setState({ titlefilms: titleSw });
        
    }

    render() {
        return (
            <div className="sw-container">
                {this.state.titlefilms.map((sw: any) => {
                    return (
                        <div key={sw.episode_id} className="sw-title">
                            <h3>{sw.title}</h3>
                            <div>
                                <AboutFilms id={sw.episode_id}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TitleFilms;