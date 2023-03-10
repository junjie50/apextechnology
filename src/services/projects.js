import axios from 'axios'

const baseUrl = 'http://localhost:3001'

const getAll = () => {
  return axios.get(baseUrl + '/projects')
}

const ProjectsServices = {
  getAll,
}

export default ProjectsServices