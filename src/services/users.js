import axios from 'axios';

const userEndPoint = "http://localhost:3000/user";


export const AddUser = async function (user) {
    const RegisterApiEndPoint = `${userEndPoint}/register`;
    const {
        data
    } = await axios.post(RegisterApiEndPoint, user);
    if (data === "s") {
        // console.log(data);
        return true;
    }
};




export const LoginUser = async function (curUser) {
    const loginApiEndPoint = `${userEndPoint}/login`;

    try {
        const response = await axios.post(loginApiEndPoint, curUser);
        const {
            token,
            person
        } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("loggedPerson", JSON.stringify(person.id));
        console.log(response.data);
        debugger;
        return {data: response.data};

    } catch (error) {
        debugger;
        return {
            error
        }
    }





    // const { data } = await axios.post(LoginApiEndPoint, user)
    // //console.log(data)
    // return data;

}



// export const LoginUser = async function (curUser) {
//     const loginApiEndPoint = `${userEndPoint}/login`;
//     const response = await axios.post(loginApiEndPoint, curUser).catch(err => {
//         return false
//     });
//     console.log(response.data);
//     if (response) {
//         const {
//             token,
//             person
//         } = response.data;
//         localStorage.setItem("token", token);
//         localStorage.setItem("loggedPerson", JSON.stringify(person.id));
//         console.log(response.data);
//         return response.data;
//     }




//     // const { data } = await axios.post(LoginApiEndPoint, user)
//     // //console.log(data)
//     // return data;

// }