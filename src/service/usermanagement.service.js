import { axios } from "axios";

const BASE_URL = 'http://localhost:4000/users'

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(BASE_URL).then((res) => {
                resolve(res.data);
            })
            } catch (err) {
            reject(err);
        }
    });
}