import axios from "axios";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1';

const useAuth = async(path, data) => {
    const url = `${urlBase}${path}`;
    await axios.post(url,data)
        .then(res =>{
            'token' in res.data && localStorage.setItem('token', res.data.token);
             console.log(res.data)
        })        
        .catch(err => console.log(err));
}

export default useAuth;
//localStorage.setItem('saludo', 'hola');

//const numbers = [2,4,6,8];
//localStorage.setItem('numbers1', numbers );
//localStorage.setItem('numbers2', JSON.stringify(numbers));

//const item1 = JSON.parse(localStorage.getItem('numbers1'));

//const item2 = JSON.parse(localStorage.getItem('numbers2')); 

//console.log(item2);