import axios from 'axios';

const url = "http://localhost:8084/api/answer";
const allAnswers = "http://localhost:8084/api/answers";
const edit = "http://localhost:8084/api/answer";

export const getallAns = async (id) => {
    id = id || '';
    return await axios.get(`${allAnswers}/${id}`);
}

export const getAnswer = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addAns= async (ans) => {
    return await axios.post(url,ans);
}

export const editAns = async (id, ans) => {
    return await axios.put(`${edit}/${id}`,ans);
}


export const deleteAns = async (id) => {
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

