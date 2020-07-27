import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card"
import { Input, FormBtn } from "../components/Form";

function Search() {
    const [bookResults, setBookResults] = useState([])
    const [search, setSearch] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({ [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (search.query) {
            API.searchGbooks(search.query)
                .then(res => {
                    console.log(res)
                    setBookResults(res.items)
                })
                .then(setSearch({}))
                .catch(err => console.log(err));
        }

    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Find a Book</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="query"
                            placeholder="Find books"
                        />
                        <FormBtn
                            disabled={!(search.query)}
                            onClick={handleFormSubmit}>
                            Search Google
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-2" />
                <Col size="md-1" />
                <Col size="md-10 sm-12">
                    {bookResults.length ? (
                        <div>
                            {bookResults.map(book => {
                                return (
                                    <Card
                                        key={book.id ? book.id : ""}
                                        title={book.volumeInfo.title ? book.volumeInfo.title : ""}
                                        authors={book.volumeInfo.authors ? book.volumeInfo.authors : ""}
                                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                                        description={book.volumeInfo.description ? book.volumeInfo.description : ""}
                                        link={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : ""}
                                    >

                                    </Card>
                                )
                            })}
                        </div>
                    ) : (
                            <></>
                        )}
                </Col>
                <Col size="md-1" />
            </Row>
        </Container>
    );
}


export default Search;