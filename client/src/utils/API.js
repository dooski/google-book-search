import axios from "axios";

export default {
    searchGbooks: function (query) {
        const URI = `https://www.googleapis.com/books/v1/volumes?q=${query}`
        console.log(URI)
        return axios.get(URI).then(res => { return res.data })
    },
    getBooks: function () {
        return axios.get("/api/books");
    },
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    insertBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};