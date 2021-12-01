const books = [
    {
        name: "1984",
        author: "George Orwell",
        published: 1949,
    },
    {
        name: "The Gulag Archipelago",
        author: "Aleksandr Solzhenitsyn",
        published: 2018,
    },
]

exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify(books)
    }
}
