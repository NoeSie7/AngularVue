import axios from 'axios';

const allRoles = () => {
  return axios.get(`http://localhost:8090/api/roles/allroles`);
};

// Actualizar usuario
const updateRole = text => {
  console.log("LLego a actualizar");

  const headers = {
    "Content-Type": "application/json"
  };

  return axios(
    {
      method: "put",
      url: "http://localhost:8090/api/roles/updaterol",
      data: text
    },
    headers
  );
};

// Añadir usuario
const addRole = (text) => {

  const headers = {
    "Content-Type": "application/json"
  };
  return axios(
    {
      method: "post",
      url: "http://localhost:8090/api/roles/addrol",
      data: text
    },
    headers
  );
};


//Borrar usuario
const deleteRole = id => {
  return axios.delete(`http://localhost:8090/api/roles/deleterol/${id}`);
};


export {allRoles, updateRole, addRole, deleteRole};
