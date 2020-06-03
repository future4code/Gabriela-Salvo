import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from "./../containers/Router/index";
import { getTripDetails } from './ListTrips';


export const authenticationLogin = (email, password) => async(dispatch) =>{

    const admLogin =  {
        email:email,
        password:password,
    }
 try {
        const response = await axios.post ('https://us-central1-missao-newton.cloudfunctions.net/futureX/gabriela-salvo/login', admLogin);


        const userToken = response.data.token;
        window.localStorage.setItem("token", token);

        dispatch(push(routes.adminPanel))


    }catch(error){
        window.alert("Usuário ou senha incorretos")
    }
}

