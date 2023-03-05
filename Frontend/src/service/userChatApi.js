import axios from 'axios';


const url = "http://localhost:8082/api/chat";
const allChats = "http://localhost:8082/api/chats";

export const getallChats = async (id) => {
    id = id || '';
    return await axios.get(`${allChats}/${id}`);
}

export const addChat = async (chat) => {
    return await axios.post(url,chat);
}
