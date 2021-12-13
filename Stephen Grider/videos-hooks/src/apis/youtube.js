import axios from 'axios'

const KEY = 'AIzaSyBKWHjKfPPhAuP7Y1I2h795mPeRdmt-LOI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})