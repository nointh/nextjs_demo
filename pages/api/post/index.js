export default function handler(req, res) {
  const pid = req.query
  console.log(req.query.id)
  let data = `{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}`

  res.end(`${data}`)
}
