import axios from 'axios'

export default async function getAnswers(id) {
    const answers = await axios.get(`/answers/${id}`)
    return answers.data
}