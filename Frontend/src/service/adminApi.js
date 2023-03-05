import axios from 'axios';


const url = "http://localhost:8081/api/admin";
const url1 = "http://localhost:8081/api/admins";
const url2 = "http://localhost:8081/api/admin";

export const getallAdmins = async (id) => {
    id = id || '';
    return await axios.get(`${url1}/${id}`);
}

export const getallAdmin = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addAdmin = async (user) => {
    return await axios.post(url,user);
}

export const editAdmin = async (id, user) => {
    return await axios.put(`${url2}/${id}`,user);
}


export const deleteAdmin = async (id) => {
    return await axios.delete(`${url2}/${id}`);
}