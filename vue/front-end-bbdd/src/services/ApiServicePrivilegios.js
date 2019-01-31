import axios from 'axios';

const allPrivileges = () => {
  return axios.get(`http://localhost:8090/api/privilegios/allprivilegios`);
};

// Actualizar usuario
const updatePrivilegio = text => {
  console.log("LLego a actualizar");

  const headers = {
    "Content-Type": "application/json"
  };

  return axios(
    {
      method: "put",
      url: "localhost:8090/api/privilegios/updateprivilegio",
      data: text
    },
    headers
  );
};

// Añadir usuario
const addPrivilegio = (text) => {

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


//Borrar usuario
const deletePrivilegio = id => {
  return axios.delete(`http://localhost/8090/api/privilegios/deleteprivilegio/${id}`);
};


export {allPrivileges, updatePrivilegio, addPrivilegio, deletePrivilegio};
