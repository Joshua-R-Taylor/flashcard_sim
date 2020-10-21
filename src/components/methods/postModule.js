import axios from 'axios'

export default async function postModule(title, id) {
    const moduleId = await axios.post(`/modules/${id}`, {title})
    return moduleId
}