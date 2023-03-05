import axios from 'axios';


const url = "http://localhost:8082/api/user";
const allUsers = "http://localhost:8082/api/users";
const edit = "http://localhost:8082/api/user";


export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${allUsers}/${id}`);
}

export const getallUser = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url,user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${edit}/${id}`,user);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${edit}/${id}`);
}