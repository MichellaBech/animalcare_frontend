const URL = "http://localhost:7070/api";

function handleHttpErrors(res) {
if (!res.ok) {
  return Promise.reject({ status: res.status, fullError: res.json() })
}
return res.json();
}

function apiFacade() {
/* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/

const getUserRoles = () => {
    const token = getToken(); // Hent JWT-token fra localStorage
    if (token) {
      const payloadBase64 = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));
      return decodedPayload.roles || []; // Returnér roller som en liste
    }
    return [];
  };

  const fetchClinics = () => {
    const options = makeOptions("GET", true); // True betyder, at token tilføjes, hvis nødvendigt
    return fetch(URL + "/veterinaryclinics", options)
      .then(handleHttpErrors);
  };
  

const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
const getToken = () => {
  return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
}
  
   
const login = (user, password) => {/*TODO*/ 
  const options = makeOptions("POST", false, {username: user, password: password });
  return fetch(URL + "/auth/login", options)
      .then(handleHttpErrors)
      .then(res => {setToken(res.token);
        return res;
       })
      
 };


const fetchData = () => {/*TODO */  }


const makeOptions= (method,addToken,body) =>{
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json',
    }
  }
  if (addToken && loggedIn()) {
    opts.headers["Authentication"] = `Baerer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}
return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    getUserRoles,
    fetchClinics
}
}
const facade = apiFacade();

export default facade;
