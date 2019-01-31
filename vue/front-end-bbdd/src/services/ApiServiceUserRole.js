import axios from 'axios';

const allUserRole = () => {
  return axios.get(`http://localhost:8090/api/userrol/alluserroles`);
};

const updateUserRole = (text) => {
  console.log("LLego a actualizar", text);

  const headers = {
    "Content-Type": "application/json"
  };

  return axios(
    {
      method: "put",
      url: "http://localhost:8090/api/userrol/updateuser/rol",
      data: text
    },
    headers
  );
};

// Añadir usuario con rol
const addUserRol = (text) => {

  const headers = {
    "Content-Type": "application/json"
  };
  return axios(
    {
      method: "post",
      url: "http://localhost:8090/api/userrol/adduserrol",
      data: text
    },
    headers
  );
};


export {allUserRole, updateUserRole, addUserRol};
