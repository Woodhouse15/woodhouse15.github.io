import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com/woodhouse15/repos';

export const getUserRepositories = async () => {
    const response = await axios.get(GITHUB_API_URL);
    return response.data;
}
