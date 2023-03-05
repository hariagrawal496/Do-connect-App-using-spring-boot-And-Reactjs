import axios from 'axios';

const url = "http://localhost:8083/api/question";
const allQuestions = "http://localhost:8083/api/questions";
const edit = "http://localhost:8083/api/question";

export const getallqa = async (id) => {
    id = id || '';
    return await axios.get(`${allQuestions}/${id}`);
}

export const getQuestion = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addqa = async (qa) => {
    return await axios.post(url,qa);
}

export const editqa = async (id, qa) => {
    return await axios.put(`${edit}/${id}`,qa);
}


export const deleteqa = async (id) => {
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

