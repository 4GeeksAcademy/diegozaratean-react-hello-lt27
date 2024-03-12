import React from 'react'

const Card = (props)=>{
    return(
        <div className="card" style={{width: "18rem", backgroundColor: '#ccc'}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {props.nombre} </h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Share</a>
            </div>
        </div>
    );
}

export default Card;