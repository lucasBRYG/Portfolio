import React from 'react';

import "./Projectcard.css"

export default function ProjectCard(props) {
    return (
        <div className = "card project-card">
            <div className = "card__content">
                <div className = "card__front" style={{backgroundImage: `url(${props.img})`, backgroundSize: `${props.size}`}}>
                    <h3 className = "card__title">
                        {props.title}
                    </h3>
                    <p className = "card__body">
                        {props.description}
                    </p>
                </div>
                
                <div className = "card__back">
                    <h4>Try it Out</h4>
                        <p><a className = "card__link" target = "#" href = {props.link}>{props.link}</a></p>
                    <h4>Github Repo</h4>
                        <p><a className = "card__link" target = "#" href = {props.github}>{props.github}</a></p>
                </div> 
            </div>
        </div>
    )
}
