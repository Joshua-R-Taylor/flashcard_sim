import axios from 'axios'

export default async function getQuestions(id) {
    const questions = await axios.get(`/questions/${id}`)
    return questions.data
}