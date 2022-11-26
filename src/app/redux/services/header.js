let token = localStorage.getItem("token");

const SIMPLE_HEADER = {
  'Content-Type':'application/json'
}

const AUTH_HEADER = {
  'Content-Type':'application/json',
  'Authorization':`Bearer ${token}`
}

export { SIMPLE_HEADER, AUTH_HEADER };