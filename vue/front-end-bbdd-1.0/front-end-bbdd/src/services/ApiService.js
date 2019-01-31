import axios from "axios";
// import envi from '../config/dev.env';

const localhost = "http://localhost:8090/api";

const allUser = () => axios.get(`${process.env.VUE_APP_ROOT_API}/user/alluser`);
const updateUser = user => axios.put(`${localhost}/user/updateuser`,user);
const findUser = id => axios.get(`${localhost}/user/finduser/${id}`);
const addUser = user => axios.post(`${localhost}/user/adduser`, user);
const deleteUser = id => axios.delete(`${localhost}/user/deleteuser/${id}`)

export { allUser, updateUser, findUser , addUser, deleteUser};
