import React from 'react';

import "./Content.css"

export default function Content(props) {
    return (
        <div className={`content ${props.className}  ${props.pageState < props.dataSide && "go-right"} ${props.pageState > props.dataSide && "go-left"}`} id = {`${props.id}`}>
            {props.children}
        </div>
    )
}
