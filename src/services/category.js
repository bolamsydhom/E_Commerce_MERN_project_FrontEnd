import axios from 'axios';

const catEndPoint = "http://localhost:3000/category";


export const getAllCategories = async function () {
    const RegisterApiEndPoint = `${catEndPoint}`;
    const {
        data
    } = await axios.get(RegisterApiEndPoint);

        return data;
    
};

export async function GetCatById(id) {
    const {
        data
    } = await axios.get(`${catEndPoint}/${id}`);
    return data
}




// export const LoginUser = async function (curUser) {
//     const loginApiEndPoint = `${userEndPoint}/login`;
//     const response = await axios.post(loginApiEndPoint, curUser).catch(err => console.log(err));
//     console.log(response.data);
//     const {
//         token,
//         person
//     } = response.data;
//     localStorage.setItem("token", token);
//     localStorage.setItem("loggedPerson", JSON.stringify(person));
//     console.log(response.data);
//     return response.data;

// }