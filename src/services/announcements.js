import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const getAll = () => {
  return axios.get(baseUrl + '/announcements')
}

const AnnouncementsService = {
  getAll,
}

export default AnnouncementsService