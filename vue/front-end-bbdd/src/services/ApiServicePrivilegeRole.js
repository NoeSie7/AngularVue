import axios from 'axios';

const allPrivilegeRole = () => {
  return axios.get(`http://localhost:8090/api/privilegios/allprivilegios`);
};

const updatePrivilegeRole = (text) => {
  console.log("LLego a actualizar", text);

  const headers = {
    "Content-Type": "application/json"
  };

  return axios(
    {
      method: "put",
      url: "http://localhost:8090/api/privilegios/updateprivilegio",
      data: text
    },
    headers
  );
};

// Añadir usuario con rol
const addRolPrivilege = (text) => {

  const headers = {
    "Content-Type": "application/json"
  };
  return axios(
    {
      method: "post",
      url: "http://localhost:8090/api/privilegios/addprivilegio",
      data: text
    },
    headers
  );
};



export {allPrivilegeRole, updatePrivilegeRole, addRolPrivilege};
