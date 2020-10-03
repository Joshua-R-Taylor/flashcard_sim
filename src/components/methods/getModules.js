import axios from 'axios'

export default async function getModules(id) {
    const modules = await axios.get(`/modules/${id}`)
    return modules.data
}