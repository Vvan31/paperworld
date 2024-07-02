import axios from 'axios';

class RegisterService {
    registerUser(user) {
        return axios.post('https://paperworld-production.up.railway.app/api/visitors', user);
    }

    registerExhibitor(user) {
        return axios.post('https://paperworld-production.up.railway.app/api/exhibitors?populate=spot', user);
    }

    sendEmailExhibitor(user) {
        return axios.post('https://paperworld-production.up.railway.app/api/emails', user);
    }

    getRegisteredExhibitorsSpots() {
        return axios.get('https://paperworld-production.up.railway.app/api/exhibitors');
    }

    getSpots() {
        return axios.get('https://paperworld-production.up.railway.app/api/spots?populate=exhibitor');
    }
    sendEmailExhibitorContact(user){
        // return axios.post('http://localhost:1337/api/exhibitor-contacts', user);
        return axios.post('https://paperworld-production.up.railway.app/api/exhibitor-contacts', user);
    }
}

export default new RegisterService();
