import React from "react"

export default props => (
    <div className="work-card">
        <div className="card-header">
            <img src={props.image} alt="test" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </div>
)
