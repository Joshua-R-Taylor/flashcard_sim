import axios from 'axios'

export default async function getCards(type, id) {
    console.log(type)
    const cards = await axios.get(`/cards/${type}/${id}`)
    return cards.data
}