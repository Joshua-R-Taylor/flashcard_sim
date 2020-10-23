import axios from 'axios'

export default async function getCards(type, id) {
    const cards = await axios.get(`/cards/${type}/${id}`)
    return cards.data
}