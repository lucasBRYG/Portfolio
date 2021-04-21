import React from 'react';

import "./NextButton.css";

export default function NextButton(props) {
    return (
        <div id = {props.direction} className = "next__button__container"  onClick = {props.onClick}>
            <i class={`fas fa-chevron-${props.direction}`}></i>
        </div>
    )
}