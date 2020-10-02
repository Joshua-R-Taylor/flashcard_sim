import axios from 'axios'

export default async function getClasses() {
    const classes = await axios.get('/classes')
    return classes.data
}