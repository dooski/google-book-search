import React from "react";
import { ViewBtn, SaveBtn } from "../Buttons";
import API from "../../utils/API";

function Card(props) {
    function saveBook(book) {
        console.log(book)
        API.insertBook(book)
    }
    return (
        <div className="card mx-auto">
            <div className="row">
                <div className="col-8" >
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text"><small >{props.authors ? `Written by ${props.authors[0]}` : ""}</small></p>
                </div>
                <div className="col-sm-4 btnCell">
                    <ViewBtn href={props.link} />
                    <SaveBtn onClick={() => saveBook({
                        title: props.title,
                        author: props.authors[0],
                        image: props.image,
                        description: props.description,
                        link: props.link
                    })} />
                </div>

                <div className="col-md-4">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card