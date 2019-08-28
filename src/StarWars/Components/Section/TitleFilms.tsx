import '../../css/index.css'; 

import React from "react";

import AboutFilms from './AboutFilms';

interface ITitleFilms {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

interface IState {
    titlefilms: ITitleFilms[];
}

class TitleFilms extends React.Component <any, IState> {
    state = {
        titlefilms: []
    };
    
    async componentDidMount() {
        const response = await fetch("https://swapi.co/api/films/");
        const allTitle = await response.json();
    
       this.setState({ titlefilms: allTitle.results });
        
    }

    render() {
        return (
            <div className="sw-container">
                {this.state.titlefilms.map((sw: any) => {
                    return (
                        <div key={sw.episode_id} className="sw-title">
                            <h3 className="sw-title">{sw.title}</h3>
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