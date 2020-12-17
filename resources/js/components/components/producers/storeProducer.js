import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const storeProducer = (values, e) => {
    const API = axios.create({
        baseURL: 'http://localhost:8000/producers',
        headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },

    });

    try{
        API.post('store', values)
           .then((res) => {
               toast.success('Producent został dodany poprawnie', {
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

export default storeProducer;