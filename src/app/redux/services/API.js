import { SIMPLE_HEADER, AUTH_HEADER } from "./header";
const URL = process.env.REACT_APP_BACKEND_API;

const option = async ({entity}) =>
  await fetch(`${URL}/${entity}/options/`, {
    headers: AUTH_HEADER,
  }
);

const login = async ({entity,formData}) =>
  await fetch(`${URL}/${entity}/`, {
    headers: SIMPLE_HEADER,
    method:"POST",
    body:JSON.stringify(formData) 
  }
);

const get = async ({entity}) =>
  await fetch(`${URL}/${entity}/`, {
    headers: AUTH_HEADER,
  }
);

const post = async ({entity,formData,id}) =>
  await fetch(`${URL}/${entity}/`, {
    headers: AUTH_HEADER,
    method:"POST",
    body:JSON.stringify(formData) 
  }
);

const put = async ({entity,formData,id}) =>
  await fetch(`${URL}/${entity}/${id}/`, {
    headers: AUTH_HEADER,
    method:"PUT",
    body:JSON.stringify(formData) 
  }
);


const deletes = async ({entity,id}) =>
  await fetch(`${URL}/${entity}/${id}/`, {
    headers: AUTH_HEADER,
    method:"DELETE",
  }
);

const API = {option,login,get,post, put, deletes}
export default API;