import axios from "axios";
const localhost = "http://localhost:8090/api";

const getAllRoles = () => axios.get(`${localhost}/roles/allroles`);

const findRol = id => axios.get(`${localhost}/roles/findrol/${id}`);

const updateRol = rol => axios.put(`${localhost}/roles/updaterol`, rol);

const addRol = rol => axios.post(`${localhost}/roles/addrol`, rol);

const deleteRol = id => axios.delete(`${localhost}/roles/deleterol/${id}`)

export { getAllRoles, updateRol, findRol, addRol, deleteRol };
