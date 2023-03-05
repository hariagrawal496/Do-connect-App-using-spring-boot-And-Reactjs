import axios from 'axios';

const url = "http://localhost:8083/api/userquestion";
const allUserQuestions = "http://localhost:8083/api/userquestions";
const edit = "http://localhost:8083/api/userquestion";

export const getallUserqa = async (id) => {
    id = id || '';
    return await axios.get(`${allUserQuestions}/${id}`);
}

export const getUserQuestion = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUserqa = async (userqa) => {
    return await axios.post(url,userqa);
}

export const editUserqa = async (id, userqa) => {
    return await axios.put(`${edit}/${id}`,userqa);
}


export const deleteUserqa = async (id) => {
    return await axios.delete(`${edit}/${id}`);
}



//------------------------------------

/*
const QA = "http://127.0.0.1:3003/qa";


export const getallqa = async (id) => {
    id = id || '';
    return await axios.get(`${allQuestions}/${id}`);
}
export const addqa = async (qa) => {
    return await axios.post(QA, qa);
}
export const editqa = async (id, qa) => {
    return await axios.put(`${QA}/${id}`, qa);
}

export const deleteqa = async (id) => {
    return await axios.delete(`${QA}/${id}`);
}

*/

