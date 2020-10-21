import axios from 'axios'

export default async function postCards(cards, id) {
    let numOfCards = cards.length
    for(let i = 0; i < numOfCards; i++) {
        let question = cards[i].question
        let answer = cards[i].answer
        axios.post(`/cards/${id}`, {question, answer})
    }
}