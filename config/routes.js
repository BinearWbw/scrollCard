import axios from 'axios'
const addRoutes = async () => {
  let routes = []
  let res2 = await axios.get(
    'https://api.taptogame.com/api/category?origin=taptogame&page=1&size=10000'
  )
  res2.data.data.map((item) => {
    routes.push(`/category/${item.name.toLowerCase()}`)
  })
  let res1 = await axios.get(
    'https://api.taptogame.com/api/sitemap/games?origin=taptogame'
  )
  res1.data.data.map((item) => {
    const encodedName = item.name.replace(/[^a-zA-Z0-9\\s]/g, '-').toLowerCase()
    routes.push(`/game/${encodedName}-${item.id}`)
    routes.push(`/download/${encodedName}-${item.id}`)
  })
  return routes
}
let routes = addRoutes()
export default routes
