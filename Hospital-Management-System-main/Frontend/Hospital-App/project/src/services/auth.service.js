import { fetchApi } from "../utils/api";
import apiList from "../utils/api-list"
import ROLES from "../constants/user-roles";

export const login = async ({ username, password }) => {
    if (!username || !password) {
        return {
            success: false,
            status: 400,
            message: "Please provide username and password"
        }
    }
    const loginEndpoint = apiList.auth.login;
    const response = await fetchApi({
        url: loginEndpoint,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: { username, password }
    })
    if (response.success) {
        localStorage.setItem('access-token', response?.data?.token);
        localStorage.setItem('user', JSON.stringify({ username: response?.data?.username, role: response?.data?.role }))
    }
    return response;
}

export const register = async ({
    username,
    password,
    confirmPassword,
    firstName,
    lastName,
    role = ROLES.PATIENT,
    contact,
    address = "",
    dob,
    gender
}) => {
    if ([username, password, confirmPassword, firstName, lastName, contact, dob, gender].some(val => !val)) {
        return {
            success: false,
            status: 400,
            message: 'Please provide all the required fields'
        }
    }

    if (password !== confirmPassword) {
        return {
            success: false,
            status: 400,
            message: 'Passwords are not matching.'
        }
    }

    const registerEndpoint = apiList.auth.register;
    const response = await fetchApi({
        url: registerEndpoint,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {
            username,
            password,
            confirmPassword,
            firstName,
            lastName,
            role,
            contact,
            address,
            dob,
            gender
        }
    })

    return response;
}