import axios from "axios";

const localhost = "http://localhost:8090/api";

const getAllPrivilege = () => axios.get(`${localhost}/privilegios/allprivilegios`);


const findPrivilege = (id) => axios.get(`${localhost}/privilegios/findprivilege/${id}`);


const updatePrivilege = (privilege) => axios.put(`${localhost}/privilegios/updateprivilegio`,privilege);

const addPrivilege = privilege => axios.post(`${localhost}/privilegios/addprivilegio`, privilege);

export {getAllPrivilege, findPrivilege, updatePrivilege, addPrivilege};
