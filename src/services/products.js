import axios from '../../node_modules/axios';

const getAllProductsApiEndPoint = "http://localhost:3000/product";
export async function GetAllProducts(skip, limit, sortBy,sdir) {
    const api =
    sortBy ? `${getAllProductsApiEndPoint}?limit=${limit}&skip=${(skip-1)*limit}&sortBy=${sortBy}&sdir=${sdir}`:
     limit ? `${getAllProductsApiEndPoint}?limit=${limit}&skip=${(skip-1)*limit}` :
    getAllProductsApiEndPoint;

    
    const {
        data
    } = await axios.get(api);
    // const { data } = await axios.get(getAllProductsApiEndPoint);
    debugger;
    return data
}

const catEndPoint = "http://localhost:3000/category";
export async function GetFilteredProducts(skip, limit, id, sortBy) {
    const api = sortBy ? `${catEndPoint}/filter/${id}?limit=${limit}&skip=${(skip-1)*limit}&sortBy=${sortBy}` :
        `${catEndPoint}/filter/${id}?limit=${limit}&skip=${(skip-1)*limit}`;
    const {
        data
    } = await axios.get(api);
    console.log(data);
    console.log(data[0].products);

    debugger;
    return data[0].products
}



export async function GetById(id) {
    const {
        data
    } = await axios.get(`${getAllProductsApiEndPoint}/${id}`);
    return data
}


const addProductApiEndPoint = "http://localhost:3000/product/add";
export const AddaProduct = async function (item) {

    try {
        const 
            {data}
         = await axios.post(addProductApiEndPoint,item, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
        return {data};
    } catch (error) {
        console.log(error)
        return {error};
    }
};

export const PatchaProduct = async function (id,item) {

    try {
        const {
            data
        } = await axios.patch(`${getAllProductsApiEndPoint}/${id}`, item, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
        return {
            data
        };
    } catch (error) {
        console.log(error)
        return {
            error
        };
    }
};

export const Delete = async id => {
    await axios.delete(`${getAllProductsApiEndPoint}/${id}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};


const uploadImageApiEndPoint = "http://localhost:3000/product/test";
export const UploadImage = async function (item) {
    let formData = new FormData();
    formData.append('photo',item)
    const {
        data
    } = await axios.post(uploadImageApiEndPoint, formData);
    return data;
};




// const getAllCategoriesApiEndPoint = "http://localhost:3000/category";
// export const GetAllCategories = async function () {
//     const { data } = await axios.get(getAllCategoriesApiEndPoint);
//     return data;
// }