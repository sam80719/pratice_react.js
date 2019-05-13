import axios from 'axios';

const KEY = 'AIzaSyChZyRjxt3Zaw1tZ3Ev2V0eTmHlybkaoTM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippest',
        maxResults: 5,
        key: KEY
    }
});