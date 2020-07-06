import Auth from '../security/auth';


export const checkResponseStatus = (response) => {
    if(response.status >= 200 && response.status < 300) {

        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response.status;
        throw error;
    }
};

export const loginResponseHandler = (response, handler) => {
    Auth.logIn(response);

    if(handler) {
        handler.call();
    }
};