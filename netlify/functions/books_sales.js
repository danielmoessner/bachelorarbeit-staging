const books = [
    {
        name: "1984",
        author: "George Orwell",
        published: 1949,
        sales: 2,
    },
    {
        name: "The Gulag Archipelago",
        author: "Aleksandr Solzhenitsyn",
        published: 2018,
        sales: 0
    },
]

exports.handler = async function () {
    return {
        statusCode: 200,
        headers: {
                'Access-Control-Allow-Origin': '*',
            },
        body: JSON.stringify(books)
    }
}
