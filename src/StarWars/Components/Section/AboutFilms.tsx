import React from "react";

interface IProps {
    id: number;
}

class AboutFilms extends React.Component<IProps> {
    state = {
        about: []
    };

    getAbout = async () => {
        const response = await fetch(`https://swapi.co/api/films/${this.props.id}.json`);
        const about = await response.json();

        this.setState({about: about});
    }

    render() {
        if (this.state.about.length === 0) {
            return (
                <div className="filme-button">
                    <button onClick={this.getAbout}>About</button>
                </div>
            );
        }

        return (
            <div className="sw-about-films">
                {Object.keys(this.state.about).map((key: any) => (
                    <div key={key} className="about-films">
                        <h3>{key}</h3>
                        <div>{this.state.about[key]}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default AboutFilms;