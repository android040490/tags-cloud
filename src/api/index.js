import axios from 'axios';

const URL = 'https://gist.githubusercontent.com/snownoop/e6ca04705cf03cbe6ef9beaf16a306ab/raw/07906333730ca961a8091a8c16b05d26a8ee7cd9/Tags%2520Cloud%2520Data';


export const fetchTags = () => {
    return axios.get(URL)
}