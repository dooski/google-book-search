import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col } from "../components/Grid";
import Card from "../components/Card"


function Saved() {
    const [bookList, nowbookList] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res => nowbookList(res.data)
            )
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Your Saved Books</h1>
            <Col size="md-10">
                {bookList.length ? (
                    <div>
                        {bookList.map(book => {
                            return (
                                <Card
                                    key={book.id}
                                    title={book.title}
                                    authors={book.authors}
                                    image={book.image}
                                    description={book.description}
                                    link={book.link} />
                            )
                        })}
                    </div>
                ) : (
                        <></>
                    )}
            </Col>
        </div>
    )
}

export default Saved;