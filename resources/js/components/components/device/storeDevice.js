import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const storeDevices = (values, e) => {
    console.log(values);
    const API = axios.create({
        baseURL: 'http://localhost:8000/devices/',
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
    });


    try{
        console.log(values.data);
        API.post('store', values)
           .then((res) => {
            console.log(res);
            console.log(res.data);
               toast.success('Urządzenie zostało dodane poprawnie', {
                   position: "bottom-left",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
               });
           });
           e.target.reset();


    }catch(error){
        console.log(error);
    }


}


export default storeDevices;