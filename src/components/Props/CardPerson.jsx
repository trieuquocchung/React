import React, { Component } from 'react';

export default class CardPerSon extends Component {
    render() {
        let { img, name, age } = this.props;

        return (
            <div className="card">
                <img className="card-img-top" src={img} alt="Title" />holder
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{age}</p>
                </div>
            </div>
        );
    }
}
