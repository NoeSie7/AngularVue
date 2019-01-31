import axios from "axios";

// Obtener todos los usuarios
const allUser = () => {
  return axios.get(`http://localhost:8090/api/user/alluser`);
};


// Actualizar usuario
const updateUser = text => {
  console.log("LLego a actualizar");

  const headers = {
    "Content-Type": "application/json"
  };

  return axios(
    {
      method: "put",
      url: "http://localhost:8090/api/user/updateuser",
      data: text
    },
    headers
  );
};

// Añadir usuario
const addUser = (text) => {

  const headers = {
    "Content-Type": "application/json"
  };
  return axios(
    {
      method: "post",
      url: "http://localhost:8090/api/user/adduser",
      data: text
    },
    headers
  );
};


//Borrar usuario
const deleteUser = id => {
  return axios.delete(`http://localhost:8090/api/user/deleteuser/${id}`);
};



export { allUser, updateUser, deleteUser, addUser };


