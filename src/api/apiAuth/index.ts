import http from "../http";

interface ISubmitUser {
    name : string,
    phoneNumber : string
}

export const login = (params :ISubmitUser ) => {
    return http.post('/api/auth/login', params);
}

export const register = (params : ISubmitUser) => {
    return http.post('/api/auth/register', params);
}

export const getAuth = () => {
    return http.get('/api/auth/getAuth');
}