import axios from 'axios'

export default async function postClass(name) {
    const classId = await axios.post('/classes', {name})
    return classId
}