import axios from 'axios';

const BASE_URL = 'https://mxpertztestapi.onrender.com/api/adventure';

export const fetchStories = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching stories:', error);
        return [];
    }
};

export const fetchStoryById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching story with ID ${id}:`, error);
        return null;
    }
};

