const sales = [
    {
        "id": 1,
        "book": 1,
        "date": "2021-12-10"
   },
   {
        "id": 2,
        "book": 1,
        "date": "2021-12-20"
   }
]

exports.handler = async function () {
    return {
        statusCode: 200,
        headers: {
                'Access-Control-Allow-Origin': '*',
            },
        body: JSON.stringify(sales)
    }
}
